import {useEffect, useState } from "react"
import { getUsers } from "../../services/users";
import { FaUserPlus } from "react-icons/fa";
import UsersTable from "../../components/UsersTable";
import { Link } from "react-router";
import { deleteUserService } from "../../services/users";


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

    const handelDelete = async (id) => {
        const res = await deleteUserService(id)
        if(res.status === 200) {
            alert('عملیات با موفقیت انجام شد')

            setUsers(users.filter(user => user.id !== id))
        }
    }


    return(
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">مدیریت کاربران</h1>
                <Link to="/users/add" className="bg-[#333446] text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer">
                    <FaUserPlus />
                    <span>افزودن کاربر</span>
                </Link>
            </div>

            <UsersTable users={users} handelDelete={handelDelete} />
        </div>
    );
}