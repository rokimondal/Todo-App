'use client'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { useState } from 'react';
import List from './List';
const Calendar = ({ Tasks }) => {
  const [value, setValue] = useState(dayjs());
  const filteredTask = Tasks.filter((task=>task.date == dayjs(value).format('DD/MM/YYYY')));
  console.log(filteredTask)
  return (
    <div className='flex flex-col items-center lg:items-start lg:flex-row '>
    <div className='w-full lg:w-1/3  min-w-80 flex items-center justify-center'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateCalendar']}>
          <DemoItem >
            <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
    {filteredTask.length > 0 && <div className='w-full lg:w-2/3 border mt-5 rounded-md'>
    <List Tasks={filteredTask}/>
    </div>}
    {filteredTask.length == 0 && <p>No Tasks found</p>}
    </div>
  );
}

export default Calendar