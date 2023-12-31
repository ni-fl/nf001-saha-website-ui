// IMPORTS
import 'styles/main.scss';

// META DATA
const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_UI_URI),
	title: 'Samira Haas',
	description: 'Als Fotografin und Gestalterin verbinde ich meine offene und kreative Denkweise mit meiner Empathie, um individuelle und hochwertige Projekte zu schaffen. Ich glaube daran, dass jeder Moment und jede Person einzigartig ist und einen eigenen Ausdruck verdient. Mit einem Auge für Ästhetik und Liebe zum Detail erschaffe ich einzigartige visuelle Geschichten.',
	viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
	openGraph: {
		title: 'Samira Haas',
		description: 'Als Fotografin und Gestalterin verbinde ich meine offene und kreative Denkweise mit meiner Empathie, um individuelle und hochwertige Projekte zu schaffen. Ich glaube daran, dass jeder Moment und jede Person einzigartig ist und einen eigenen Ausdruck verdient. Mit einem Auge für Ästhetik und Liebe zum Detail erschaffe ich einzigartige visuelle Geschichten.',
		url: 'https://samirahaas.ch',
		siteName: 'Samira Haas',
		images: [{ url: 'https://development.samirahaas.ch/_next/image?url=https%3A%2F%2Fsamirahaas-web-production.fra1.digitaloceanspaces.com%2Fgeneral_03_b8248b3c8b.webp', width: 800, height: 600 }],
		locale: 'de-ch',
		type: 'website',
	},
};

// COMPONENT
const Component = ({ children }) => {

	// RENDER
	return (
		<html lang="de">
			<body>
				{ children }
			</body>
		</html>
	);

};

// EXPORTS
export { metadata };
export default Component;
