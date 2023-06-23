import React from 'react'
import { Link } from 'react-router-dom'

export default function HorizontalNavLinks() {
  return (
		<>
			<div className="horizontal_links">
				<Link to="/" className="horizontal_link">
					Accueil
				</Link>
				<Link to="/" className="horizontal_link">
					Profil
				</Link>
				<Link to="/" className="horizontal_link">
					Réglage
				</Link>
				<Link to="/" className="horizontal_link">
					Communauté
				</Link>
			</div>
		</>
	)
}
