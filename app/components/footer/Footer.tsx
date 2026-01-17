import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.div}>
				<a href="mailto:ludo.leblond13@gmail.com" className={styles.link}>
					📧 ludo.leblond13@gmail.com
				</a>
				<a href="tel:0658373468" className={styles.link}>
					📞 06 58 37 34 68
				</a>
			</div>
			<div style={{ margin: "10px 0" }}>
				<a
					href="https://www.facebook.com/profile.php?id=61586586756869"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.link}
				>
					Facebook
				</a>
			</div>
			<p>🔹 SIRET : 123 456 789 00012</p>
		</footer>
	);
}
