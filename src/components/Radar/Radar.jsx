import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { getPerformanceDataValue } from '../../services/PerformanceModel'
let data = []

export default function RadarChartComponent({ performanceDataAll }) {
	data = getPerformanceDataValue(performanceDataAll)
	console.log('data dans radar après fonction :', data)

	// Je crée une fonction getKind qui va me permettre de récupérer les valeurs de kind dans data et les traduire en français pour le graphique
	const getKind = (data) => {
		let kind = data.kind
		switch (kind) {
			case 'cardio':
				return 'Cardio'
			case 'energy':
				return 'Energie'
			case 'endurance':
				return 'Endurance'
			case 'strength':
				return 'Force'
			case 'speed':
				return 'Vitesse'
			case 'intensity':
				return 'Intensité'
			default:
				return 'Valeur inconnue'
		}
	}

	return (
		<div className="radar-container">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius="80%" data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
					<PolarGrid radialLines={false} polarRadius={[0, 10, 27, 49, 72, 95]} />
					<PolarAngleAxis dataKey={getKind} tick={{ fill: 'white', fontSize: 12 }} />
					<Radar dataKey="A" fill="#FF0101" fillOpacity={0.7} dot={false} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}
