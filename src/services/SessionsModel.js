export const getWeekDays = (sessions) => {
	const formatedSessions = []

	// Je récupère les jours de la semaine en chiffre
	const daysValue = sessions.map((session) => session.day)

	// Je crée un tableau avec les jours de la semaine en lettre
	const weekDays = daysValue.map((element) => {
		if (element === 1) {
			return 'L'
		} else if (element === 2) {
			return 'M'
		} else if (element === 3) {
			return 'M'
		} else if (element === 4) {
			return 'J'
		} else if (element === 5) {
			return 'V'
		} else if (element === 6) {
			return 'S'
		} else if (element === 7) {
			return 'D'
		}
		return element
	})

	// Je boucle sur les sessions pour ajouter la propriété day modifiée en jour de la semaine
	sessions.forEach((session, index) => {
		formatedSessions.push({
			...session,
			day: weekDays[index],
		})
	})

	return formatedSessions
}
