import { Link } from 'react-router-dom'
import ActivityButton from '../ActivityButton/ActivityButton'

export default function VerticalNavLinks() {
	// Je crée un tableau qui contient les liens de la navigation verticale
	let activities = ['zen', 'swim', 'bike', 'weight']
	return (
		<nav className="verticalButtons-container">
			{activities.map((activity, index) => {
				return (
					<Link key={index} to="/user/:userId">
						<ActivityButton key={index} activity={activity} />
					</Link>
				)
			})}
		</nav>
	)
}
