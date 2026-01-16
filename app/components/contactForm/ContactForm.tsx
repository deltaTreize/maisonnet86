"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./contactForm.module.css";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		prenom: "",
		nom: "",
		email: "",
		codePostal: "",
		surface: "",
		pieces: "",
		message: "",
	});
	const [sent, setSent] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const dataWithTime = { ...formData, time: new Date().toLocaleString() };

		emailjs
			.send("service_yxodmkr", "maisonNet86", dataWithTime, "fI8VIVuoaDx0ur5ap")
			.then(() => {
				setSent(true);
				setFormData({
					prenom: "",
					nom: "",
					email: "",
					codePostal: "",
					surface: "",
					pieces: "",
					message: "",
				});
				setTimeout(() => setSent(false), 7000);
			})
			.catch((error) => {
				console.error("Erreur lors de l'envoi :", error);
				alert("Une erreur est survenue, veuillez réessayer.");
			});
	};
	return (
		<section className={styles.container}>
<h1 className={styles.h1}>📧 Pour me contacter</h1>
<p className={styles.description}>
  Vous pouvez m&apos;envoyer votre demande directement via ce formulaire.
</p>
<p className={styles.description}>
  Merci de préciser votre code postal pour vérifier que j&apos;interviens bien dans votre secteur.  
  N’hésitez pas à indiquer la surface et le nombre de pièces pour que je puisse préparer un devis rapide et précis.
</p>
<p className={styles.description}>
  Si possible, une visite de la maison est recommandée : elle me permet d’évaluer plus précisément le temps, le matériel et les prestations nécessaires.
</p>

			<form className={styles.contactForm} onSubmit={handleSubmit}>
				<input
					type="text"
					name="prenom"
					placeholder="Prénom"
					value={formData.prenom}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="nom"
					placeholder="Nom"
					value={formData.nom}
					onChange={handleChange}
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="codePostal"
					placeholder="Code postal"
					value={formData.codePostal}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="surface"
					placeholder="Surface (m²) – optionnel"
					value={formData.surface}
					onChange={handleChange}
				/>
				<select name="pieces" value={formData.pieces} onChange={handleChange}>
					<option value="">Nombre de pièces – optionnel</option>
					{[...Array(8)].map((_, i) => (
						<option key={i + 1} value={i + 1}>
							{i + 1}
						</option>
					))}
					<option value="plus_de_8">+ de 8</option>
				</select>
				<textarea
					name="message"
					placeholder="Votre demande"
					value={formData.message}
					onChange={handleChange}
					required
				/>
				<button type="submit" className={sent ? styles.sentButton : ""}>
					{sent ? "✅ Envoyé avec succès!" : "Envoyer"}
				</button>
			</form>
		</section>
	);
}
