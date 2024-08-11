import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo-container">
				<img src="" alt="" />
			</div>
			<div className="links-container">
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</div>
			<div className="other-links">
				<div className="nav-btn-container">
					<a href="/login-signup">
						<button data-label="Login" className="rainbow-hover">
							<span className="sp">Login</span>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
