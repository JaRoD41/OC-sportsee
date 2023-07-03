export default class MainDataModel {
  constructor(data) {
    this.id = data.id
    this.userInfos = data.userInfos
    this.todayScore = data.todayScore
    this.keyData = data.keyData
  }

  getFirstName() {
    return this.userInfos.firstName
  }
}