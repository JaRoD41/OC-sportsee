import React from 'react'

import ChartsZone from '../../components/ChartsZone/ChartsZone'
import NutritionZone from '../../components/NutritionZone/NutritionZone'

export default function Dashboard({ userId, user, sessions, nutritionData, todayScore, performanceData }) {
	return (
		<main className="dashboard-container">
			<section className="dashboard-header">
				<div className="dashboard-header__user-container">
					<h1>Bonjour</h1>
					<h2>{user}</h2>
				</div>
				<p className="dashboard-header__user-congrats">Félicitations ! Vous avez explosé vos objectifs, hier 👏</p>
			</section>
			<section className="dashboard-metrics">
				<ChartsZone
					userId={userId}
					activitySessions={sessions}
					todayScore={todayScore}
					// performanceKind={performanceKind}
					performanceDataAll={performanceData}
				/>
				<NutritionZone nutritionData={nutritionData} />
			</section>
		</main>
	)
}
