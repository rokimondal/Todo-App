"use client"
import { createContext, useState } from "react"
export const TaskContext = createContext(null);
export default function TaskState({ children }) {
    const [isOpenAddTask, setOpenAddTask] = useState(false);
    const [isOpenSearch, setOpenSearch] = useState(false);
    return (
        <TaskContext.Provider
            value={{
                isOpenAddTask,
                setOpenAddTask,
                isOpenSearch,
                setOpenSearch
            }}>
            {children}
        </TaskContext.Provider>
    )
}