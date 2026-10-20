import { NextResponse } from 'next/server';
import { z } from 'zod';
import { siteConfig, whatsappUrl } from '@/lib/site';

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(80),
  business: z.string().trim().max(100).optional().default(''),
  contact: z.string().trim().min(3, 'Please enter an email or contact method.').max(120),
  service: z.enum(['starter', 'growth', 'operations', 'unsure']),
  message: z.string().trim().min(10, 'Please add a little more detail.').max(1500),
  website: z.string().optional().default(''),
});

const serviceNames: Record<string, string> = {
  starter: 'Starter — Digital storefront', growth: 'Growth — Lead generation',
  operations: 'Operations — Custom business system', unsure: 'Not sure yet / Something else',
};

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || 'Please check the form fields.' }, { status: 400 });
    }
    if (parsed.data.website) return NextResponse.json({ error: 'Unable to process this enquiry.' }, { status: 400 });

    const { name, business, contact, service, message } = parsed.data;
    const text = [
      'Hi Dean, I would like to discuss a project.', '', `Name: ${name}`,
      business ? `Business: ${business}` : '', `Preferred contact: ${contact}`,
      `Service: ${serviceNames[service]}`, '', 'Project details:', message,
    ].filter(Boolean).join('\n');

    // The form intentionally hands off to WhatsApp instead of silently storing personal data.
    return NextResponse.json({ whatsappUrl: whatsappUrl(text), configuredNumber: Boolean(siteConfig.whatsappNumber) });
  } catch {
    return NextResponse.json({ error: 'Could not process this request. Please try again.' }, { status: 400 });
  }
}
