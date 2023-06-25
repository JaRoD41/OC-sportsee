import React from 'react'
import calory from '../../assets/calory-icon.svg'
import protein from '../../assets/protein-icon.svg'
import glucid from '../../assets/glucid-icon.svg'
import lipid from '../../assets/lipid-icon.svg'

export default function NutritionCard({ type, amount }) {
	let icon = ''
	switch (type) {
		case 'calories':
			icon = calory
			break
		case 'proteins':
			icon = protein
			break
		case 'glucids':
			icon = glucid
			break
		case 'lipids':
			icon = lipid
			break
		default:
			break
	}
	return (
		<article className="nutrition-card">
			<div className='nutrition-card-infos'>
				<div className="nutrition-card-infos__button">
					<img src={icon} alt={type} />
				</div>
				<div className="nutrition-card-infos__content">
					<h3>{amount}kCal</h3>
					<span>{type}</span>
				</div>
			</div>
		</article>
	)
}
