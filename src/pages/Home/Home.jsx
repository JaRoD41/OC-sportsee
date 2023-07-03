import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ActivityModel from '../../services/ActivityModel'
import MainDataModel from '../../services/MainDataModel'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav'
import Dashboard from '../../components/Dashboard/Dashboard'
// import mockedData from '../../mocked_data/mock'

const Home = () => {
	const navigate = useNavigate()
	const { userId } = useParams()

	
	// const userData = mockedData.USER_ACTIVITY[0]
	// const userDataJson = JSON.stringify(userData)
	// const allData = mockedData.USER_ACTIVITY
	// const allDataJson = JSON.stringify(allData)

	// console.log('allData :', allData)
	// console.log('allDataJson :', allDataJson)
	// console.log('userData :', userData)

	// TEST
	const [selectedUser, setSelectedUser] = useState(userId)
	const [firstName, setFirstName] = useState('')
	const [userSessions, setUserSessions] = useState([])
	const [userNutritionData, setUserNutritionData] = useState([])
	useEffect(() => {
		const getData = async () => {
			//j'ai préféré utiliser une requète AXIOS pour être prêt à la future mise en place de l'API
			const activity = await axios.get('/userActivity.json')
			const main = await axios.get('/userMainData.json')

			console.log('Activity data :', activity.data)
			console.log('Main data :', main.data)

			// Je récupère les données d'activité de l'utilisateur
			const userActivityData = activity.data.find(({ userId }) => userId === parseInt(selectedUser))
			console.log('user data :', userActivityData)

			const activityData = new ActivityModel(userActivityData)

			// Je récupère les données principales de l'utilisateur
			// J'utilise la méthode find() pour récupérer le prénom correspondant à l'id de l'utilisateur 
			const userMainData = main.data.find(({ id }) => id === parseInt(selectedUser))
			const mainData = new MainDataModel(userMainData)
			setUserNutritionData(mainData.getKeyData())
			setUserSessions(activityData.getSessions())
			setFirstName(mainData.getFirstName())
			const kilogram = activityData.getKilogram()
			console.log('user weight :', kilogram)
			activity.data.map(() => setSelectedUser(userActivityData))
			if (userActivityData === undefined) {
				navigate('/Error', { state: { message: "Can't get data" } }) //renvoi vers la page Error en cas d'id d'utilisateur invalide
			}
		}
		getData()
		// eslint-disable-next-line
	}, []) // array vide du useEffect pour ne lancer qu'une seule fois
	// FIN TEST

	// const user = 'Thomas'

	return (
		<>
			<HorizontalNav />
			<VerticalNav />
			<Dashboard user={firstName} sessions={userSessions} nutritionData={userNutritionData}/>
		</>
	)
}

export default Home
