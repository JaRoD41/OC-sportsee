import React from 'react'
import lipids from '../../assets/lipid-icon.svg'

export default function Lipids() {
  const lipidCount = 290
	return (
		<article className="nutrition-card">
			<div className="nutrition-card_button button-pink">
				<img src={lipids} alt="lipids" />
			</div>
			<div className="nutrition-card_content">
				<h3>{lipidCount}kCal</h3>
				<span>Lipides</span>
			</div>
		</article>
	)
}
