import React from 'react'
import DailyActivity from '../DailyActivity/DailyActivity'
import SessionLength from '../SessionLength/SessionLength'
import Radar from '../Radar/Radar'
import Score from '../Score/Score'

export default function ChartsZone({ userId, activitySessions, todayScore, performanceDataAll }) {
	console.log('performanceData dans ChartsZone :', performanceDataAll);
	return (
		<section className="chartsZone-container">
			<article className="bigChart-container">
				<DailyActivity sessions={activitySessions} />
			</article>
			<article className="littleCharts-container">
				<SessionLength />
				<Radar userId={userId} performanceDataAll={performanceDataAll} />
				<Score todayScore={todayScore} />
			</article>
		</section>
	)
}
