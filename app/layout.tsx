import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Analytics from "./components/analytics/Analytics";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "MaisonNet86 – Ménage & vitres à domicile",
	description: "Service de ménage à domicile dans la Vienne (86)...",
	icons: {
		icon: "/logo/maisonnet86-favicon.webp",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<Head>
				<link rel="preload" href="/styles/page.module.css" as="style" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Analytics />
				<Header />
				<main id="main-content">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
