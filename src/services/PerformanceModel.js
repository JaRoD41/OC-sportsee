export const getPerformanceDataValue = (data) => {
	let dataArray = []
	let kind = data.kind

	// Je vérifie que data est bien un objet
	let dataValues = data.data || []
	// Je crée un tableau d'objets avec les valeurs de data.data afin de pouvoir les utiliser dans le radar chart
	for (let i = 0; i < dataValues.length; i++) {
		dataArray.push({
			kind: kind[dataValues[i].kind],
			A: dataValues[i].value,
		})
	}
	// Je récupère la valeur maximale de data.data afin de pouvoir l'utiliser dans le radar chart
	let maxDataValue = Math.max(...dataArray.map((item) => item.A))
	for (let i = 0; i < dataArray.length; i++) {
		// Je crée une nouvelle propriété fullMark dans chaque objet de dataArray afin de pouvoir l'utiliser dans le radar chart
		dataArray[i].fullMark = maxDataValue
	}
	return dataArray
}
