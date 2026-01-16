"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

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
		<section>
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
		</section>
	);
}
