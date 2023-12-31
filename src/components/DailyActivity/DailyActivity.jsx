import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { monthTickFormatter } from '../../services/ActivityModel'

// Je crée un composant CustomTooltip qui va afficher les données personnalisées de la barre survolée
const CustomTooltip = ({ active, payload }) => {
	if (active && payload) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${payload[0].value}kg`}</p>
				<p className="desc">{`${payload[1].value}Kcal`}</p>
			</div>
		)
	}

	return null
}

export default function DailyActivity({ sessions }) {
	return (
		<div className="activity-container">
			<h2 className="chartHeader__title">Activité quotidienne</h2>
			<ResponsiveContainer width="100%" height="100%" className={'activityChart'}>
				<BarChart
					width={500}
					height={300}
					data={sessions}
					margin={{
						top: 0,
						right: 10,
						left: 40,
						bottom: 20,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" stroke="#dedede" vertical={false} />
					<XAxis dataKey="day" tickFormatter={monthTickFormatter} stroke="#9B9EAC" tickLine={false} dy={10} />
					<YAxis yAxisId="left" orientation="left" stroke="#8884d8" hide={true} />
					<YAxis
						yAxisId="right"
						orientation="right"
						stroke="#9B9EAC"
						domain={['dataMin - 1', 'dataMax']}
						allowDecimals={false}
						axisLine={false}
						tickLine={false}
						dx={15}
						dy={-4}
					/>
					<Tooltip allowEscapeViewBox={{ x: true, y: true }} content={<CustomTooltip />} />
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
						// Je fixe la couleur de la légende quelle que soit la couleur des barres
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
