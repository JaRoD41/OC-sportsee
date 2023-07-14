import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts'
import { getWeekDays } from '../../services/SessionsModel'

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

// Je crée une fonction qui va me permettre de customiser la légende et d'afficher le texte comme sur la maquette
const renderLegend = () => {
	return <p className="sessions-custom-legend">Durée moyenne des sessions</p>
}

export default function SessionLength({ sessionLength }) {
	// Je récupère les données de sessionLength et je les formate avec ma fonction getWeekDays() pour pouvoir les utiliser dans le graphique
	const formatedSessions = getWeekDays(sessionLength)
	return (
		<div className="session-container">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={formatedSessions}
					margin={{
						top: 5,
						right: 0,
						left: 0,
						bottom: 5,
					}}
				>
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
