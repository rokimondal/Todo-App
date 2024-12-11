'use client'
import { TaskContext } from '@/context';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { FaTasks, FaStickyNote } from "react-icons/fa"
import { FaAnglesRight } from "react-icons/fa6";
import { LuInbox } from "react-icons/lu";
const Search = () => {

    const { isOpenSearch, setOpenSearch } = useContext(TaskContext);
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredTask, setFilteredTask] = useState([]);
    const handleClosePopUp = () => {
        setOpenSearch(false);
    }
    const tasks = [
        {
            "_id": "64fa1a6c42d9c8f5e8e1f88a",
            "title": "Submit Project Report",
            "description": "Complete and submit the final project report to the manager.",
            "date": "12/12/2024",
            "time": "14:00",
            "status": false,
            "tags": ["Project", "Deadline", "Report"],
            "list": ["Professional"],
            "groups": ["Managers", "Developers"]
        },
        {
            "_id": "64fa1a6c42d9c8f5e8e1f88b",
            "title": "Design New App UI",
            "description": "Create the initial design for the mobile app user interface.",
            "date": "15/12/2024",
            "time": "10:30",
            "status": false,
            "tags": ["Design", "UI/UX"],
            "list": ["Professional", "Artist"],
            "groups": ["Designers"]
        },
        {
            "_id": "64fa1a6c42d9c8f5e8e1f88c",
            "title": "Weekly Team Meeting",
            "description": "Discuss weekly progress and plan next steps.",
            "date": "13/12/2024",
            "time": "09:00",
            "status": true,
            "tags": ["Meeting", "Planning"],
            "list": ["Professional"],
            "groups": ["Managers", "Marketers"]
        },
        {
            "_id": "64fa1a6c42d9c8f5e8e1f88d",
            "title": "Complete JavaScript Tutorial",
            "description": "Finish the advanced JavaScript course on the online platform.",
            "date": "11/12/2024",
            "time": "20:00",
            "status": false,
            "tags": ["JavaScript", "Learning"],
            "list": ["Personal", "Professional"],
            "groups": ["Developers"]
        },
        {
            "_id": "64fa1a6c42d9c8f5e8e1f88e",
            "title": "Plan Marketing Strategy",
            "description": "Brainstorm and draft the marketing strategy for the next campaign.",
            "date": "14/12/2024",
            "time": "15:00",
            "status": false,
            "tags": ["Marketing", "Strategy"],
            "list": ["Business"],
            "groups": ["Marketers"]
        },
        {
            "_id": "64fa1a6c42d9c8f5e8e1f88f",
            "title": "Client Presentation",
            "description": "Prepare slides and present the proposal to the client.",
            "date": "16/12/2024",
            "time": "11:00",
            "status": true,
            "tags": ["Client", "Presentation"],
            "list": ["Professional", "Business"],
            "groups": ["Managers", "Marketers"]
        },
        {
            "_id": "64fa1a6c42d9c8f5e8e1f890",
            "title": "Organize Art Portfolio",
            "description": "Arrange all art pieces in the digital portfolio.",
            "date": "10/12/2024",
            "time": "18:00",
            "status": false,
            "tags": ["Art", "Portfolio"],
            "list": ["Artist"],
            "groups": ["Designers"]
        },
        {
            "_id": "64fa1a6c42d9c8f5e8e1f891",
            "title": "Fix Backend API Issues",
            "description": "Debug and fix the errors in the backend API endpoints.",
            "date": "10/12/2024",
            "time": "16:00",
            "status": true,
            "tags": ["Backend", "BugFix"],
            "list": ["Professional"],
            "groups": ["Developers", "Testers"]
        },
        {
            "_id": "64fa1a6c42d9c8f5e8e1f892",
            "title": "Create Wireframe for New Website",
            "description": "Design the wireframe layout for the client's new website.",
            "date": "18/12/2024",
            "time": "10:00",
            "status": false,
            "tags": ["Wireframe", "Website"],
            "list": ["Artist", "Business"],
            "groups": ["Designers", "Managers"]
        },
        {
            "_id": "64fa1a6c42d9c8f5e8e1f893",
            "title": "Host Team Building Activity",
            "description": "Organize a team-building activity for better collaboration.",
            "date": "20/12/2024",
            "time": "13:00",
            "status": false,
            "tags": ["Team", "Activity"],
            "list": ["Personal", "Professional"],
            "groups": ["Managers", "Marketers", "Developers"]
        }
    ]

    useEffect(() => {
        const handler = setTimeout(() => {
            const result = tasks.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredTask(result);
        }, 500);
        return () => clearTimeout(handler);
    }, [searchQuery])
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (<>
        {isOpenSearch ? <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-75" onClick={handleClosePopUp}>
            <div className='w-72 md:w-[30rem] lg:w-[36rem] bg-white rounded-lg p-2' onClick={(e) => { e.stopPropagation() }}>
                <input
                    placeholder='Search'
                    value={searchQuery}
                    onChange={e => handleSearchChange(e)}
                    className='bg-transparent placeholder:text-2xl text-2xl outline-none w-full' />
            </div>
            <div className='max-h-64 h-64 bg-transparent'>
                {searchQuery == '' ? <div className='flex flex-col bg-slate-200 rounded-lg w-72 md:w-[30rem] lg:w-[36rem] m-1'>
                    <Link href={"/today"} className='px-2 py-1 mt-1 text-left text-gray-600 flex flex-row gap-2 items-center hover:text-gray-800'>
                        <FaTasks />
                        Go To Today
                    </Link>
                    <Link href={"/upcoming"} className='px-2 py-1 mt-1 text-left text-gray-600 flex flex-row gap-2 items-center hover:text-gray-800'>
                        <FaAnglesRight />
                        Go To Upcoming
                    </Link>
                    <Link href={"/sticky"} className='px-2 py-1 mt-1 text-left text-gray-600 flex flex-row gap-2 items-center hover:text-gray-800'>
                        <FaStickyNote />
                        Go To Sticky Wall
                    </Link>
                    <Link href={"/inbox"} className='px-2 py-1 mt-1 text-left text-gray-600 flex flex-row gap-2 items-center hover:text-gray-800'>
                        <LuInbox />
                        Go To Inbox
                    </Link>
                </div> : <div className='flex flex-col bg-slate-200 rounded-lg w-72 lg:w-[36rem] m-1'>
                    {filteredTask.map((task) => (<Link href={`/tasks/${task._id}`} key={task._id} className='px-2 py-1 mt-1 text-left text-gray-600 flex flex-row gap-2 items-center hover:text-gray-800'>
                        {task.title}
                    </Link>))}
                </div>}
            </div>
        </div> : null}
    </>
    )
}

export default Search