import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { getPerformanceDataValue, getPerformanceKind } from '../../services/PerformanceModel'
let data = []



export default function RadarChartComponent({ userId, performanceDataAll }) {
	let user = userId
  let kind = performanceDataAll.kind
	console.log('performanceDataAll dans radar:', performanceDataAll)
	// console.log('performanceKind :', performanceKind)

	// let performanceKindArray = Object.values(performanceKind)
	// let performanceDataArray = Array.from(performanceDataAll)
	data = getPerformanceDataValue(performanceDataAll)
	// kind = getPerformanceKind(performanceDataAll)
	// console.log('data dans radar après fonction :', data)
	// let kindArray = Array.from(kind)

	console.log('data dans radar après fonction :', data)

	// const data = [
	// 	{
	// 		subject: 'Math',
	// 		A: 120,
	// 		fullMark: 150,
	// 	},
	// 	{
	// 		subject: 'Chinese',
	// 		A: 98,
	// 		fullMark: 150,
	// 	},
	// 	{
	// 		subject: 'English',
	// 		A: 86,
	// 		fullMark: 150,
	// 	},
	// 	{
	// 		subject: 'Geography',
	// 		A: 99,
	// 		fullMark: 150,
	// 	},
	// 	{
	// 		subject: 'Physics',
	// 		A: 85,
	// 		fullMark: 150,
	// 	},
	// 	{
	// 		subject: 'History',
	// 		A: 65,
	// 		fullMark: 150,
	// 	},
	// ]
	return (
		<div className="radar-container">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="kind" />
					<PolarRadiusAxis />
					<Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}
