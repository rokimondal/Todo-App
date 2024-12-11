'use client'

import AddTask from "@/components/addTask"
import Search from "@/components/Search"
import Sidebar from "@/components/sidebar/sidebar"
import TaskState from "@/context"


export default function CommonLayout({ children }) {
    return (
        <div className="flex ">
            <TaskState>
            <AddTask/>
            <Search/>
            <Sidebar />
            {children}
            </TaskState>
        </div>
    )
}