import { useState, useEffect } from 'react'
import calory from '../../assets/calory-icon.svg'
import protein from '../../assets/protein-icon.svg'
import glucid from '../../assets/glucid-icon.svg'
import lipid from '../../assets/lipid-icon.svg'

// Je récupère les props type et amount de NutritionZone.jsx
export default function NutritionCard({ type, amount }) {
	// Je déclare une variable d'état color grâce à useState
	const [color, setColor] = useState('')

	// Je déclare une variable icon qui va changer selon le type de la carte
	let icon
	if (type === 'calory') {
		icon = calory
	} else if (type === 'protein') {
		icon = protein
	} else if (type === 'glucid') {
		icon = glucid
	} else if (type === 'lipid') {
		icon = lipid
	}

	useEffect(() => {
		switch (type) {
			// Selon le type de la carte, je change la couleur de l'icone
			case 'calory':
				setColor('red')
				break
			case 'protein':
				setColor('blue')
				break
			case 'glucid':
				setColor('yellow')
				break
			case 'lipid':
				setColor('pink')
				break
			default:
				break
		}
	}, [type])
	return (
		<article className="nutrition-card">
			<div className="nutrition-card-infos">
				<div className={`nutrition-card-infos__button ${color}`}>
					{/* A FIX URGENT  */}
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
