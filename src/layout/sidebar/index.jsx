import { useState } from "react";
import Darkmode from "../../components/Darkmode"
import SideBarItem from "./SideBarItem";
import { FaArrowRightFromBracket } from "react-icons/fa6";

function Sidebar({ isOpen, closeSidebar }) {

    return (
        <aside className={`bg-[#FFEAD8] dark:bg-[#2f2e3d] pt-8 h-screen w-64 fixed  xl:right-0 transition-all duration-75 shadow-lg flex flex-col justify-between ${isOpen ? "right-0" : "right-[-100%]"}`}>
            <div className="flex justify-end px-4 py-6 xl:hidden">
                <button onClick={closeSidebar} className="text-[#555879] dark:text-white" >
                    <FaArrowRightFromBracket />
                </button>
            </div>
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