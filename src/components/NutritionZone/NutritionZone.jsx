import React from 'react'
import NutritionCard from '../NutritionCard/NutritionCard'

export default function NutritionZone() {
	let nutritionTypes = [ 'calory', 'protein', 'glucid', 'lipid']
	let amount = 290
  return (
		<aside className="nutrition_container">
			{nutritionTypes.map((type, index) => (
				<NutritionCard key={index} type={type} amount={amount} />
			))}
		</aside>
	)
}
