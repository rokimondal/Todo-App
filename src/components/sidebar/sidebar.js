'use client'
import { FaSearch, FaBars, FaPlus, FaTasks, FaStickyNote } from "react-icons/fa"
import { FaAnglesRight } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { useContext } from "react";
import { TaskContext } from "@/context";
import Link from "next/link";
export default function Sidebar() {
    const { setOpenAddTask } = useContext(TaskContext);
    const { setOpenSearch } = useContext(TaskContext);

    return <div className=" min-h-[calc(100vh-2rem)] lg:max-w-64 lg:min-w-64 bg-gray-200 m-4 p-4 rounded-lg  flex flex-col justify-between">
        <div >
            <div className="flex justify-between items-center mb-2 text-gray-600">
                <span className=" font-Montserrat font-semibold text-2xl">Menu</span>
                <button className="text-gray-600 text-lg"><FaBars /></button>
            </div>
            <div className="mb-2">
                <ul className="space-y-1">
                    <li className="hover:bg-gray-300 rounded ">
                        <button href="#" className="text-base px-2 py-1 flex items-center text-gray-500 w-full" onClick={() => setOpenSearch(true)}>
                            <FaSearch className="mr-3" />Search
                        </button>
                    </li>
                    <li className="hover:bg-gray-300 rounded ">
                        <button href="#" className="text-base flex px-2 py-1 items-center text-gray-500 w-full" onClick={() => setOpenAddTask(true)}>
                            <FaPlus className="mr-3" />Add Task
                        </button>
                    </li>
                    <Link href={'/'}>
                        <li className="flex justify-between items-center hover:bg-gray-300 rounded ">

                            <button className="text-base flex items-center text-gray-500 px-2 py-1 w-full" >
                                <FaTasks className="mr-3" />Today
                            </button>

                            <div className=" bg-gray-300 rounded w-7 text-center  text-sm">5</div>
                        </li>
                    </Link>
                    <Link href={'/upcoming'}>
                        <li className="flex justify-between items-center hover:bg-gray-300 rounded ">

                            <button className="text-base flex items-center text-gray-500 px-2 py-1 w-full">
                                <FaAnglesRight className="mr-3" />Upcoming
                            </button>

                            <div className="bg-gray-300 rounded w-7 text-center text-sm">11</div>
                        </li>
                    </Link>
                    <Link href={'/sticky'}>
                        <li className="flex justify-between items-center hover:bg-gray-300 rounded ">
                            <button className="text-base flex items-center text-gray-500 px-2 py-1 w-full">
                                <FaStickyNote className="mr-3" />Sticky Wall
                            </button>
                            <div className="bg-gray-300 rounded w-7 text-center  text-sm">9</div>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="border-t border-gray-400 mb-2"></div>

            <div>
                <div className="text-[1rem] font-semibold text-gray-700 mb-2">Lists</div>
                <div className="ml-1">
                    <div className="flex w-full justify-between items-center py-1 pr-1 hover:bg-gray-300 rounded p-1  hover:cursor-pointer ">
                        <div className="flex items-center">
                            <div className="h-3 w-3 bg-red-400 rounded-sm mr-2"></div>
                            <p className="text-sm text-gray-500 hover:text-gray-800">Personal</p>
                        </div>
                        <div className="bg-gray-300 rounded w-7 text-center text-sm">95</div>
                    </div>

                    <button className="text-xs text-gray-400   hover:text-gray-500 py-1 px-2 rounded mt-2 flex items-center">
                        <FaPlus className="mr-2" />Add New List
                    </button>
                </div>
            </div>

            <div className="border-t border-gray-400 my-2"></div>

            <div>
                <div className="text-[1rem] font-semibold text-gray-700 mb-2">Tags</div>
                <div className="ml-1 flex flex-wrap">
                    <div className="  hover:cursor-pointer text-xs tracking-tighter text-gray-600 bg-sky-300 hover:text-gray-800 hover:bg-sky-400 py-1 px-2 rounded w-fit m-1">Tag 1</div>
                    <div className="  hover:cursor-pointer text-xs tracking-tighter text-gray-600 bg-yellow-300 hover:text-gray-800 hover:bg-yellow-400 py-1 px-2 rounded w-fit m-1">Tag 1</div>
                    <div className="  hover:cursor-pointer text-xs tracking-tighter text-gray-600 bg-pink-300 hover:text-gray-800 hover:bg-pink-400 py-1 px-2 rounded w-fit m-1">Tag 1</div>
                    <div className="  hover:cursor-pointer text-xs tracking-tighter text-gray-600 bg-purple-300 hover:text-gray-800 hover:bg-purple-400 py-1 px-2 rounded w-fit m-1">Tag 1</div>
                    <div className="  hover:cursor-pointer text-xs tracking-tighter text-gray-600 bg-orange-300 hover:text-gray-800 hover:bg-orange-400 py-1 px-2 rounded w-fit m-1">Tag 1</div>
                    <div className="  hover:cursor-pointer text-xs tracking-tighter text-gray-600 hover:text-gray-900 hover:cursor-pointer px-2 rounded flex items-center w-fit">
                        <FaPlus className="mr-1 text-xs" />Add Tag
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-400 my-2"></div>




            <div>
                <div className="text-[1rem] font-semibold text-gray-700 mb-2">Groups</div>
                <div className="ml-1">
                    <div className="text-sm text-gray-500 hover:text-gray-600ž hover:cursor-pointer">cdfwtugvhbkjn</div>
                    <div className="text-sm text-gray-500 hover:text-gray-600ž hover:cursor-pointer">cdfwtugvhbkjn</div>
                    <div className="text-sm text-gray-500 hover:text-gray-600 hover:cursor-pointer">cdfwtugvhbkjn</div>
                </div>
            </div>
        </div>
        <div>
            <div className="mt-4 mr-10">
                <div className="text-[1rem] font-semibold text-gray-600 mb-1 flex justify-center items-center hover:text-gray-500 hover:cursor-pointer"><MdOutlineSettings className="mr-2 text-xl" />Settings</div>
                <div className="text-[1rem] font-semibold text-gray-600 mb-1 flex justify-center items-center hover:text-gray-500  hover:cursor-pointer"><RiLogoutBoxLine className="mr-2 text-xl" />Sign out</div>
            </div>
        </div>
    </div>
}