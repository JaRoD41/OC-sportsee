import axios from 'axios'

export const getMainData = async (user) => {
	// Je précise l'url du fichier JSON pour récupérer les données principales de l'utilisateur
	let mainDataUrl = '/userMainData.json'

	const userMain = await axios.get(mainDataUrl)
	const userMainData = userMain.data.find(({ id }) => id === parseInt(user))

	return userMainData
}

export const getActivityData = async (user) => {
	// Je précise l'url du fichier JSON pour récupérer les données d'activité de l'utilisateur
	let activityDataUrl = '/userActivity.json'

	const userActivity = await axios.get(activityDataUrl)
	const userActivityData = userActivity.data.find(({ userId }) => userId === parseInt(user))

	return userActivityData
}

export const getSessionsData = async (user) => {
	// Je précise l'url du fichier JSON pour récupérer les données de sessions de l'utilisateur
	let sessionsDataUrl = '/userAverageSessions.json'

	const userSessions = await axios.get(sessionsDataUrl)
	const userSessionsData = userSessions.data.find(({ userId }) => userId === parseInt(user))

	return userSessionsData
}

export const getPerformanceData = async (user) => {
	// Je précise l'url du fichier JSON pour récupérer les données de performance de l'utilisateur
	let performanceDataUrl = '/userPerformance.json'

	const userPerformance = await axios.get(performanceDataUrl)
	const userPerformanceData = userPerformance.data.find(({ userId }) => userId === parseInt(user))

	return userPerformanceData
}
