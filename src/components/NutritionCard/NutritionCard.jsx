import calory from '../../assets/calory-icon.svg'
import protein from '../../assets/protein-icon.svg'
import glucid from '../../assets/glucid-icon.svg'
import lipid from '../../assets/lipid-icon.svg'

// Je crée un objet TYPES qui contient les propriétés color, unit, typeName et icon qui seront utilisées dans NutritionCard.jsx
const TYPES = {
	calorieCount: { color: 'red', unit: 'kCal', typeName: 'Calories', icon: calory },
	proteinCount: { color: 'blue', unit: 'g', typeName: 'Protéines', icon: protein },
	carbohydrateCount: { color: 'yellow', unit: 'g', typeName: 'Glucides', icon: glucid },
	lipidCount: { color: 'pink', unit: 'g', typeName: 'Lipides', icon: lipid },
}

// Je récupère les props type et amount de NutritionZone.jsx
export default function NutritionCard({ type, amount }) {
	// Je crée une constante nutritionType qui récupère les propriétés de TYPES en fonction du type de nutrition
	const nutritionType = TYPES[type]

	return (
		<article className="nutrition-card">
			<div className="nutrition-card-infos">
				<div className={`nutrition-card-infos__button ${nutritionType.color}`}>
					<img src={nutritionType.icon} alt={nutritionType} />
				</div>
				<div className="nutrition-card-infos__content">
					<h3 className="amount-unit">
						{amount}
						{nutritionType.unit}
					</h3>
					<span className="type-name">{nutritionType.typeName}</span>
				</div>
			</div>
		</article>
	)
}
