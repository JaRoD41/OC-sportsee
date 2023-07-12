import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { getPerformanceDataValue } from '../../services/PerformanceModel'
let data = []

export default function RadarChartComponent({ performanceDataAll }) {
	data = getPerformanceDataValue(performanceDataAll)
	console.log('data dans radar après fonction :', data)

	// const data = [
	// 	{
	// 		subject: 'Math',
	// 		A: 120,
	// 		B: 110,
	// 		fullMark: 150,
	// 	},
	// 	{
	// 		subject: 'Chinese',
	// 		A: 98,
	// 		B: 130,
	// 		fullMark: 150,
	// 	},
	// 	{
	// 		subject: 'English',
	// 		A: 86,
	// 		B: 130,
	// 		fullMark: 150,
	// 	},
	// 	{
	// 		subject: 'Geography',
	// 		A: 99,
	// 		B: 100,
	// 		fullMark: 150,
	// 	},
	// 	{
	// 		subject: 'Physics',
	// 		A: 85,
	// 		B: 90,
	// 		fullMark: 150,
	// 	},
	// 	{
	// 		subject: 'History',
	// 		A: 65,
	// 		B: 85,
	// 		fullMark: 150,
	// 	},
	// ]

	return (
		<div className="radar-container">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="kind" stroke='#FFF'/>
					{/* <PolarRadiusAxis /> */}
					<Radar dataKey="A" stroke="#8884d8" fill="#FF0101" fillOpacity={0.7} dot={false} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}
