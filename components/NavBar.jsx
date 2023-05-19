import Link from "next/link";
import style from "../styles/Nav.module.css";
export default function NavBar() {
	return (
		<nav className={`${style.nav}`}>
			<Link className={`${style.navLink} ${style.firstLink}`} href="/">
				<div>
					<h3>RegalByte</h3>
					<p>_Solutions</p>
				</div>
			</Link>

			<div className={`${style.secondLink}`}>
				<Link className={`${style.navLink} `} href="/reviews">
					Reviews
				</Link>
				<Link className={`${style.navLink}`} href="/portfolio">
					Portfolio
				</Link>
				<Link className={`${style.navLink}`} href="/about">
					About Us
				</Link>
				<Link className={`${style.navLink}`} href="contact">
					Contact
				</Link>
			</div>
		</nav>
	);
}
