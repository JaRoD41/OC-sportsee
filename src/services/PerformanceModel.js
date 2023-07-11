// export function getPerformanceDataValue(kind, data) {
// 	let dataArray = []
// 	for (let i = 0; i < kind.length; i++) {
// 		dataArray = [
// 			{
// 				kind: kind[i],
// 				A: data[i].value,
// 				fullMark: 220,
// 			},
// 		]
// 	}
// 	return dataArray
// }

// constructor(data) {
// 		this.kind = data.kind
// 		this.data = data.data
// 	}

// 	getPerformanceData() {
// 		return this.data
// 	}

// 	getKind() {
// 		return this.kind
// 	}

export const getPerformanceDataValue = (userId, data) => {
	let dataArray = []
	console.log('userId :', userId);
	// let userData = data.find((user) => user.userId === userId)
  // let maxDataValue = Math.max(...data.map((item) => item.value))
	// for (let i = 0; i < kind.length; i++) {
	// 	dataArray.push({
	// 		kind: kind[i],
	// 		A: data[i].value,
	// 		fullMark: maxDataValue,
	// 	})
	// }
	return dataArray
}

// export const getPerformanceDataValue = (kind, data) => {
// 	let dataArray = []
//   let maxDataValue = Math.max(...data.map((item) => item.value))
// 	for (let i = 0; i < kind.length; i++) {
// 		dataArray.push({
// 			kind: kind[i],
// 			A: data[i].value,
// 			fullMark: maxDataValue,
// 		})
// 	}
// 	return dataArray
// }
