import { useNavigate } from 'react-router-dom'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav'
import logo from '../../assets/user_btn.png'

const Profile = () => {
	const navigate = useNavigate()

	return (
		<div className="userSelection-container">
			<HorizontalNav />
			<VerticalNav />
			<nav className="userSelection">
				<h1 className="userSelection__title">Choix de l'utilisateur</h1>
				<ul className="userSelection__list">
					<li className="userSelection__list-item">
						<span className="userName">Karl</span>
						<img
							className="userSelection__list-item__btn"
							src={logo}
							alt="user logo"
							onClick={() => navigate('/user/12')}
						/>
					</li>
					<li className="userSelection__list-item">
						<span className="userName">Cecilia</span>
						<img
							src={logo}
							alt="user logo"
							className="userSelection__list-item__btn"
							onClick={() => navigate('/user/18')}
						/>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Profile
