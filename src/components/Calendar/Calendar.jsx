// eslint-disable-next-line
import react from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlungin from '@fullcalendar/daygrid';
import timeGridPluning from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar() {
    return <div>
        Calendar
        <FullCalendar
            plugins={[dayGridPlungin, timeGridPluning, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            height={"90vh"}
            aspectRatio={1}
            weekends={false}
            events={[
                { title: 'event 1', date: '2021-09-01' },
                { title: 'event 2', date: '2021-09-02' }
            ]}
        />        
    </div>;
}

export default Calendar;