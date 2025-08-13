import { FaEdit, FaTrash } from "react-icons/fa";
import TableHeadItem from "../components/TableHeadItem";
import { Link } from "react-router";



const UsersTable = ({ users, handelDelete }) => {

    return (
        <div className="w-full overflow-x-auto rounded-2xl">
          {/* for desktop size */}
          <table className="hidden md:table table-auto w-full text-center border-collapse">
            <thead className="bg-[#333446] text-white">
              <tr>
                <TableHeadItem item={"#"} />
                <TableHeadItem item={"نام"} />
                <TableHeadItem item={"ایمیل"} />
                <TableHeadItem item={"شماره تلفن"} />
                <TableHeadItem item={"وبسایت"} />
                <TableHeadItem item={"عملیات"} />
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
                  <td className="px-4 py-2 flex gap-2">
                    <Link
                      to={`/users/edit/${user.id}`}
                      state={{ user }}
                      className="bg-[#333446] text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      className="bg-red-400 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer"
                      onClick={() => handelDelete(user.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    
          {/* for mobile/tablet size*/}
          <div className="block md:hidden space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4 shadow"
              >
                <p className="font-bold">#{user.id}</p>
                <p>
                  <span className="font-semibold">نام: </span>
                  {user.name}
                </p>
                <p>
                  <span className="font-semibold">ایمیل: </span>
                  {user.email}
                </p>
                <p>
                  <span className="font-semibold">شماره تلفن: </span>
                  {user.phone}
                </p>
                <p>
                  <span className="font-semibold">وبسایت: </span>
                  {user.website}
                </p>
                <div className="flex gap-2 mt-3">
                  <Link
                    to={`/users/edit/${user.id}`}
                    state={{ user }}
                    className="bg-[#333446] text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="bg-red-400 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer"
                    onClick={() => handelDelete(user.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );      
}

export default UsersTable;