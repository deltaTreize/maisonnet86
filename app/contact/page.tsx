export const metadata = {
  title: "MaisonNet86 – Contactez-nous",
  description: "Envoyez votre demande via notre formulaire et obtenez un devis rapide et précis.",
  openGraph: {
    title: "MaisonNet86 – Contact",
    description: "Formulaire de contact pour prestations de ménage et vitres à domicile dans la Vienne (86).",
    url: "https://maisonnet86.vercel.app/contact",
    siteName: "MaisonNet86",
    images: [
      {
        url: "/logo/maisonnet86-logo.webp",
        width: 1200,
        height: 630,
        alt: "Logo MaisonNet86",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaisonNet86 – Contact",
    description: "Formulaire de contact pour prestations de ménage et vitres à domicile dans la Vienne (86).",
    images: ["/logo/maisonnet86-logo.webp"],
  },
};

import ContactForm from "../components/contactForm/ContactForm";

export default function ContactPage() {
  return <ContactForm />;
}
