import DailyActivity from '../DailyActivity/DailyActivity'
import SessionLength from '../SessionLength/SessionLength'
import Radar from '../Radar/Radar'
import Score from '../Score/Score'

// Je crée un composant ChartsZone qui contient les composants DailyActivity, SessionLength, Radar et Score
export default function ChartsZone({ userId, activitySessions, todayScore, performanceDataAll, sessionLength }) {
	return (
		<section className="chartsZone-container">
			<article className="bigChart-container">
				<DailyActivity sessions={activitySessions} />
			</article>
			<article className="littleCharts-container">
				<SessionLength sessionLength={sessionLength} />
				<Radar userId={userId} performanceDataAll={performanceDataAll} />
				<Score todayScore={todayScore} />
			</article>
		</section>
	)
}
