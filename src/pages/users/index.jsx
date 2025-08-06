import {useEffect, useState } from "react"
import { getUsers } from "../../services/users";
import { FaUserPlus, FaEdit, FaTrash } from "react-icons/fa";


export default function UsersPage(){
    const [users, setUsers] = useState([]);

    const handelGetUsers = async () => {
        try{
            const data = await getUsers();
            setUsers(data || []);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handelGetUsers();
    }, []);


    return(
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">مدیریت کاربران</h1>
                <button className="bg-[#333446] text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer">
                <FaUserPlus />
                    <span>افزودن کاربر</span>
                </button>
            </div>

            <div className="flex justify-center items-center rounded-2xl overflow-hidden">
                <table className="table-auto w-full text-center">
                    <thead className="bg-[#333446]">
                        <th className="px-4 py-2 text-white">#</th>
                        <th className="px-4 py-2 text-white">نام</th>
                        <th className="px-4 py-2 text-white">ایمیل</th>
                        <th className="px-4 py-2 text-white">شماره تلفن</th>
                        <th className="px-4 py-2 text-white">وبسایت</th>
                        <th className="px-4 py-2 text-white">عملیات</th>
                    </thead>

                    <tbody className="bg-gray-200 dark:bg-gray-800">
                        {users.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="px-4 py-2">{user.id}</td>
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">{user.phone}</td>
                                <td className="px-4 py-2">{user.website}</td>
                                <td className="px-4 py-2 flex gap-2 items-center">
                                    <button className="bg-[#333446] text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer">
                                        <FaEdit/>
                                    </button>
                                    <button className="bg-red-400 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer">
                                        <FaTrash/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}