import { Link } from 'react-router-dom'
import ActivityButton from '../ActivityButton/ActivityButton'

export default function VerticalNavLinks() {
	let activities = ['zen', 'swim', 'bike', 'weight']
	return (
		<nav className="verticalButtons-container">
			{activities.map((activity, index) => {
				return (
					<Link key={index} to="/">
						<ActivityButton key={index} activity={activity} />
					</Link>
				)
			})}
		</nav>
	)
}
