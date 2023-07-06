import axios from 'axios'

export const getMainData = async (userId) => {
	const main = await axios.get('/userMainData.json')
	const userMainData = main.data.find(({ id }) => id === parseInt(userId))
	return userMainData
}

export const getActivityData = async (userId) => {
	const activity = await axios.get('/userActivity.json')
	const userActivityData = activity.data.find(({ userId }) => userId === parseInt(userId))
	return userActivityData
}

export const getSessionsData = async (userId) => {
	const sessions = await axios.get('/userAverageSessions.json')
	const userSessionsData = sessions.data.find(({ userId }) => userId === parseInt(userId))
	return userSessionsData
}

export const getPerformanceData = async (userId) => {
	const performance = await axios.get('/userPerformance.json')
	const userPerformanceData = performance.data.find(({ userId }) => userId === parseInt(userId))
	return userPerformanceData
}
