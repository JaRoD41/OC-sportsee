import { useState, useEffect } from 'react'
import calory from '../../assets/calory-icon.svg'
import protein from '../../assets/protein-icon.svg'
import glucid from '../../assets/glucid-icon.svg'
import lipid from '../../assets/lipid-icon.svg'

// Je récupère les props type et amount de NutritionZone.jsx
export default function NutritionCard({ type, amount }) {
	// Je déclare une variable d'état color grâce à useState
	const [color, setColor] = useState('')
	const [unit, setUnit] = useState('')
	const [typeName, setTypeName] = useState('')

	// Je déclare une variable icon qui va changer selon le type de la carte
	let icon
	if (type === 'calorieCount') {
		icon = calory
	} else if (type === 'proteinCount') {
		icon = protein
	} else if (type === 'carbohydrateCount') {
		icon = glucid
	} else if (type === 'lipidCount') {
		icon = lipid
	}

	useEffect(() => {
		switch (type) {
			// Selon le type de la carte, je change la couleur de l'icone
			case 'calorieCount':
				setColor('red')
				setUnit('kCal')
				setTypeName('Calories')
				break
			case 'proteinCount':
				setColor('blue')
				setUnit('g')
				setTypeName('Protéines')
				break
			case 'carbohydrateCount':
				setColor('yellow')
				setUnit('g')
				setTypeName('Glucides')
				break
			case 'lipidCount':
				setColor('pink')
				setUnit('g')
				setTypeName('Lipides')
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
					<h3>
						{amount}
						{unit}
					</h3>
					<span>{typeName}</span>
				</div>
			</div>
		</article>
	)
}
