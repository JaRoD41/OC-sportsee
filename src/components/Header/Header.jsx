import React from 'react'

export default function Header() {
  const user = "Thomas"
  return (
		<div className="title_container">
			<h1 className="hearder_hello">Bonjour</h1>
			<h2 className="header_user">{user}</h2>
			<p className="congrats">Félicitations ! Vous avez explosé vos objectifs, hier 👏</p>
		</div>
	)
}
