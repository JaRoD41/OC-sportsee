import React from 'react'
import Logo from '../Logo/Logo'
import HorizontalNavLinks from '../HorizontalNavLinks/HorizontalNavLinks'

export default function HorizontalNav() {
	return (
		<nav className="horizontalContainer">
			<Logo />
			<HorizontalNavLinks />
		</nav>
	)
}
