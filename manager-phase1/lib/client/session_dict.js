import moment from 'moment'

let instance = null

export default () => {
  if (instance === null){
    instance = new ReactiveDict("ROSTERME_SESSION_DICT")
    instance.set("currentWeek", moment(new Date()).subtract(3, 'w').startOf('isoweek').toString())
  }
  return instance
}