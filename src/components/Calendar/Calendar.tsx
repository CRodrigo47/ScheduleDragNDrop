import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Calendar() {
  return (
    <>
      <div className="h-full p-[5vw] flex border">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridWeek" weekends={false} viewClassNames='w-[80vw]'/>
      </div>
    </>
  );
}
