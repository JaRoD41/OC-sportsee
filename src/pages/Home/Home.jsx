import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ActivityModel from '../../services/ActivityModel'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav'
import Dashboard from '../../components/Dashboard/Dashboard'
// import mockedData from '../../mocked_data/mock'

const Home = () => {
	const navigate = useNavigate()
	// const { userId } = useParams()
	let userId = 12
	let user = 'Thomas'
	let sessions = []
	// const userData = mockedData.USER_ACTIVITY[0]
	// const userDataJson = JSON.stringify(userData)
	// const allData = mockedData.USER_ACTIVITY
	// const allDataJson = JSON.stringify(allData)

	// console.log('allData :', allData)
	// console.log('allDataJson :', allDataJson)
	// console.log('userData :', userData)

	// TEST
	const [selectedUser, setSelectedUser] = useState(userId)
	const [userSessions, setUserSessions] = useState([])
	useEffect(() => {
		const getData = async () => {
			//j'ai préféré utiliser une requète AXIOS pour être prêt à la future mise en place de l'API
			const res = await axios.get('/userActivity.json')
			console.log('res.data :', res.data)
			const userData = res.data.find((user) => user.userId === selectedUser)
			console.log('user data :', userData)
			const formatedData = new ActivityModel(userData)
			setUserSessions(formatedData.getSessions())
			// const kilogram = formatedData.getKilogram()
			// console.log('user sessions :', sessions)
			// console.log('user weight :', kilogram)
			res.data.map(() => setSelectedUser(userData))
			if (userData === undefined) {
				navigate('/Error', { state: { message: "Can't get data" } }) //renvoi vers la page 404 en cas d'id d'utilisateur invalide
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
			<Dashboard user={user} sessions={userSessions} />
		</>
	)
}

export default Home
