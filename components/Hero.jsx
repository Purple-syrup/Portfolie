import Link from "next/link";
import style from "../styles/Hero.module.css";
export default function Hero() {
	return (
		<div className={`${style.heroImage}`}>
			<div className={`${style.heroText}`}>
				<div>
					<h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h2>
					<h4>Lorem ipsum dolor sit amet consectetur</h4>
				</div>
				<div className={`${style.secondHeroText}`}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						quae rem vel facilis dolorem explicabo voluptate provident beatae
						odio. Quibusdam?
					</p>
					<Link href="/contact" className={`${style.heroButton}`}>
						Call To Action
					</Link>
				</div>
			</div>
		</div>
	);
}
