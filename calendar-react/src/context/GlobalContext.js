import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showEventModal: false,
    setShowEventModal: () => {},
    savedEvents: [],
    dispatchCallEvent: ({type, payload}) => {},
    selectedEvent: null,
    setSelectedEvent: () => {},
    labels: [],
    setLabels: () => {}
})

export default GlobalContext