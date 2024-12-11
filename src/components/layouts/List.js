import Link from 'next/link';
import React from 'react'
import { BsArrowRightSquare } from "react-icons/bs";

const List = ({ TodayTasks }) => {
    return (
        <div className='border rounded-md mx-5 my-2 p-10'>
            {TodayTasks.map((task, index) => {
                if (task.status) {
                    return (<div key={task._id}>
                        {index != 0 && <div className='border m-2 rounded-lg'></div>}
                        <div className='flex flex-row items-center justify-between p-1 m-2'>
                            <div className='flex flex-row items-center gap-5'>
                                <div className='w-5 h-5 border rounded-md border-gray-600 hover:cursor-pointer'></div>
                                <p className='text-gray-600 font-sans font-normal text-base'>{task.title}</p>
                            </div>
                            <Link href={`/tasks/${task._id}`}><BsArrowRightSquare className='text-xl mr-5 text-gray-600 font-semibold hover:cursor-pointer'/></Link>
                        </div>
                    </div>)
                }
                else {
                    return(<div key={task._id}>
                        {index != 0 && <div className='border m-2 rounded-lg'></div>}
                        <div className='flex flex-row items-center justify-between p-1 m-2'>
                            <div className='flex flex-row items-center gap-5'>
                                <div className='w-5 h-5 rounded-md hover:cursor-pointer bg-gray-400'></div>
                                <p className='text-gray-400 font-sans text-base'>{task.title}</p>
                            </div>
                            <Link href={`/tasks/${task._id}`}><BsArrowRightSquare className='text-xl mr-5 text-gray-400 font-semibold hover:cursor-pointer'/></Link>
                        </div>
                    </div>)
                }
            })}
        </div>
    )
}

export default List