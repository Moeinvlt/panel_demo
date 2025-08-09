import { FaEdit, FaTrash } from "react-icons/fa";
import TableHeadItem from "../components/TableHeadItem";
import { Link } from "react-router";



const UsersTable = ({ users, handelDelete }) => {

    return(
        <div className="flex justify-center items-center rounded-2xl overflow-hidden">
            <table className="table-auto w-full text-center">
                <thead className="bg-[#333446]">
                    <tr>
                        <TableHeadItem item={"#"}/>
                        <TableHeadItem item={"نام"}/>
                        <TableHeadItem item={"ایمیل"}/>
                        <TableHeadItem item={"شماره تلفن"}/>
                        <TableHeadItem item={"وبسایت"}/>
                        <TableHeadItem item={"عملیات"}/>
                    </tr>
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
                                    <Link to={`/users/edit/${user.id}`} state={{ user }}>
                                        <FaEdit/> 
                                    </Link>
                                </button>
                                <button className="bg-red-400 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer" onClick={() => handelDelete(user.id)}>                                        
                                    <FaTrash/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )        
}

export default UsersTable;