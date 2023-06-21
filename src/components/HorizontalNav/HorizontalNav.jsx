import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'

export default function HorizontalNav() {
	return (
		<>
			<nav className="horizontalContainer">
				<Link to="/" className="nav-horizontal_link-home">
					<Logo />
				</Link>
				<Link to="/" className="nav-header_link-home">
					Accueil
				</Link>
				<Link to="/" className="nav-header_link-home">
					Profil
				</Link>
				<Link to="/" className="nav-header_link-home">
					Réglage
				</Link>
				<Link to="/" className="nav-header_link-home">
					Communauté
				</Link>
			</nav>
		</>
	)
}
