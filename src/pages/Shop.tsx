import { useState } from "react";
import "./pages-css/shop.css";
import PicOne from "../assets/pictures/accessories.jpeg";
import PicTwo from "../assets/pictures/backpack.jpeg";
import PicThree from "../assets/pictures/plushie.jpeg";
import PicFour from "../assets/pictures/ball.avif";
import Category from "../interfaces/Category";

export default function Shop() {
	// State to manage the selected category
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

	// Categories data
	const categories: Category[] = [
		{ id: 1, title: "Accessories", image: PicOne },
		{ id: 2, title: "Backpacks", image: PicTwo },
		{ id: 3, title: "Plushies", image: PicThree },
		{ id: 4, title: "Toys", image: PicFour },
	];

	// function to select a category card
	const handleCategoryClick = (category: Category) => {
		setSelectedCategory(category);
	};

	// function to close the modal
	const handleCloseModal = () => {
		setSelectedCategory(null);
	};

	return (
		<div className="shop">
			<h2>Catalogue</h2>
			<section className="shop-container">
				{categories.map((category) => (
					<article
						key={category.id}
						className="shop-card"
						onClick={() => handleCategoryClick(category)}
					>
						<img src={category.image} alt={`${category.title} pic`} />
						<p>{category.title}</p>
					</article>
				))}
			</section>

			{/* modal to show the products details */}
			{selectedCategory && (
				<div className="modal">
					<div className="modal-content">
						<span className="close" onClick={handleCloseModal}>
							&times;
						</span>
						<h3>{selectedCategory.title}</h3>
						<img src={selectedCategory.image} alt={selectedCategory.title} />
						<p>Details about {selectedCategory.title}...</p>
					</div>
				</div>
			)}
		</div>
	);
}
