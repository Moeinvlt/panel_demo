import { useState, useEffect } from "react"
import { deleteTaskService, getTasks } from "../../services/tasks";
import { MdAddTask } from "react-icons/md";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router";

export default function TasksPage(){
    const [tasks, setTasks] = useState([]);

    const handelGetTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data || []);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handelGetTasks();
    }, []);

    const handelDelete = async (id) => {
        const res = await deleteTaskService(id)
        if(res.status === 200) {
            alert('عملیات با موفقیت انجام شد')

            setTasks(tasks.filter(task => task.id !== id))
        }
    }

    return(
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">مدیریت تسک ها</h1>
                <Link to="/tasks/add"  className="bg-[#333446] text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer">
                    <MdAddTask />
                    <span>افزودن تسک</span>
                </Link>
            </div>

            <div className="flex flex-wrap gap-6 justify-center mt-15 pb-6">
                {tasks.slice(0,27).map((task => (
                    <div className="w-full md:w-[45%] xl:w-[30%] 2xl:w-[20%] bg-white dark:bg-[#574964] rounded-2xl shadow-md dark:shadow-sm dark:shadow-cyan-50" key={task.id} >
                        <div className="bg-[#333446] text-white p-3 rounded-t-2xl flex justify-between items-center">
                            <span> {task.id}# </span>
                            <div className="flex gap-2 items-center">
                                <Link to={`/tasks/edit/${task.id}`} state={{task}}  className="cursor-pointer text-white">
                                    <FaEdit />
                                </Link>

                                <button onClick={() => handelDelete(task.id)} className="text-red-400 cursor-pointer">
                                    <FaTrash />
                                </button>
                            </div>
                            <div>
                                {
                                    task.completed === true ? <span className="bg-green-400 w-7 h-7 flex justify-center 
                                    items-center rounded-full"><FaCheck /></span> 
                                    :
                                    <span className="bg-red-500 w-7 h-7 flex justify-center 
                                    items-center rounded-full text-[18px]"><HiOutlineXMark /></span>
                                }

                            </div>
                        </div>

                        <div className="">
                            <p className="ltr p-3 font-bold"> Task: {task.title} </p>
                            <p className="txt_center text-[14px] py-2">User Id: {task.userId} </p>
                        </div>
                    </div>
                )))}
            </div>
        </div>
    )
}