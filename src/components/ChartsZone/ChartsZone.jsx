import React from 'react'
import DailyActivity from '../DailyActivity/DailyActivity'
import SessionLength from '../SessionLength/SessionLength'
import Radar from '../Radar/Radar'
import Score from '../Score/Score'

export default function ChartsZone({ activitySessions, todayScore, performanceKind, performanceData }) {
	return (
		<section className="chartsZone-container">
			<article className="bigChart-container">
				<DailyActivity sessions={activitySessions} />
			</article>
			<article className="littleCharts-container">
				<SessionLength />
				<Radar performanceKind={performanceKind} performanceData={performanceData} />
				<Score todayScore={todayScore} />
			</article>
		</section>
	)
}
