import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: "Sunday Service",
    start: new Date(2021, 7, 9, 0, 0, 0),
    end: new Date(2021, 7, 9, 5, 30, 0),
  },
  {
    id: 0,
    title: "Sunday Service",
    start: new Date(2021, 7, 8, 0, 0, 0),
    end: new Date(2021, 7, 8, 5, 30, 0),
  },
];
const MyCalendar = () => {
  console.log(events);
  return (
    <div>
      <Calendar localizer={localizer} events={events} startAccessor='start' endAccessor='end' defaultView='week' defaultDate={new Date()} />
    </div>
  );
};

export default MyCalendar;
