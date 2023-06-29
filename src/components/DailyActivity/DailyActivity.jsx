// import { PureComponent } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	// {
	// 	name: '1',
	// 	uv: 4000,
	// 	pv: 2400,
	// 	amt: 2400,
	// },
	// {
	// 	name: '2',
	// 	uv: 3000,
	// 	pv: 1398,
	// 	amt: 2210,
	// },
	// {
	// 	name: '3',
	// 	uv: 2000,
	// 	pv: 9800,
	// 	amt: 2290,
	// },
	// {
	// 	name: '4',
	// 	uv: 2780,
	// 	pv: 3908,
	// 	amt: 2000,
	// },
	// {
	// 	name: '5',
	// 	uv: 1890,
	// 	pv: 4800,
	// 	amt: 2181,
	// },
	// {
	// 	name: '6',
	// 	uv: 2390,
	// 	pv: 3800,
	// 	amt: 2500,
	// },
	// {
	// 	name: '7',
	// 	uv: 3490,
	// 	pv: 4300,
	// 	amt: 2100,
	// },
	{
		day: '2020-07-01',
		kilogram: 80,
		calories: 240,
	},
	{
		day: '2020-07-02',
		kilogram: 80,
		calories: 220,
	},
	{
		day: '2020-07-03',
		kilogram: 81,
		calories: 280,
	},
	{
		day: '2020-07-04',
		kilogram: 81,
		calories: 290,
	},
	{
		day: '2020-07-05',
		kilogram: 80,
		calories: 160,
	},
	{
		day: '2020-07-06',
		kilogram: 78,
		calories: 162,
	},
	{
		day: '2020-07-07',
		kilogram: 76,
		calories: 390,
	},
]

export default function DailyActivity() {
	return (
		<div className="activity-container">
			<h2 className="activityChart-title">Activité quotidienne</h2>
			<ResponsiveContainer width="100%" height="100%" className={'activityChart'}>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 20,
						right: 5,
						left: 10,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 2" stroke="#dedede" vertical={false} />
					<XAxis dataKey="day" stroke="#9B9EAC" />
					<YAxis yAxisId="left" orientation="left" stroke="#8884d8" hide={true} />
					<YAxis yAxisId="right" orientation="right" stroke="#9B9EAC" />
					<Tooltip />
					<Legend />
					<Bar yAxisId="left" dataKey="calories" fill="#282d30" />
					<Bar yAxisId="right" dataKey="kilogram" fill="#eb0000" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}
