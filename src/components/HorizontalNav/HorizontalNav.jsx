import React from 'react'
import Logo from '../Logo/Logo'
import HorizontalNavLinks from '../HorizontalNavLinks/HorizontalNavLinks'

export default function HorizontalNav() {
	return (
		<>
			<section className="horizontalContainer">
				<Logo />
				<HorizontalNavLinks />
			</section>
		</>
	)
}
