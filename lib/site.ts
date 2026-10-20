export const siteConfig = {
  name: "Dean Chap",
  fullName: "Dean Chapotarongo",
  role: "Digital Solutions Developer",
  description:
    "I build modern websites and practical software systems that help businesses attract customers, streamline workflows, and turn digital opportunities into measurable results.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  email: "", // Add a real public email address before launch.
  github: "https://github.com/deano-98",
  linkedin: "", // Add a verified profile URL before launch.
};

export function whatsappUrl(message: string) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  if (!number) return `https://wa.me/?text=${encodeURIComponent(message)}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
