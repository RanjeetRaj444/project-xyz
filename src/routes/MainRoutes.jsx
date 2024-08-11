import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginSignupPage from "../pages/LoginSignupPage";
import About from "../pages/About";
import Contact from "../pages/Contact";

const MainRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login-signup" element={<LoginSignupPage />} />
			</Routes>
		</div>
	);
};

export default MainRoutes;
