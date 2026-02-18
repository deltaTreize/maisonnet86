import Image from "next/image";
import styles from "./page.module.css";


export const metadata = {
  title: "MaisonNet86 – Ménage & vitres à domicile dans la Vienne (86) - Nos services",
  description: "Découvrez nos prestations : ménage, vitres, entretien régulier ou ponctuel.",
  openGraph: {
    title: "MaisonNet86 – Nos services",
    description: "Prestations de ménage et vitres à domicile dans la Vienne (86).",
    url: "https://maisonnet86.fr/services",
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
    title: "MaisonNet86 – Nos services",
    description: "Prestations de ménage et vitres à domicile dans la Vienne (86).",
    images: ["/logo/maisonnet86-logo.webp"],
  },
};

export default function Services() {
	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>🧹Mes Services</h1>
			<section
				className={styles.section}
			>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<p className={styles.title}>Devis gratuit et personnalisé</p>
						<p className={styles.description}>
							Dites moi vos besoins et je vous proposerai un devis selon vos
							besoins et vos attentes!
						</p>
						<Image
							src="/pictures/devis.webp"
							alt="Devis gratuit"
							width={300}
							height={200}
						></Image>
					</li>
					<li className={styles.li}>
						<p className={styles.title}>Entretien régulier ou ponctuel</p>
            <p className={styles.description}>
              Que ce soit pour un entretien hebdomadaire, bi-hebdomadaire, mensuel ou ponctuels,
              je vous propose un service de qualité et de confiance.
            </p>
						<Image
							src="/pictures/calendar.webp"
							alt="Entretien régulier ou ponctuel"
							width={200}
							height={300}
						></Image>
					</li>
					<li className={styles.li}>
						<p className={styles.title}>Grand ménage (état des lieux, printemps, déménagement)</p>
            <p className={styles.description}>
              Vous avez besoin d’un grand ménage de printemps, avant un état des lieux, avant ou après un déménagement?
              Je suis là pour vous aider à retrouver un intérieur propre et sain.
            </p>
						<Image
							src="/pictures/grand-menage.webp"
							alt="Grand ménage"
							width={300}
							height={200}
						></Image>
					</li>
					<li className={styles.li}>
						<p className={styles.title}>Nettoyage de vitres</p>
            <p className={styles.description}>
              Besoin d’un nettoyage de vitres ? Je peux vous proposer un service de nettoyage professionnel pour vos fenêtres et portes-fenêtres.
            </p>
						<Image
							src="/pictures/vitres.webp"
							alt="Nettoyage de vitres"
							width={300}
							height={200}
						></Image>
					</li>
					<li className={styles.li}>
						<p className={styles.title}>Ménage pour professionnels (bureaux, locaux)</p>
            <p className={styles.description}>
              Besoin d’un ménage professionnel pour votre bureau ou vos locaux ? Je peux vous proposer un service de nettoyage complet et efficace.
            </p>
						<Image
							src="/pictures/pro.webp"
							alt="Ménage pour professionnels"
							width={300}
							height={200}
						></Image>
					</li>
				</ul>
			</section>
		</div>
	);
}

