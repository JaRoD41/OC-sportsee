import React from 'react'
import glucids from '../../assets/glucid-icon.svg'

export default function Glucids() {
  const carbohydrateCount = 290
	return (
		<article className="nutrition-card">
			<div className="nutrition-card_button button-yellow">
				<img src={glucids} alt="glucids" />
			</div>
			<div className="nutrition-card_content">
				<h3>{carbohydrateCount}kCal</h3>
				<span>Glucides</span>
			</div>
		</article>
	)
}
