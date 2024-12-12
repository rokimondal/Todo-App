import moment from 'moment'
import React from 'react'
import List from './List';

const Default = ({ Tasks }) => {
  const todayTasks = Tasks.filter(task => moment(task.date, 'DD/MM/YYYY').format('DD/MM/YYYY') == moment().format('DD/MM/YYYY'));
  const tomorrowTask = Tasks.filter(task => moment(task.date, 'DD/MM/YYYY').format('DD/MM/YYYY') == moment().add(1, 'days').format('DD/MM/YYYY'));
  const weekTasks = Tasks.filter(task => moment(task.date, 'DD/MM/YYYY').isoWeek() == moment().isoWeek());
  const monthTasks = Tasks.filter(task => moment(task.date, 'DD/MM/YYYY').month() == moment().month());
  console.log(tomorrowTask);


  return (
    <div className='w-full flex flex-col gap-4 '>
      <div className='w-full border rounded-md max-h-[270px] overflow-scroll'>
        <h2 className='mt-2 text-2xl ml-8 font-Montserrat font-semibold tracking-wide text-gray-600'>Today</h2>
        {todayTasks.length > 0 && <List Tasks={todayTasks} />}
      </div>
      <div className='flex flex-col items-center justify-center lg:flex-row gap-4'>
        {tomorrowTask.length > 0 && <div className='w-full lg:w-1/2 border rounded-md max-h-[270px] overflow-scroll'>
          <h2 className='mt-2 text-2xl ml-8 font-Montserrat font-semibold tracking-wide text-gray-600'>Tomorrow</h2>
          <List Tasks={tomorrowTask} />
        </div>}
        {weekTasks.length > 0 && <div className='w-full lg:w-1/2 border rounded-md max-h-[270px] overflow-scroll'>
          <h2 className='mt-2 text-2xl ml-8 font-Montserrat font-semibold tracking-wide text-gray-600'>This Week</h2>
          <List Tasks={weekTasks} />
        </div>}
      </div>
      {monthTasks.length > 0 && <div className='w-full border rounded-md'>
        <h2 className='mt-2 text-2xl ml-8 font-Montserrat font-semibold tracking-wide text-gray-600'>This Month</h2>
        <List Tasks={monthTasks} />
      </div>}
    </div>
  )
}

export default Default