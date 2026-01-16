import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo/maisonnet86-logo.webp"
            alt="MaisonNet86 - Ménage & vitres à domicile"
            width={220}
            height={173}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/creneaux" className={styles.link}>Créneaux</Link>
          <Link href="/contact" className={styles.cta}>
            Devis gratuit
          </Link>
        </nav>
      </div>
    </header>
  );
}

