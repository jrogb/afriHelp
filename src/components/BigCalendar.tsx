"use client"

import { Calendar, momentLocalizer, View } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data';
import { useState } from 'react';
import { Views } from 'react-big-calendar';

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WEEK);

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    };

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["week", "day"]}
            view={view}
            style={{ height: "90%" }}
            onView={handleOnChangeView}
            min={new Date(2023, 9, 1, 8, 0, 0)}
            max={new Date(2030, 9, 1, 17, 0, 0)}
        />

    );
};
export default BigCalendar;