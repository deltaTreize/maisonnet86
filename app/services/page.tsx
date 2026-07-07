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
						<p className={styles.title}>Jardinage</p>
            <p className={styles.description}>
              Besoin d’aide pour entretenir votre jardin ? Je peux vous proposer un service de tonte, débroussaillage, désherbage manuel, nettoage de terrasse, etc...
            </p>
						<Image
							src="/pictures/jardinage.webp"
							alt="Jardinage"
							width={300}
							height={200}
						></Image>
					</li>
					<li className={styles.li}>
						<p className={styles.title}>Bricolage</p>
            <p className={styles.description}>
              Besoin d’aide pour vos petits travaux de bricolage ? Je peux vous proposer un service de montage de meubles, installation d’étagères, changement d’ampoules, etc...
            </p>
						<Image
							src="/pictures/brico.webp"
							alt="Bricolage"
							width={300}
							height={200}
						></Image>
					</li>
					<li className={styles.li}>
						<p className={styles.title}>Assistance informatique</p>
            <p className={styles.description}>
              Pour toutes vos démarches informatiques, je peux vous aider à configurer votre ordinateur, tablette ou smartphone, installer des logiciels, résoudre des problèmes techniques, etc...
            </p>
						<Image
							src="/pictures/informatique.webp"
							alt="Assistance informatique"
							width={300}
							height={200}
						></Image>
					</li>
					<li className={styles.li}>
						<p className={styles.title}>Assistance administrative</p>
            <p className={styles.description}>
              Besoin d’aide pour vos démarches administratives ? Je peux vous aider à gérer vos courriers, effectuer des démarches en ligne, archiver vos documents, etc...
            </p>
						<Image
							src="/pictures/admin.webp"
							alt="Assistance administrative"
							width={300}
							height={200}
						></Image>
					</li>
				</ul>
			</section>
		</div>
	);
}

