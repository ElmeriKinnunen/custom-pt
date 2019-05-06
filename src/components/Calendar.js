import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Moment from 'moment';

const localizer = BigCalendar.momentLocalizer(Moment)

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = { trainings: [], events: [] };
  }

  componentDidMount() {
    this.loadTraining();
  }

  loadTraining = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings/')
    .then((response) => response.json())
    .then((jsonData) => {let events = jsonData.content.map( function (training) {
        return {
          title: training.activity,
          start: Moment(training.date).toDate(),
          end: Moment(training.date).add(training.duration, 'm').toDate(),
          allDay: false,
        }
      });
      this.setState({
        trainings: jsonData.content,
        events: events
      });
    })
  }

  render() {
    return (
      <div>
        <BigCalendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"

          views={{
            month: true,
            week: true,
            agenda: true,
          }}

          drilldownView="agenda"
          step={30}
          showMultiDayTimes
          defaultDate={new Date()}
          style={{ height: "720px", margin: "50px 50px" }}

          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
          )}
        />
      </div>
    );
  }
}

export default Calendar;