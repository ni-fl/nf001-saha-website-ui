// IMPORTS
import Hamburger from 'components/01-atoms/hamburger/hamburger';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// COMPONENT
const Component = () => {

	// SETUP STATE
	const [isOpen, setIsOpen] = useState(false);

	// SETUP ROUTER
	const router = useRouter();

	// SETUP REFS
	const navigationRef = useRef();
	const menuTimelineRef = useRef();

	// OPEN MENU
	const openMenu = () => {
		menuTimelineRef.current.play();
		setIsOpen(true);
	};

	// CLOSE MENU
	const closeMenu = () => {
		menuTimelineRef.current.reverse();
		setIsOpen(false);
	};

	// TOGGLE MENU
	const toggleMenu = () => {
		isOpen ? closeMenu() : openMenu();
	};

	// HANDLE LINK KLICK
	const handleLinkClick = (event, targetPath) => {
		event.preventDefault();
		if (router.pathname === targetPath) {
			closeMenu();
		} else {
			router.push(targetPath);
			closeMenu();
		};
	};

	// REGISTER PLUGIN
	useLayoutEffect(() => {
		gsap.registerPlugin(useGSAP);
	});

	// ANIMATE HAMBURGER
	useGSAP(() => {

		// CREATE TRANSITION 
			gsap.to(['.navigation .bar__logo', '.navigation .bar__hamburger'], { autoAlpha: 1, duration: 1 });

	}, { scope: navigationRef });

	// ANIMATE MENU
	useGSAP(() => {

		// CREATE TIMELINE
		menuTimelineRef.current = gsap.timeline({ paused: true })
			.to('.navigation .navigation__menu', { top: '0lvh', duration: 1, ease: 'power4.inOut' }, 0)
			.to('.navigation .main-links__item', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.inOut', stagger: 0.05 }, 0.5)
			.to('.navigation .social-links__item', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.inOut' }, 1);

	}, { scope: navigationRef });

	// RENDER
	return (
		<nav className="navigation" ref={ navigationRef }>
			<div className="navigation__inner">
				<div className="navigation__placeholder" />
				<div className="navigation__background" />
				<div className="navigation__bar bar">
					<div className="bar__inner">
						<Link className="bar__logo-link" href="/">
							<Image className="bar__logo" src="/logos/full.svg" alt="Samira Haas" width="140" height="40" priority />
						</Link>
						<Hamburger className="bar__hamburger" isOpen={ isOpen } onClick={ toggleMenu } />
					</div>
				</div>
				<div className="navigation__menu menu">
					<div className="menu__main-links main-links">
						<Link className="main-links__item heading--h1 animation--fade-in" href="/showcase/business" onClick={ (event) => { return handleLinkClick(event, '/showcase/business'); } }>Business</Link>
						<Link className="main-links__item heading--h1 animation--fade-in" href="/showcase/architecture" onClick={ (event) => { return handleLinkClick(event, '/showcase/architecture'); } }>Architektur</Link>
						<Link className="main-links__item heading--h1 animation--fade-in" href="/showcase/weddings" onClick={ (event) => { return handleLinkClick(event, '/showcase/weddings'); } }>Hochzeiten</Link>
						<Link className="main-links__item heading--h1 animation--fade-in" href="/showcase/design" onClick={ (event) => { return handleLinkClick(event, '/showcase/design'); } }>Gestaltungen</Link>
						<Link className="main-links__item heading--h1 animation--fade-in" href="/showcase/free-work" onClick={ (event) => { return handleLinkClick(event, '/showcase/free-work'); } }>Freie Arbeiten</Link>
						<Link className="main-links__item heading--h1 animation--fade-in" href="/contact" onClick={ (event) => { return handleLinkClick(event, '/contact'); } }>Kontakt</Link>
					</div>
					<div className="menu__social-links social-links animation--fade-in">
						<Link className="social-links__item" href="/">Instagram</Link>
					</div>
				</div>
			</div>
		</nav>
	);

};

// EXPORTS
export default Component;
