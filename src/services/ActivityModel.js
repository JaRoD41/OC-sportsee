export default class ActivityModel {
	constructor(data) {
		this.userId = data.userId
		this.sessions = data.sessions
	}

	getSessions() {
		return this.sessions
	}

	getKilogram() {
		return this.sessions.map((session) => session.kilogram)
	}

	getCalories() {
		return this.sessions.map((session) => session.calories)
	}
}
