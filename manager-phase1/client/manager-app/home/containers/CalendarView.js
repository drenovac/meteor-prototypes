import React from 'react'
import {composeWithTracker} from 'react-komposer'
import CalendarView from '../components/CalendarView'
import RosterMeSession from '../../../../lib/client/session'
const reactiveLoginDetails = RosterMeSession()

const getTimesheets = () => {
  let sessionID = reactiveLoginDetails.get().sessionID
  let customers = reactiveLoginDetails.get().user.customers.map((c) => {return `'${c}'`}).join(",")
  return new Promise((resolve, reject)=> {
    Meteor.call("getTimesheets", {sessionID: sessionID, customers: customers}, (e, d) => {
      if (e) {
        reject(e)
      } else {
        resolve(d)
      }
    })
  })
}

let timesheets = null
const composition = (props, onData) => {
  if (timesheets == null){
    getTimesheets().then((data) => {
      timesheets = data.content.timecards
      console.log(timesheets)
      onData(null, {events: []})
    }, (e) => {
      onData(null, {events: []})
    })
  }

}

export default composeWithTracker(composition)(CalendarView)