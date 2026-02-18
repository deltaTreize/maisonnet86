import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "MaisonNet86 – Ménage & vitres à domicile dans la Vienne (86) – Réduction d'impôt 50%",
  description:
    "Découvrez comment bénéficier de la réduction d'impôt de 50% sur les prestations de ménage et vitres à domicile avec MaisonNet86 dans la Vienne (86).",
  openGraph: {
    title: "MaisonNet86 – Ménage & vitres à domicile dans la Vienne (86) – Réduction d'impôt 50%",
    description:
      "Profitez de 50% de réduction d'impôt sur vos prestations de ménage et vitres à domicile.",
    url: "https://maisonnet86.fr/impot",
    siteName: "MaisonNet86",
    images: [
      {
        url: "https://maisonnet86.fr/logo/maisonnet86-logo.webp",
        width: 1200,
        height: 630,
        alt: "MaisonNet86 Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaisonNet86 – Réduction d'impôt 50%",
    description:
      "Profitez de 50% de réduction d'impôt sur vos prestations de ménage et vitres à domicile.",
    images: ["https://maisonnet86.fr/logo/maisonnet86-logo.webp"],
  },
};

export default function ImpotPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>💰 Réduction d&apos;impôt 50%</h1>

      <p className={styles.description}>
        En tant que particulier, vous pouvez bénéficier d&apos;une réduction d&apos;impôt de 50% sur les prestations de ménage à domicile et entretien de vitres. Cela vous permet de payer seulement la moitié du coût réel du service après déduction fiscale.
      </p>

      <p className={styles.description}>
        Cette réduction s&apos;applique dans le cadre du dispositif des services à la personne (SAP) et concerne toutes les interventions régulières ou ponctuelles effectuées à votre domicile.
      </p>

      <h2 className={styles.h2}>Comment ça fonctionne?</h2>

      <ul className={styles.ul}>
        <li className={styles.li}>Vous payez le montant total de la prestation au moment du règlement.</li>
        <li className={styles.li}>Vous pouvez déclarer ces frais dans votre déclaration d&apos;impôt ou via le service en ligne.</li>
        <li className={styles.li}>L&apos;administration fiscale vous remboursera 50% sous forme de réduction ou crédit d&apos;impôt.</li>
      </ul>

      <p className={styles.description}>
        Pour plus de sécurité et d&apos;informations personnalisées, n&apos;hésitez pas à me contacter avant de réserver votre prestation.
      </p>

      <Link href="/contact" className={styles.cta}>
        Contactez-moi
      </Link>
    </div>
  );
}
