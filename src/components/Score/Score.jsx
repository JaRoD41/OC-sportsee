import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts'

const style = {
	top: '50%',
	right: 0,
	transform: 'translate(0, -50%)',
	lineHeight: '24px',
	color: '$secondary-color',
}

export default function Score({ todayScore }) {
	const scoreAngle = parseInt(todayScore * 360 + 90)
	const scoreValue = parseInt(todayScore * 100)
	console.log('scoreAngle :', scoreAngle)
	const data = [
		{
			todayScore: scoreAngle,
			fill: '#ff0000',
		},
	]

	const CustomScoreLegend = ({ active, payload }) => {
		if (active && payload) {
			return (
				<div className="scoreLegend-container">
					<div className="scoreLegend-container__scoreValue">{scoreValue}%</div>
					<div className="scoreLegend-container__scoreText">de votre objectif</div>
				</div>
			)
		}

		return null
	}




	return (
		<div className="score-container">
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					cx="50%"
					cy="50%"
					innerRadius="80%"
					outerRadius="80%"
					barSize={10}
					data={data}
					startAngle={90}
					endAngle={scoreAngle}
				>
					<RadialBar minAngle={0} label={false} background clockWise dataKey="todayScore" />
					<Legend
						content={CustomScoreLegend}
						iconSize={10}
						layout="vertical"
						verticalAlign="middle"
						wrapperStyle={style}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	)
}
