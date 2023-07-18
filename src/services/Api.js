import axios from 'axios'

export const getMainData = async (user) => {
	// Je précise l'url de l'API pour récupérer les données principales de l'utilisateur
	let mainDataUrl = `http://localhost:3000/user/${user}`

	try {
		const userMain = await axios.get(mainDataUrl)
		const userMainData = userMain.data.data

		return userMainData
	} catch (error) {
		console.log(error)
	}
}

export const getActivityData = async (user) => {
	// Je précise l'url de l'API pour récupérer les données d'activité de l'utilisateur
	let activityDataUrl = `http://localhost:3000/user/${user}/activity`

	try {
		const userActivity = await axios.get(activityDataUrl)
		const userActivityData = userActivity.data.data

		return userActivityData
	} catch (error) {
		console.log(error)
	}
}

export const getSessionsData = async (user) => {
	// Je précise l'url de l'API pour récupérer les données de sessions de l'utilisateur
	let sessionsDataUrl = `http://localhost:3000/user/${user}/average-sessions`

	try {
		const userSessions = await axios.get(sessionsDataUrl)
		const userSessionsData = userSessions.data.data

		return userSessionsData
	} catch (error) {
		console.log(error)
	}
}

export const getPerformanceData = async (user) => {
	// Je précise l'url de l'API pour récupérer les données de performance de l'utilisateur
	let performanceDataUrl = `http://localhost:3000/user/${user}/performance`

	try {
		const userPerformance = await axios.get(performanceDataUrl)
		const userPerformanceData = userPerformance.data.data

		return userPerformanceData
	} catch (error) {
		console.log(error)
	}
}
