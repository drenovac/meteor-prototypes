import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)



export default (props) => {
  return (
    <div className="box calendar">
      <BigCalendar
        views={['month', 'week', 'day']}
        events={props.events}
        defaultDate={new Date(2015, 3, 1)}
      />
    </div>

  )
}