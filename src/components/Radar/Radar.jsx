import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { getPerformanceDataValue } from '../../services/PerformanceModel'
let data = []

export default function RadarChartComponent({ performanceDataAll }) {
	data = getPerformanceDataValue(performanceDataAll)
	console.log('data dans radar après fonction :', data)

	// Je crée une fonction getKind qui va me permettre de récupérer les valeurs de kind dans data, les traduire en français pour le graphique et mettre dans le bon ordre pour le graphique
	const getKind = (data) => {
		let kind = data.kind
		switch (kind) {
			case 'cardio':
				return 'Intensité'
			case 'energy':
				return 'Vitesse'
			case 'endurance':
				return 'Force'
			case 'strength':
				return 'Endurance'
			case 'speed':
				return 'Energie'
			case 'intensity':
				return 'Cardio'
			default:
				return 'Valeur inconnue'
		}
	}

	return (
		<div className="radar-container">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius="80%" data={data} margin={{ top: 25, right: 25, bottom: 25, left: 25 }}>
					<PolarGrid radialLines={false}  />
					<PolarAngleAxis dataKey={getKind} tick={{ fill: 'white', fontSize: 12 }} />
					<Radar dataKey="A" fill="#FF0101" fillOpacity={0.7} dot={false} animationEasing='ease-in-out'/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}
