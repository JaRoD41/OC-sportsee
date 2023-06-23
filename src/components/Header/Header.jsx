import React from 'react'

export default function Header() {
	const user = 'Thomas'
	return (
		<>
			<header className="dashboard-header">
				<div className="dashboard-header__user-container">
					<h1>Bonjour</h1>
					<h2>{user}</h2>
				</div>
				<p className="dashboard-header__user-congrats">Félicitations ! Vous avez explosé vos objectifs, hier 👏</p>
			</header>
		</>
	)
}
