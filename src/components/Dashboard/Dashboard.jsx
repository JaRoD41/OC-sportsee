import React from 'react'

import ChartsZone from '../../components/ChartsZone/ChartsZone'
import NutritionZone from '../../components/NutritionZone/NutritionZone'
import Header from '../../components/Header/Header'

export default function Dashboard() {
  return (
		<main className='dashboard-container'>
      <Header />
			<section className="dashboard-metrics">
				<ChartsZone />
				<NutritionZone />
			</section>
		</main>
	)
}
