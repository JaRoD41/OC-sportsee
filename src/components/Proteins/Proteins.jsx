import React from 'react'
import proteins from '../../assets/protein-icon.svg'

export default function Proteins() {
	const proteinCount = 155
	return (
		<article className="nutrition-card">
			<div className="nutrition-card_button button-red">
				<img src={proteins} alt="proteins" />
			</div>
			<div className="nutrition-card_content">
				<h3>{proteinCount}kCal</h3>
				<span>Proteines</span>
			</div>
		</article>
	)
}
