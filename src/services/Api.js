import axios from 'axios'


export const getMainData = async (user) => {
	// Je précise l'url de l'API pour récupérer les données principales de l'utilisateur
	let mainDataUrl = `http://localhost:3000/user/${user}`
	// let mainDataUrl = '/userMainData.json'

	const userMain = await axios.get(mainDataUrl)

	// Test 
	// const userMainData = (mainDataUrl = `http://localhost:3000/user/${user}`
	// 	? userMain.data.data
	// 	: userMain.data.find(({ id }) => id === parseInt(user)))

	const userMainData = userMain.data.data

	return userMainData
}

export const getActivityData = async (user) => {
	// Je précise l'url de l'API pour récupérer les données d'activité de l'utilisateur
	let activityDataUrl = `http://localhost:3000/user/${user}/activity`

	const userActivity = await axios.get(activityDataUrl)
	const userActivityData = userActivity.data.data

	return userActivityData
}

export const getSessionsData = async (user) => {
	// Je précise l'url de l'API pour récupérer les données de sessions de l'utilisateur
	let sessionsDataUrl = `http://localhost:3000/user/${user}/average-sessions`

	const userSessions = await axios.get(sessionsDataUrl)
	const userSessionsData = userSessions.data.data

	return userSessionsData
}

export const getPerformanceData = async (user) => {
	// Je précise l'url de l'API pour récupérer les données de performance de l'utilisateur
	let performanceDataUrl = `http://localhost:3000/user/${user}/performance`

	const userPerformance = await axios.get(performanceDataUrl)
	const userPerformanceData = userPerformance.data.data

	return userPerformanceData
}

