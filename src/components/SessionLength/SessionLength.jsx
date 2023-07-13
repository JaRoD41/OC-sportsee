import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

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

const CustomTooltipSessions = ({ active, payload }) => {
	if (active && payload) {
		return (
			<div className="custom-tooltip-sessions">
				<p className="label">{`${payload[0].value}kg`}</p>
			</div>
		)
	}

	return null
}
export default function SessionLength() {
	return (
		<div className="session-container">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 0,
						left: 0,
						bottom: 5,
					}}
				>
					{/* <CartesianGrid strokeDasharray="3 3" /> */}
					<XAxis dataKey="name" />
					{/* <YAxis /> */}
					<Tooltip content={<CustomTooltipSessions />} />
					{/* <Legend /> */}
					<Line
						type="natural"
						dataKey="pv"
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
