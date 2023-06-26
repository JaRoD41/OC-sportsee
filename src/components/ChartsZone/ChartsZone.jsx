import React from 'react'
import DailyActivity from '../DailyActivity/DailyActivity'
import SessionLength from '../SessionLength/SessionLength'
import Radar from '../Radar/Radar'
import Score from '../Score/Score'

export default function ChartsZone() {
	return (
		<section className="chartsZone-container">
			<article className="bigChart-container">
				<DailyActivity />
			</article>
			<article className="littleCharts-container">
				<SessionLength />
				<Radar />
				<Score />
			</article>
		</section>
	)
}
