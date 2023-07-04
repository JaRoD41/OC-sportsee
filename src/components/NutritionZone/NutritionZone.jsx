import React from 'react'
import NutritionCard from '../NutritionCard/NutritionCard'

export default function NutritionZone({ nutritionData }) {
	let nutritionTypes = Object.keys(nutritionData)

	return (
		<aside className="nutrition_container">
			{nutritionTypes.map((type, index) => (
				<NutritionCard key={index} type={type} amount={nutritionData[type]} />
			))}
		</aside>
	)
}
