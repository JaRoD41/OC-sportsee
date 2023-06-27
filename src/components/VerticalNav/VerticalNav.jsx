import React from 'react'
import VerticalNavLinks from '../VerticalNavLinks/VerticalNavLinks'

export default function VerticalNav() {
  return (
		<aside className="verticalContainer">
			<VerticalNavLinks />
			<span className="copyright">Copyright, SportSee 2023</span>
		</aside>
	)
}
