import CatLogo from "../../public/munchkin.png";
import "./components-css/header.css"
function Header() {
	return (
		<div className="header">
			<img className="logo" src={CatLogo} alt="Logo of a cat" />
      <h1 className="site-title">The Animal Shop</h1>
			<nav className="header-nav">
				<a href="">Homepage</a>
				<a href="">Catalogue</a>
				<a href="">Shop</a>
				<a href="">About us</a>
			</nav>
		</div>
	);
}

export default Header;
