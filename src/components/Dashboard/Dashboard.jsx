import React from 'react'

import ChartsZone from '../../components/ChartsZone/ChartsZone'
import NutritionZone from '../../components/NutritionZone/NutritionZone'

import userData from '../../mocked_data/mock'
import ActivityModel from '../../services/ActivityModel'

export default function Dashboard() {
	const user = 'Thomas'
	const data = userData.USER_ACTIVITY[0]
	console.log(userData.USER_ACTIVITY[0])

	const formatedData = new ActivityModel(data)
	const sessions = formatedData.getSessions()
	const kilogram = formatedData.getKilogram()
	console.log(sessions)
	console.log(kilogram)
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
				<ChartsZone activitySessions={sessions} />
				<NutritionZone />
			</section>
		</main>
	)
}
