import { Link } from 'react-router-dom'

export default function HorizontalNavLinks() {
	// Je crée un tableau qui contient les liens de la navigation horizontale
	let horizontal_links = ['Accueil', 'Profil', 'Réglages', 'Communauté']
	return (
		<nav className="horizontal_links">
			{horizontal_links.map((link, index) => (
				// Je crée un lien pour chaque élément de la Navigation horizontale et je précise que le lien Accueil renvoie vers la page d'accueil
				<Link key={index} to={link === 'Accueil' ? '/' : '/user/:userId'}>
					{link}
				</Link>
			))}
		</nav>
	)
}
