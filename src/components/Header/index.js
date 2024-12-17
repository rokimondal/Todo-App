'use client'

import { TaskContext } from "@/context";
import { useContext } from "react";
import { FaBars } from "react-icons/fa"

const Header = () => {
    const { openSidebar, setOpenSidebar } = useContext(TaskContext);
    return (
        <div className="h-6">
            {!openSidebar && <button className="text-gray-600 text-2xl m-2 lg:hidden" onClick={() => setOpenSidebar(true)}><FaBars /></button>}
        </div>
    )
}

export default Header