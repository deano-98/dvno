export const siteConfig = {
  name: "Dean Chap",
  fullName: "Dean Chapotarongo",
  role: "Full-Stack Developer and Digital Solutions Specialist",
  description:
    "I build modern websites and practical software systems that help businesses attract customers, streamline workflows, and turn digital opportunities into measurable results.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "0779230211",
  email: "deanchaps@gmail.com",
  github: "https://github.com/deano-98",
  linkedin: "https://www.linkedin.com/in/dean-chap-721537187/",
};

export function whatsappUrl(message: string) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  if (!number) return `https://wa.me/?text=${encodeURIComponent(message)}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
