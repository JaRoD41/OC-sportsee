import React from 'react'
import logo from '../../assets/big-logo.svg'

export default function Logo() {
	return (
		<>
			<div className="logo-container">
				{/* creation of the logo component which is also a link to the home page */}
				<img src={logo} alt="logo de SportSee" className="logo" />
			</div>
		</>
	)
}
