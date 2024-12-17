import AddTask from "@/components/addTask"
import Header from "@/components/Header"
import Search from "@/components/Search"
import Sidebar from "@/components/sidebar/sidebar"
import TaskState from "@/context"


export default function CommonLayout({ children }) {
    return (
        <div className="lg:flex ">
            <TaskState>
                <AddTask />
                <Search />
                <Sidebar />
                <Header />
                {children}
            </TaskState>
        </div>
    )
}