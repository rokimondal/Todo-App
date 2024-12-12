'use client'
import React from 'react'
import { TaskContext } from "@/context";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import List from '../layouts/List';

const Today = ({ TodayTasks }) => {
    const { setOpenAddTask } = useContext(TaskContext);
    return (<>
        <div className="m-1 flex flex-row items-center justify-between px-5">
            <h2 className="text-3xl font-Montserrat font-medium">Today</h2>
            <div className=" font-semibold text-xl text-gray-500 flex flex-row items-center justify-center w-fit hover:text-gray-600 hover:cursor-pointer" onClick={() => setOpenAddTask(true)}><FaPlus className="mr-3" />Add Task</div>
        </div>
        <div className='border rounded-md'>
        {TodayTasks.length >0 && <List Tasks={TodayTasks} />}
        </div>
    </>
    )
}

export default Today