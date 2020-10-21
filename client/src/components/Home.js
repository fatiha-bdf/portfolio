import React from 'react'
import HeroSection from './sections/HeroSection';
import AboutMe from './sections/AboutMe';
import Projets from './sections/Projets';
import Competences from './sections/Competences';
import MonParcours from './sections/MonParcours';
import Footer from './sections/Footer';

const Home = () => {
	return (
		<div>
			<HeroSection />
			<AboutMe />
			<Competences />
			<MonParcours />
			<Projets />
			<Footer />
		</div>
	)
}

export default Home;
