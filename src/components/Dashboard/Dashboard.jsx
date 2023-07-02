import React from 'react'

import ChartsZone from '../../components/ChartsZone/ChartsZone'
import NutritionZone from '../../components/NutritionZone/NutritionZone'

import mockedData from '../../mocked_data/mock'
import ActivityModel from '../../services/ActivityModel'

export default function Dashboard() {
	let userId = 12
	
	const userData = mockedData.USER_ACTIVITY[0]
	const allData = mockedData.USER_ACTIVITY
	console.log('user data :', userData)
	console.log('allData :', allData)

	const user = 'Thomas'
	const formatedData = new ActivityModel(userData)
	const sessions = formatedData.getSessions()
	const kilogram = formatedData.getKilogram()
	console.log('user sessions :', sessions)
	console.log('user weight :', kilogram)
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
