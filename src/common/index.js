'use client'

import AddTask from "@/components/addTask"
import Sidebar from "@/components/sidebar/sidebar"
import TaskState from "@/context"


export default function CommonLayout({ children }) {
    return (
        <div className="flex ">
            <TaskState>
            <AddTask/>
            <Sidebar />
            {children}
            </TaskState>
        </div>
    )
}