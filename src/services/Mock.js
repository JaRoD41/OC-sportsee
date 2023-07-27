import axios from 'axios'
import MainDataModel from './MainDataModel'
import ActivityModel from './ActivityModel'
import SessionsModel from './SessionsModel'
import PerformanceModel from './PerformanceModel'

export const getMainData = async (user) => {
	let errorCode = null
	// Je précise l'url du fichier JSON pour récupérer les données principales mockées de l'utilisateur
	let mainDataUrl = '/userMainData.json'

	try {
		const userMain = await axios.get(mainDataUrl)
		// Je filtre les données pour récupérer les données de l'utilisateur dont l'id correspond à l'id de l'utilisateur passé en paramètre
		const userMainFilter = userMain.data.find(({ id }) => id === parseInt(user))
		const userMainData = new MainDataModel(userMainFilter)

		return { data: userMainData, errorCode }
	} catch (error) {
		if (error.code === 'ERR_NETWORK') {
			errorCode = error.code
			console.log('problème API, code :', errorCode)
		}
		return { data: null, errorCode }
	}
}

export const getActivityData = async (user) => {
	// Je précise l'url du fichier JSON pour récupérer les données d'activité de l'utilisateur
	let activityDataUrl = '/userActivity.json'

	try {
		const userActivity = await axios.get(activityDataUrl)
		const userActivityFilter = userActivity.data.find(({ userId }) => userId === parseInt(user))
		const userActivityData = new ActivityModel(userActivityFilter)

		return userActivityData
	} catch (error) {
		console.log(error)
	}
}

export const getSessionsData = async (user) => {
	// Je précise l'url du fichier JSON pour récupérer les données de sessions de l'utilisateur
	let sessionsDataUrl = '/userAverageSessions.json'

	try {
		const userSessions = await axios.get(sessionsDataUrl)
		const userSessionsFilter = userSessions.data.find(({ userId }) => userId === parseInt(user))
		const userSessionsData = new SessionsModel(userSessionsFilter)

		return userSessionsData
	} catch (error) {
		console.log(error)
	}
}

export const getPerformanceData = async (user) => {
	// Je précise l'url du fichier JSON pour récupérer les données de performance de l'utilisateur
	let performanceDataUrl = '/userPerformance.json'

	try {
		const userPerformance = await axios.get(performanceDataUrl)
		const userPerformanceFilter = userPerformance.data.find(({ userId }) => userId === parseInt(user))
		const userPerformanceData = new PerformanceModel(userPerformanceFilter)

		return userPerformanceData
	} catch (error) {
		console.log(error)
	}
}
