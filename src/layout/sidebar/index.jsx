import Darkmode from "../../components/Darkmode"
import SideBarItem from "./SideBarItem";

function Sidebar() {
    return (
        <aside className="bg-[#FFEAD8] dark:bg-[#2f2e3d] fixed pt-8 h-screen w-64 right-0 shadow-lg flex flex-col justify-between">
            <div className="flex justify-between items-center h-16 shadow-md p-3 bg-[#555879] rounded-lg mx-4">
                <div>
                    <h1 className="text-white">پنل مدیریت</h1>
                </div>

                <div>
                    <Darkmode/>
                </div>
            </div>

            <div className="flex flex-col gap-4 flex-1 p-4 rounded-b-lg">
                <ul>
                    <SideBarItem to={"/users"}>کاربران</SideBarItem>
                    <SideBarItem to={"/posts"}>پست ها</SideBarItem>
                    <SideBarItem to={"/comments"}>کامنت ها</SideBarItem>
                    <SideBarItem to={"/tasks"}>تسک ها</SideBarItem>
                    <SideBarItem to={"gallery"}>گالری</SideBarItem>
                </ul>
            </div>
        </aside>
    );
}


export default Sidebar;