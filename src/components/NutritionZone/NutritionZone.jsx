import React from 'react'
import NutritionCard from '../NutritionCard/NutritionCard'

export default function NutritionZone({ nutritionData }) {
	let nutritionTypes = ['calory', 'protein', 'glucid', 'lipid']
	// je dois faire un map sur nutritionData pour récupérer les types de nutriments et les passer en props à NutritionCard

	
	

	console.log('nutrition data dans nutrition card :', nutritionData);
	// const nutritionTypes = {nutritionData}
	console.log('nutrition types dans nutrition card :', nutritionTypes)
	let amount = 290
	return (
		<aside className="nutrition_container">
			{nutritionTypes.map((type, index) => (
				<NutritionCard key={index} type={type} amount={amount} />
			))}
		</aside>
	)
}
