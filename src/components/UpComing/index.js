'use client'

import { useState } from "react"
import List from "../layouts/List";
import Default from "../layouts/Default";
import Calendar from "../layouts/Calendar";

const Upcoming = ({ UpcomingTask }) => {
  const [view, setView] = useState('default');
  return (
    <>
      <div className="m-1 flex flex-col items-start justify-between px-5">
        <h2 className="text-3xl font-Montserrat font-medium">Upcoming</h2>
        <div className="w-fit m-4 p-2 rounded-md shadow-inner shadow-gray-500 bg-gray-200 flex gap-2 ">
          <div className={`w-fit p-2 rounded-md cursor-pointer ${view == 'default' && 'shadow-md  bg-gray-50 text-base'}`} onClick={() => setView('default')}>Default</div>
          <div className={`w-fit p-2 rounded-md cursor-pointer ${view == 'list' && 'shadow-md  bg-gray-50 text-base'}`} onClick={() => setView('list')}>List</div>
          <div className={`w-fit p-2 rounded-md cursor-pointer ${view == 'calendar' && 'shadow-md  bg-gray-50 text-base'}`} onClick={() => setView('calendar')}>Calender</div>
        </div>
      </div>
      {UpcomingTask.length > 0 && view == 'default' && <Default Tasks={UpcomingTask} />}

      {UpcomingTask.length > 0 && view == 'list' && <div className="border rounded-md"><List Tasks={UpcomingTask} /></div>}

      {UpcomingTask.length > 0 && view == 'calendar' && <Calendar Tasks={UpcomingTask} />}

    </>
  )
}

export default Upcoming