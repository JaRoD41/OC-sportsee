import React from 'react'
import DailyActivity from '../DailyActivity/DailyActivity'
import SessionLength from '../SessionLength/SessionLength'
import Radar from '../Radar/Radar'
import Score from '../Score/Score'

export default function ChartsZone({ activitySessions, todayScore }) {
	return (
		<section className="chartsZone-container">
			<article className="bigChart-container">
				<DailyActivity sessions={activitySessions} />
			</article>
			<article className="littleCharts-container">
				<SessionLength />
				<Radar />
				<Score todayScore={todayScore} />
			</article>
		</section>
	)
}
