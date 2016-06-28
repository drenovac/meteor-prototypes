import React from 'react'
import _ from 'lodash'
import moment from 'moment'

export default (props) => {
  return (
    <div className="shift-view box calendar">
      <div className="title">Week Commencing : {moment(props.currentWeek).format('Do MMM YYYY')}</div>
      <div>
        <table>
          <thead>
          <tr>
            <th colSpan="2">Employee</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thur</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
          </thead>
          <tbody>
          {generateRows(props.events, props.currentWeek)}
          </tbody>
        </table>

      </div>
    </div>
  )
}

const generateRows = (events, currentWeek) => {
  let rows = []
  _.each(_.keys(events), ((site) => {
    rows.push((
      <tr><td className="site" colSpan="9">SITE: {site}</td></tr>
    ))
    let employeeEvents = groupEventsByEmployee(events[site])
    _.each(_.keys(employeeEvents), (employee) => {
      rows.push((
        <tr>
          <td className="indent"> </td>
          <td className="employee">{employee}</td>
          <td>{eventsForDay(employeeEvents[employee],currentWeek, 0)}</td>
          <td>{eventsForDay(employeeEvents[employee],currentWeek, 1)}</td>
          <td>{eventsForDay(employeeEvents[employee],currentWeek, 2)}</td>
          <td>{eventsForDay(employeeEvents[employee],currentWeek, 3)}</td>
          <td>{eventsForDay(employeeEvents[employee],currentWeek, 4)}</td>
          <td>{eventsForDay(employeeEvents[employee],currentWeek, 5)}</td>
          <td>{eventsForDay(employeeEvents[employee],currentWeek, 6)}</td>
        </tr>
      ))
    })

  }))

  return rows
}

const groupEventsByEmployee = (events) => {

  return _.groupBy(events, (event) => {
    return event.title
  })

}

const eventsForDay = (events,currentWeek, day) => {
  let currentDay = moment(new Date(currentWeek)).add(day, 'd')

  let cards = []
  let currentEvents = _.filter(events, (event) => {
    return moment(new Date(event.start)).isSame(currentDay, 'day')
  })
  _.each(currentEvents, (event) => {
    cards.push((
      <div className="event">{event.startTime} - {event.finishTime}</div>
    ))
  })
  return cards
}