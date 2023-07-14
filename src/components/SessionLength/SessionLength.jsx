import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts'

const data = [
	{
		name: 'L',
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'M',
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'M',
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'J',
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'V',
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'S',
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'D',
		pv: 4300,
		amt: 2100,
	},
]

// Je crée une fonction qui va me permettre de customiser le tooltip et d'afficher les données comme sur la maquette
const CustomTooltipSessions = ({ active, payload }) => {
	if (active && payload) {
		return (
			<div className="custom-tooltip-sessions">
				<p className="label">{`${payload[0].value} min`}</p>
			</div>
		)
	}

	return null
}

// Je crée une fonction qui va me permettre de customiser le curseur et d'afficher une zone sombre après le dernier point
const CustomizedCursor = ({ points }) => {
	return <Rectangle fill="#000000" opacity={0.1} x={points[0].x} width={258} height={263} />
}

const renderLegend = () => {
	return <p className="sessions-custom-legend">Durée moyenne des sessions</p>
}

// position={{ y: 0 }}
// <Legend content={renderLegend} />``` et tu déclares ta fonction plus haut dans le composent avec un ``` return <p>...</p>
export default function SessionLength({ sessionLength }) {
	console.log('sessionLength dans le composant:', sessionLength)
	return (
		<div className="session-container">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={sessionLength}
					margin={{
						top: 5,
						right: 0,
						left: 0,
						bottom: 5,
					}}
				>
					{/* <CartesianGrid strokeDasharray="3 3" /> */}
					<XAxis dataKey="day" stroke="#ffffff81" padding={{ left: 20, right: 20 }} axisLine={false} tickLine={false} />
					<YAxis type="number" domain={['dataMin - 10', 'dataMax']} padding={{ top: 80, bottom: 15 }} hide={true} />
					<Tooltip content={<CustomTooltipSessions />} cursor={<CustomizedCursor />} />
					<Legend content={renderLegend} />

					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="#FFF"
						strokeWidth={2}
						activeDot={{ stroke: '#ffffff33', strokeWidth: 12, r: 5 }}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}
