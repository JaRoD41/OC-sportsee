import React from 'react'
import NutritionCard from '../NutritionCard/NutritionCard'

export default function NutritionZone({ nutritionData }) {
	let amount = 150
	let nutritionTypes = ['calorieCount', 'proteinCount', 'carbohydrateCount', 'lipidCount']
	// je dois récupérer les types de nutriments et les passer en props à NutritionCard

	

	let calorieAmount = parseInt(nutritionData.calorieCount)
	let proteinAmount = parseInt(nutritionData.proteinCount)
	let carbohydrateAmount = parseInt(nutritionData.carbohydrateCount)
	let lipidAmount = parseInt(nutritionData.lipidCount)
	console.log('calorieAmount :', calorieAmount)

	return (
		<aside className="nutrition_container">
			{nutritionTypes.map((type, index) => (
				<NutritionCard
					key={index}
					type={type}
					amount={amount}
					// calories={calorieAmount}
					// proteins={proteinAmount}
					// carbohydrates={carbohydrateAmount}
					// lipids={lipidAmount}
				/>
			))}
		</aside>
	)
}
