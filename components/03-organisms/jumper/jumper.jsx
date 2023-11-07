// IMPORTS
import Section from 'components/04-layouts/section/section';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

// COMPONENT
const Component = () => {

	// REGISTER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// CREATE REFS
	const jumperRef = useRef();
	const jumperTimelineRef = useRef();

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			jumperTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: jumperRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false } });
			jumperTimelineRef.current.to('.jumper .jumper__link', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' });
		}, jumperRef);
		return () => { return context.revert(); };
	}, []);

	// RENDER
	return (
		<Section className="jumper" ref={ jumperRef }>
			<a className="jumper__link animation--fade-in" href="/showcase/corporate">Corporate</a>
			<a className="jumper__link animation--fade-in" href="/showcase/storytelling">Storytelling</a>
			<a className="jumper__link animation--fade-in" href="/showcase/architecture">Architektur</a>
			<a className="jumper__link animation--fade-in" href="/showcase/weddings">Hochzeiten</a>
			<a className="jumper__link animation--fade-in" href="/showcase/design">Gestaltung</a>
			<a className="jumper__link animation--fade-in" href="/contact">Kontakt</a>
		</Section>
	);

};

// EXPORTS
export default Component;
