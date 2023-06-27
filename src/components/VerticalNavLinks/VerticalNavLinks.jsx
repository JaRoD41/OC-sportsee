import React from 'react'
import ActivityButton from '../ActivityButton/ActivityButton'

export default function VerticalNavLinks() {
	let activities = ['zen', 'swim', 'bike', 'weight']
	return (
		<nav className="verticalButtons-container">
			{activities.map((activity, index) => {
				return <ActivityButton key={index} activity={activity} />
			})}
		</nav>
	)
}
