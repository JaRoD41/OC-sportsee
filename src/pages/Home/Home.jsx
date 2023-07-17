import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import ActivityModel from '../../services/ActivityModel'
import MainDataModel from '../../services/MainDataModel'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav'
import Dashboard from '../../components/Dashboard/Dashboard'
import { getMainData, getActivityData, getSessionsData, getPerformanceData } from '../../services/Api'

const Home = () => {
	const { userId } = useParams()
	// Je crée un state pour stocker les données de l'utilisateur sous forme d'objet
	const [data, setData] = useState({
		main: null,
		activity: null,
		sessions: null,
		performance: null,
	})

	useEffect(() => {
		const fetchData = async () => {
			// Je récupère les données principales de l'utilisateur en utilisant Promise.all() pour exécuter plusieurs requêtes en parallèle
			const [main, activity, sessions, performance] = await Promise.all([
				getMainData(userId),
				getActivityData(userId),
				getSessionsData(userId),
				getPerformanceData(userId),
			])

			// Je mets à jour le state data avec les données récupérées
			setData({ main, activity, sessions, performance })
		}
		fetchData()
		// Je mets à jour le state data à chaque fois que l'userId change
	}, [userId])

	// Je récupère les données principales de l'utilisateur en m'assurant que le state data.main est bien rempli

	console.log('données userMainData avec getMainData() :', data.main)
	console.log('activityData :', data.activity)
	console.log('sessionsData :', data.sessions)
	console.log('performanceData :', data.performance)

	const firstName = data.main ? data.main.userInfos.firstName : ''
	const userSessions = data.activity ? data.activity.sessions : []
	const userNutritionData = data.main ? data.main.keyData : []
	const todayScore = data.main ? data.main.todayScore : 0
	const performanceDataAll = data.performance ? data.performance : []
	const sessionLength = data.sessions ? data.sessions.sessions : []

	console.log('performanceDataAll :', performanceDataAll)
	console.log('sessionLength :', sessionLength)

	return (
		data && (
			<>
				<HorizontalNav />
				<VerticalNav />
				<Dashboard
					userId={userId}
					user={firstName}
					sessions={userSessions}
					nutritionData={userNutritionData}
					todayScore={todayScore}
					performanceData={performanceDataAll}
					sessionLength={sessionLength}
				/>
			</>
		)
	)
}

export default Home
