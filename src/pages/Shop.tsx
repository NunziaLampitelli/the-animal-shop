import "./pages-css/shop.css"
import PicOne from "../assets/pictures/accessories.jpeg"
import PicTwo from "../assets/pictures/backpack.jpeg"
import PicThree from "../assets/pictures/plushie.jpeg"
import PicFour from "../assets/pictures/ball.avif"


export default function Shop() {
  return (
		<div className="shop">
			<h2>Catalogue</h2>
			<section className="shop-container">
				<article className="shop-card">
					<img src={PicOne} alt="accessories pic" />
					<p>Accessories</p>
				</article>
				<article className="shop-card">
					<img src={PicTwo} alt="backpack pic" />
					<p>Backpacks</p>
				</article>
				<article className="shop-card">
					<img src={PicThree} alt="plushie pic" />
					<p>Plushies</p>
				</article>
				<article className="shop-card">
					<img src={PicFour} alt="ball pic" />
					<p>Toys</p>
				</article>
			</section>
		</div>
	);
}