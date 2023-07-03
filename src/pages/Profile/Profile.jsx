import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav'

const Profile = () => {
	const navigate = useNavigate()

	return (
		<div className='userSelection-container'>
			<HorizontalNav />
			<VerticalNav />
			<nav className="userSelection">
				<h1 className="userSelection__title">Choix de l'utilisateur</h1>
				<ul className="userSelection__list">
					<li className="userSelection__list-item">
						<button className="userSelection__list-item-btn" onClick={() => navigate('/user/12')}>
							Karl
						</button>
					</li>
					<li className="userSelection__list-item">
						<button className="userSelection__list-item-btn" onClick={() => navigate('/user/18')}>
							Cecilia
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Profile
