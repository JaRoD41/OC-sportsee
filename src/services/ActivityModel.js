export default class ActivityModel {
	constructor(data) {
		this.userId = data.userId
		this.sessions = data.sessions
	}

	getSessions() {
		return this.sessions
	}

	getDates() {
		const dates = this.sessions.map((session) => session.day)
		const formatedDates = dates.map((date) => {
			const dateArray = date.split('-')
			const formatedDate = `${dateArray[2]}/${dateArray[1]}`
			return formatedDate
		})
		return formatedDates
	}

	getKilogram() {
		return this.sessions.map((session) => session.kilogram)
	}

	getCalories() {
		return this.sessions.map((session) => session.calories)
	}
}

export const monthTickFormatter = (tick) => {
	const date = new Date(tick)

	return date.getDate()
}

