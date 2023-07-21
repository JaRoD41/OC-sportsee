import NutritionCard from '../NutritionCard/NutritionCard'

export default function NutritionZone({ nutritionData }) {
	// Je récupère les types de données nutritionnelles pour les passer en props au composant NutritionCard
	let nutritionTypes = Object.keys(nutritionData)

	return (
		<aside className="nutrition_container">
			{nutritionTypes.map((type, index) => (
				<NutritionCard key={index} type={type} amount={nutritionData[type]} />
			))}
		</aside>
	)
}
