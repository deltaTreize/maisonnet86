import CreneauxClient from "../components/creneauxClients/CreneauxClients";


export const metadata = {
  title: "MaisonNet86 – Ménage & vitres à domicile dans la Vienne (86) - Planning des créneaux",
  description:
    "Consultez les créneaux disponibles pour votre ménage ou nettoyage de vitres dans la Vienne (86). Déclaration SAP avec crédit d'impôt 50%.",
  alternates: {
    canonical: "https://maisonnet86.fr/creneaux",
  },
  openGraph: {
    title: "MaisonNet86 – Ménage & vitres à domicile dans la Vienne (86) - Planning des créneaux",
    description:
      "Créneaux disponibles pour les prestations de ménage et nettoyage de vitres à domicile dans la Vienne (86).",
    url: "https://maisonnet86.fr/creneaux",
    siteName: "MaisonNet86",
    images: [
      {
        url: "https://maisonnet86.fr/logo/maisonnet86-logo.webp",
        width: 1200,
        height: 630,
        alt: "Planning MaisonNet86",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return <CreneauxClient />;
}
