// import "@/styles/globals.css";
import Head from "@/components/Head";
import NavBar from "@/components/NavBar";
export default function App({ Component, pageProps }) {
	return (
		<>
			<Head />
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}
