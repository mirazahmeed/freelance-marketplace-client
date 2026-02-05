import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { Outlet } from "react-router";

const HomeLayout = () => {
	return (
		<div>
			<header>
				<Header />
				<section></section>
				<nav>
					<Navbar />
				</nav>
			</header>
			<main>
				<section className="container mx-auto">
					<Outlet />
				</section>
			</main>
		</div>
	);
};

export default HomeLayout;
