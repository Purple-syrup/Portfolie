import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Hero className={`${inter.className}`} />
			<p>Regal Byte Solutions</p>
		</>
	);
}
