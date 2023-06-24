import React from 'react'
import NutritionCard from '../NutritionCard/NutritionCard'

export default function NutritionZone() {
	let nutritionTypes = [ 'calories', 'proteins', 'glucids', 'lipids']
	let amount = 290
  return (
		<aside className="nutrition_container">
			{nutritionTypes.map((type, index) => (
				<NutritionCard key={index} type={type} amount={amount} />
			))}
		</aside>
	)
}
