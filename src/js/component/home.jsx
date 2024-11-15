import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card"
import Footer from "./footer";

const Home = () => {
	return (
			<><Navbar />
		<div className="container-fluid d-flex flex-column align-items-center  w-100">

			<Jumbotron />
			<div className="d-flex gap-4 row m-2 justify-content-center">

			<Card />
			<Card />
			<Card />
			<Card />
			<Footer/>
			</div>

		</div>
		</>
	)
};

export default Home;
