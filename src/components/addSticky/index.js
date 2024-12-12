'use client'
import { TaskContext } from '@/context'
import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddSticky = () => {
    const {setOpenAddTask}=useContext(TaskContext);
  return (
    <div className='bg-gray-200 m-4 p-4 rounded-md h-48 overflow-scroll flex items-center justify-center opacity-90 hover:bg-gray-300 text-8xl text-gray-400 hover:text-gray-500' onClick={()=>setOpenAddTask(true)}>
            <FaPlus />
    </div>
  )
}

export default AddSticky