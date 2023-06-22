import React from 'react'

import ChartsZone from '../../components/ChartsZone/ChartsZone'
import NutritionZone from '../../components/NutritionZone/NutritionZone'
import Header from '../../components/Header/Header'

export default function Dashboard() {
  return (
		<>
      <Header />
			<section className="dashboard_metrics">
				<ChartsZone />
				<NutritionZone />
			</section>
		</>
	)
}
