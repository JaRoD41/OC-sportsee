import { Link } from 'react-router-dom'

export default function HorizontalNavLinks() {
	let horizontal_links = ['Accueil', 'Profil', 'Réglage', 'Communauté']
	return (
		<nav className="horizontal_links">
			{horizontal_links.map((link, index) => (
				<Link key={index} to="/">
					{link}
				</Link>
			))}
		</nav>
	)
}
