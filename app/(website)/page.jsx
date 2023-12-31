// IMPORTS
import Page from 'components/04-layouts/page/page';
import Hero from 'components/03-organisms/hero/hero';
import Teaser from 'components/03-organisms/teaser/teaser';
import AboutMe from 'components/03-organisms/about-me/about-me';
import MyEthics from 'components/03-organisms/my-ethics/my-ethics';
import { fetchAboutMe, fetchHero, fetchTeaser, fetchMyEthic } from 'queries/index.js';

// COMPONENT
const Component = async () => {

	// FETCH ABOUT-ME
	const aboutMe = await fetchAboutMe();

	// FETCH HERO
	const hero = await fetchHero();

	// FETCH TEASER
	const teaser = await fetchTeaser();

	// FETCH MY-ETHIC
	const myEthic = await fetchMyEthic();

	// RENDER
	return (
		<>
			<Hero data={ hero } />
			<Teaser data={ teaser } />
			<AboutMe data={ aboutMe } />
			<MyEthics data={ myEthic } />
		</>
	);

};

// EXPORTS
export default Component;
