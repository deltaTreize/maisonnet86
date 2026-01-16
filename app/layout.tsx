import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./globals.css";

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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header />
				<main id="main-content">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
