export default class MainDataModel {
	constructor(data) {
		this.data = data
		this.userInfos = data.userInfos
		this.firstName = this.userInfos.firstName
		this.todayScore = data.todayScore
		this.keyData = data.keyData
	}

	getFirstName() {
		return this.firstName
	}

	getTodayScore() {
		return this.todayScore
	}

	getKeyData() {
		return this.keyData
	}

	// getCalorieCount() {
	// 	return this.keyData.calorieCount
	// }

	// getProteinCount() {
	// 	return this.keyData.proteinCount
	// }

	// getCarbohydrateCount() {
	// 	return this.keyData.carbohydrateCount
	// }

	// getLipidCount() {
	// 	return this.keyData.lipidCount
	// }
}
