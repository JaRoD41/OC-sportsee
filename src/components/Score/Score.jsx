import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts'

const style = {
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

	
	return (
		<div className="score-container">
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
					{/* <RadialBar minAngle={0} label={false} background dataKey="todayScore" /> */}
					<RadialBar cornerRadius={5} dataKey="todayScore" />
					<Legend
						iconSize={10}
						layout="vertical"
						verticalAlign="middle"
						wrapperStyle={style}
						formatter={(value) => <span style={{ color: '#74798C' }}>{value}</span>}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	)
}
