'use client'
import { TaskContext } from "@/context";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaTags, FaCalendarAlt } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaListUl } from "react-icons/fa6";
export default function AddTask() {
    const { isOpenAddTask, setOpenAddTask } = useContext(TaskContext);
    const [selectedDate, setSelectedDate] = useState(null);

    const [openProfileTypes, setOpenProfileTypes] = useState(false);
    const [openTags, setOpenTags] = useState(false);
    const [openGroups, setOpenGroups] = useState(false);

    const [list, setList] = useState('');
    const [tag, setTags] = useState('');
    const [groups, setGroups] = useState('');

    if (!isOpenAddTask) return null;

    const handleClosePopUp = () => {
        setOpenAddTask(false);
    };
    const profileTypes = ["Personal", "Professional", "Business ", "Artist ", "Customer"];
    const groupNames = ["Developers", "Designers", "Managers", "Testers", "Marketers"];
    const tags = ["JavaScript", "React", "Node.js", "UI/UX", "Marketing"];
    const handleCalendarClick = () => {
        const datePicker = document.querySelector('.react-datepicker__input-container input');
        if (datePicker) {
            datePicker.click();
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = e.target.elements;
        const title = formData.taskTitle.value;
        const description = formData.taskDescription.value;
        const date = selectedDate;
        const profileType = [...new Set(formData.profileType.value.trim().split(/\s+/))];
        const tags = [...new Set(formData.tags.value.trim().split(/\s+/))];
        const groups = [...new Set(formData.groups.value.trim().split(/\s+/))];
        console.log(title + ", " + description + ", " + date + ", " + profileType + ", " + tags + ", ", groups+', ');
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={handleClosePopUp}
        >
            <div
                className="bg-white w-4/5 md:w-2/3 lg:w-1/2 p-8 rounded-lg shadow-lg"
                onClick={(e) => { e.stopPropagation() }}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Task</h2>
                <form className="space-y-4" onSubmit={e => handleSubmit(e)}>
                    <div>
                        <input
                            type="text"
                            name="taskTitle"
                            className="w-full p-2 outline-none rounded mt-1 placeholder-gray-400"
                            placeholder="Enter task title"
                        />
                    </div>
                    <div>
                        <textarea
                            name="taskDescription"
                            className="w-full p-2 outline-none rounded mt-1 placeholder-gray-400 placeholder:font-light"
                            rows="2"
                            placeholder="Enter task details"
                        ></textarea>
                    </div>
                    <div className="flex justify-between flex-wrap gap-1">
                        <div className="flex rounded-md w-36 items-center border-[1px] pl-1">
                            <FaCalendarAlt className="text-gray-500 text-xl mr-1" onClick={handleCalendarClick}/>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Due date"
                                className="w-28 outline-none text-gray-900  placeholder:font-light"
                            />
                        </div>
                        <div className="relative border rounded-md" onClick={() => {
                                        setOpenProfileTypes(!openProfileTypes);
                                    }}>
                            <div className="flex rounded-md w-36 items-center bg-white  p-1">
                                <FaListUl
                                    className="text-gray-500 font-semibold text-2xl mr-1 cursor-pointer"
                                />
                                <textarea
                                    name="profileType"
                                    value={list}
                                    rows={1}
                                    readOnly
                                    className="w-full outline-none text-gray-900 placeholder:font-light bg-transparent cursor-default rounded resize-none overflow-auto"
                                    
                                />

                            </div>
                            <div
                                className={`${openProfileTypes ? "block" : "hidden"
                                    } absolute top-full left-0 mt-2 w-36 bg-gray-200 border border-gray-300 shadow-lg rounded-md z-10`}
                            >
                                {profileTypes?.map((item) => (
                                    <div
                                        key={item}
                                        className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-300 cursor-pointer"
                                        onClick={() => {
                                            list == '' ? setList(item) : setList(list + ' ' + item);
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative border rounded-md" onClick={() => {
                                        setOpenTags(!openTags);
                                    }}>
                            <div className="flex rounded-md w-36 items-center bg-white  p-1">
                                <FaTags
                                    className="text-gray-500 font-semibold text-2xl mr-1 cursor-pointer"
                                />
                                <textarea
                                    name="tags"
                                    value={tag}
                                    rows={1}
                                    readOnly
                                    className="w-full outline-none text-gray-900 placeholder:font-light bg-transparent cursor-default rounded resize-none overflow-auto"
                                    
                                />

                            </div>
                            <div
                                className={`${openTags ? "block" : "hidden"
                                    } absolute top-full left-0 mt-2 w-36 bg-gray-200 border border-gray-300 shadow-lg rounded-md z-10`}
                            >
                                {tags?.map((item) => (
                                    <div
                                        key={item}
                                        className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-300 cursor-pointer"
                                        onClick={() => {
                                            tag == '' ? setTags(item) : setTags(tag + ' ' + item);
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative border rounded-md" onClick={() => {
                                        setOpenGroups(!openGroups);
                                    }}>
                            <div className="flex rounded-md w-36 items-center bg-white  p-1">
                                <HiMiniUserGroup
                                    className="text-gray-500 font-semibold text-2xl mr-1 cursor-pointer"
                                />
                                <textarea
                                    name="groups"
                                    value={groups}
                                    rows={1}
                                    readOnly
                                    className="w-full outline-none text-gray-900 placeholder:font-light bg-transparent cursor-default rounded resize-none overflow-auto"
                                    
                                />

                            </div>
                            <div
                                className={`${openGroups ? "block" : "hidden"
                                    } absolute top-full left-0 mt-2 w-36 bg-gray-200 border border-gray-300 shadow-lg rounded-md z-10`}
                            >
                                {groupNames?.map((item) => (
                                    <div
                                        key={item}
                                        className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-300 cursor-pointer"
                                        onClick={() => {
                                            groups == '' ? setGroups(item) : setGroups(groups + ' ' + item);
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4 mt-4">
                        <button
                            type="button"
                            onClick={handleClosePopUp}
                            className="px-4 py-2 mt-4 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-[#FFD739] mt-4"
                        >
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
