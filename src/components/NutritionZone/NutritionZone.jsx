import React from 'react'
import Calories from '../Calories/Calories'
import Proteins from '../Proteins/Proteins'
import Glucids from '../Glucids/Glucids'
import Lipids from '../Lipids/Lipids'

export default function NutritionZone() {
  return (
		<aside className="nutrition_container">
			<Calories />
			<Proteins />
			<Glucids />
			<Lipids />
		</aside>
	)
}
