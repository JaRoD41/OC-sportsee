import React from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

export default function Score({ todayScore }) {
	const scoreAngle = parseInt(todayScore * 360 + 90)
	const scoreValue = parseInt(todayScore * 100)
	const data = [
		{
			todayScore: scoreAngle,
			fill: '#ff0000',
		},
	]

	return (
		<div className="score-container">
			<span className="score-container__title">Score</span>
			<div className="scoreLegend-container">
				<div className="scoreLegend-container__scoreValue">{scoreValue}%</div>
				<div className="scoreLegend-container__scoreText">de votre objectif</div>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					innerRadius="80%"
					outerRadius="80%"
					barSize={10}
					data={data}
					startAngle={90}
					endAngle={scoreAngle}
				>
					<RadialBar cornerRadius={5} dataKey="todayScore" />
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	)
}
