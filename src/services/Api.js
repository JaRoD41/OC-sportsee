import axios from 'axios'

export const getMainData = async (userId) => {
	const main = await axios.get('/userMainData.json')
	const userMainData = main.data.find(({ id }) => id === parseInt(userId))
	return userMainData
}

export const getActivityData = async (user) => {
	const activity = await axios.get('/userActivity.json')
	console.log('activity dans getActivityData :', activity.data)
	const userActivityData = activity.data.find(({ userId }) => userId === parseInt(user))
	console.log('userActivityData dans getActivityData :', userActivityData);
	return userActivityData
}

export const getSessionsData = async (user) => {
	const sessions = await axios.get('/userAverageSessions.json')
	const userSessionsData = sessions.data.find(({ userId }) => userId === parseInt(user))
	return userSessionsData
}

export const getPerformanceData = async (user) => {
	const performance = await axios.get('/userPerformance.json')
	const userPerformanceData = performance.data.find(({ userId }) => userId === parseInt(user))
	return userPerformanceData
}
