"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Head from "next/head";

type Slot = Record<string, string>;

const DAYS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

export default function CreneauxPage() {
	const [schedule, setSchedule] = useState<Slot[]>([]);

	useEffect(() => {
		const fetchSheet = async () => {
			try {
				// Lien CSV public de Google Sheet
				const res = await fetch(
					"https://docs.google.com/spreadsheets/d/e/2PACX-1vR2k4QlSKgqGy4Vg_oNyGE3HVsFuazG3DF58gCLle-pQw01CBo5O4d33Hud0nmvOuO4-3as-kRqSEuw/pub?gid=0&single=true&output=csv"
				);
				const csvText = await res.text();

				// Séparer par lignes
				const lines = csvText.split("\n").filter(Boolean);

				// Récupérer les headers : heures, lundi, mardi, ...
				const headers = lines[0].split(",").map((h) => h.trim());

				// Transformer les lignes en tableau d'objets
				const data: Slot[] = lines.slice(1).map((line) => {
					const values = line.split(",").map((v) => v.trim());
					const obj: Slot = {};
					headers.forEach((h, i) => (obj[h] = values[i] || ""));
					return obj;
				});

				setSchedule(data);
			} catch (err) {
				console.error("Erreur lors du fetch du Google Sheet:", err);
			}
		};

		fetchSheet();
	}, []);

	if (!schedule.length) return <p>Chargement...</p>;

	return (
		<>
			<Head>
				<title>MaisonNet86 – Planning hebdomadaire</title>
				<meta
					name="description"
					content="Consultez nos créneaux hebdomadaires pour réserver votre ménage ou lavage de vitres."
				/>
				<meta
					property="og:title"
					content="MaisonNet86 – Planning hebdomadaire"
				/>
				<meta
					property="og:description"
					content="Planning hebdomadaire pour les prestations de ménage et vitres dans la Vienne (86)."
				/>
				<meta property="og:image" content="/logo/maisonnet86-logo.webp" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="MaisonNet86 – Planning hebdomadaire"
				/>
				<meta
					name="twitter:description"
					content="Planning hebdomadaire pour les prestations de ménage et vitres dans la Vienne (86)."
				/>
				<meta name="twitter:image" content="/logo/maisonnet86-logo.webp" />
			</Head>
			<section className={styles.container}>
				<h1 className={styles.h1}>📅 Horaires</h1>
				<p className={styles.description}>
					Ce planning vous montre mes créneaux disponibles sur une semaine type.
				</p>
				<p className={styles.description}>
					Il sert à vous donner une idée des horaires possibles pour vos
					prestations hebdomadaires.
				</p>
				<div className={styles.calendar}>
					{DAYS.map((day) => (
						<div key={day} className={styles.dayColumn}>
							<div className={styles.dayHeader}>{day}</div>
							<div className={styles.slotsContainer}>
								{schedule.map((slot, i) => {
									const status = slot[day]?.toLowerCase();
									return (
										<div
											key={i}
											className={`${styles.slot} ${
												status === "libre" ? styles.free : styles.busy
											}`}
										>
											{slot["heures"]}
										</div>
									);
								})}
							</div>
						</div>
					))}
				</div>
				<Link href="/contact" className={styles.cta}>
					Me contacter
				</Link>
			</section>
		</>
	);
}
