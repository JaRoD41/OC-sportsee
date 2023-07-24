import { Link } from 'react-router-dom'

export default function HorizontalNavLinks() {
	// Je crée un tableau qui contient les liens de la navigation horizontale
	let horizontal_links = ['Accueil', 'Profil', 'Réglages', 'Communauté']
	return (
		<nav className="horizontal_links">
			{horizontal_links.map((link, index) => (
				<Link key={index} to="/user/:userId">
					{link}
				</Link>
			))}
		</nav>
	)
}
