import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
	title: "MaisonNet86 – Ménage & vitres à domicile dans la Vienne (86)",
	description:
		"Service de ménage à domicile dans la Vienne (86). Devis rapide et prestations personnalisées.",
	openGraph: {
		title: "MaisonNet86 – Ménage & vitres à domicile",
		description:
			"Service de ménage à domicile dans la Vienne (86). Devis rapide et prestations personnalisées.",
		url: "https://maisonnet86.fr",
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
		title: "MaisonNet86 – Ménage & vitres à domicile",
		description:
			"Service de ménage à domicile dans la Vienne (86). Devis rapide et prestations personnalisées.",
		images: ["/logo/maisonnet86-logo.webp"],
	},
};

export default function Home() {
	return (
		<div className={styles.home}>
			<h1 className={styles.h1}>
				Bienvenue chez<br></br> MaisonNet86
			</h1>
			<p className={styles.p}>
				Votre service de ménage et vitres à domicile dans la Vienne (86).
			</p>
			<p className={styles.p}>
				MaisonNet86, c’est avant tout une micro-entreprise locale, créée pour
				proposer un service de ménage de qualité, humain et de confiance.
				<br></br>
				<br></br>
				Auto-entrepreneur, j’interviens moi-même à votre domicile pour
				l’entretien de votre maison et de vos vitres, avec
				sérieux et discrétion.<br></br> En faisant appel à MaisonNet86, vous
				avez la garantie d’un interlocuteur unique, à l’écoute de vos besoins,
				et d’un travail soigné, réalisé avec respect de votre intérieur.
			</p>
			<section className={styles.section}>
				<h2 className={styles.h2}>🧹Mes Services</h2>
				<ul className={styles.ul}>
					<li className={styles.li}>Devis gratuit et personnalisé</li>
					<li className={styles.li}>Entretien régulier ou ponctuel</li>
					<li className={styles.li}>
						Grand ménage (état des lieux, ménage de printemps, déménagement)
					</li>
					<li className={styles.li}>Nettoyage de vitres</li>
					<li className={styles.li}>
						Jardinage (tonte, débroussaillage, entretien des massifs)
					</li>
					<li className={styles.li}>
						Petit bricolage (montage de meubles, installation d’étagères, changement d’ampoules, etc.)
					</li>
					<li className={styles.li}>
						Assistance informatique à domicile (ordinateur, tablette, smartphone, etc.)
					</li>
					<li className={styles.li}>
						Assistance administrative à domicile (courriers, démarches en ligne, archivage, etc.)
					</li>
				</ul>
				<Link href="/services" className={styles.cta}>
					Voir tous mes services
				</Link>
			</section>
			<section className={styles.section}>
				<h2 className={styles.h2}>⭐Pourquoi choisir MaisonNet86</h2>
				<ul className={styles.ul}>
					<li className={styles.li}>
						Micro-entreprise locale dans la Vienne (86)
					</li>
					<li className={styles.li}>Un seul interlocuteur</li>
					<li className={styles.li}>Prestations personnalisées</li>
					<li className={styles.li}>
						Travail soigné et respect de votre intérieur
					</li>
					<li className={styles.li}>
						Entreprise déclarée Services à la Personne (SAP)
					</li>
					<li className={styles.li}>
						Vous bénéficiez du crédit d’impôt de 50 %,<br></br> comme avec les
						grandes sociétés
					</li>
					<li className={styles.logo}>
						<Image
							src="/logo/SAP.webp"
							alt="logo SAP"
							width={100}
							height={100}
						></Image>
					</li>
				</ul>
				<Link href="/impot" className={styles.cta}>
					En savoir plus sur la réduction d&apos;impôt
				</Link>
			</section>
			<section className={styles.section}>
				<h2 className={styles.h2}>📅 Comment ça fonctionne ?</h2>
				<ul className={styles.ul}>
					<li className={styles.li}>
						Demande de devis gratuit et sans engagement
					</li>
					<li className={styles.li}>
						Échange / Visite pour comprendre vos besoins (surface, fréquence,
						prestations)
					</li>
					<li className={styles.li}>
						Planification de l’intervention selon vos disponibilités
					</li>
					<li className={styles.li}>
						Intervention réalisée puis paiement sur facture
					</li>
				</ul>
			</section>
			<section className={styles.sectionImg}>
				<h2 className={styles.h2}>📍Mon secteur d’intervention</h2>
				<Image
					className={styles.img}
					src="/pictures/zone-intervention-maisonnet86.png"
					alt="Zone d’intervention MaisonNet86 – ménage à domicile dans la Vienne (86)"
					width={500}
					height={300}
				/>
				<p className={styles.p}>
					Pour toute demande hors zone, n’hésitez pas à me contacter, certaines
					interventions ponctuelles peuvent être possibles selon disponibilité.
				</p>
			</section>
			<section className={styles.section}>
				<h2 className={styles.h2}>📞 Contactez-moi 📧</h2>
				<a href="tel:0658373468" className={styles.cta}>
					📞 Téléphone
				</a>
				<a href="mailto:ludo.leblond13@gmail.com" className={styles.cta}>
					📧 Email
				</a>
			</section>
		</div>
	);
}
