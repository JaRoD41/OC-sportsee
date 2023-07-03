import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function DailyActivity({ sessions }) {
	// LOG DES PROPS SESSIONS OK
	console.log('sessions props dans DailyActivity :', sessions)
	return (
		<div className="activity-container">
			<h2 className="chartHeader__title">Activité quotidienne</h2>
			<ResponsiveContainer width="100%" height="100%" className={'activityChart'}>
				<BarChart
					width={500}
					height={300}
					data={sessions}
					margin={{
						top: 10,
						right: 5,
						left: 10,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 2" stroke="#dedede" vertical={false} />
					<XAxis dataKey="day" stroke="#9B9EAC" />
					<YAxis yAxisId="left" orientation="left" stroke="#8884d8" hide={true} />
					<YAxis yAxisId="right" orientation="right" stroke="#9B9EAC" domain={[75, 81]} />
					<Tooltip />
					<Legend
						verticalAlign="top"
						align="right"
						height={70}
						iconType="circle"
						iconSize={10}
						wrapperStyle={{
							top: '-9%',
							right: '2rem',
							lineHeight: '40px',
						}}
						formatter={(value) => <span style={{ color: '#74798C' }}>{value}</span>}
					/>
					<Bar
						yAxisId="right"
						name="Poids (kg)"
						dataKey="kilogram"
						fill="#282d30"
						barSize={7}
						radius={[50, 50, 0, 0]}
					/>
					<Bar
						yAxisId="left"
						name="Calories brûlées (kCal)"
						dataKey="calories"
						fill="#eb0000"
						barSize={7}
						radius={[50, 50, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}
