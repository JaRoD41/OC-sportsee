import axios from 'axios'
import MainDataModel from './MainDataModel'
import ActivityModel from './ActivityModel'
import SessionsModel from './SessionsModel'
import PerformanceModel from './PerformanceModel'

export const getMainData = async (user) => {
	// Je précise l'url du fichier JSON pour récupérer les données principales de l'utilisateur
	let mainDataUrl = '/userMainData.json'

	try {
		const userMain = await axios.get(mainDataUrl)
		const userMainFilter = userMain.data.find(({ id }) => id === parseInt(user))
		
			const userMainData = new MainDataModel(userMainFilter)
			console.log('userMainFilter :', userMainFilter);
			console.log('userMainData :', userMainData)
		return userMainData
	} catch (error) {
		console.log(error)
	}
	// try {
	// 	const userMain = await axios.get(mainDataUrl)
	// 	const userMainTest = new MainDataModel(userMain.data.data)
	// 	console.log('userMain :', userMain);
	// 	const userMainData = userMainTest.find(({ id }) => id === parseInt(user))
	// 	return userMainData
	// } catch (error) {
	// 	// Je gère les erreurs
	// 	console.log(error)
	// }
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
	// try {
	// 	const userActivity = await axios.get(activityDataUrl)
	// 	const userActivityData = new ActivityModel(userActivity.data.data)
	// 	return userActivityData
	// } catch (error) {
	// 	console.log(error)
	// }
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
	// try {
	// 	const userSessions = await axios.get(sessionsDataUrl)
	// 	const userSessionsData = new SessionsModel(userSessions.data.data)
	// 	return userSessionsData
	// } catch (error) {
	// 	console.log(error)
	// }
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
	// try {
	// 	const userPerformance = await axios.get(performanceDataUrl)

	// 	const userPerformanceData = new PerformanceModel(userPerformance.data.data)
	// 	return userPerformanceData
	// } catch (error) {
	// 	console.log(error)
	// }
}
