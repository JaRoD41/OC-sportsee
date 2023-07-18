import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MainDataModel from '../../services/MainDataModel'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav'
import Dashboard from '../../components/Dashboard/Dashboard'
import { getMainData, getActivityData, getSessionsData, getPerformanceData } from '../../services/Api'

const Home = () => {
	// Je récupère l'id de l'utilisateur dans l'url
	const { userId } = useParams()
	console.log('userId dans le composant:', userId)

	// Je crée une constante navigate qui me permet de naviguer vers une autre page
	const navigate = useNavigate()
	
	// Je crée une  fonction checkUserId qui vérifie que l'id de l'utilisateur est bien 12 ou 18
	const checkUserId = (userId) => {
		if (userId !== '12' && userId !== '18') {
			navigate('/404', { state: { message: "Invalid user Id" } })
		}
	}

	// Je crée une fonction qui vérifie que le state data est bien rempli
	const checkData = (data) => {
		if (!data) {
			navigate('/404', { state: { message: "Can't get data" } })
		}
	}


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
		// Je vérifie que l'id de l'utilisateur est bien 12 ou 18
		checkUserId(userId)
		// Je vérifie que le state data est bien rempli
		checkData(data)
		// eslint-disable-next-line
	}, [])

	// const userMainData = data.main ? new MainDataModel(data.main) : null
	console.log('data.main dans le composant:', data.main)

	// Je récupère les données principales de l'utilisateur en m'assurant que le state data.main est bien rempli
	const firstName = data.main ? data.main.userInfos.firstName : ''
	const userSessions = data.activity ? data.activity.sessions : []
	const userNutritionData = data.main ? data.main.keyData : []
	const todayScore = data.main ? data.main.todayScore : 0
	const performanceDataAll = data.performance ? data.performance : []
	const sessionLength = data.sessions ? data.sessions.sessions : []

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
