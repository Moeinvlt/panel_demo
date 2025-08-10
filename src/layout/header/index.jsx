
import { IoMenu } from "react-icons/io5";

const Header = ({toggleSidebar}) => {
    return(
        <header className="bg-[#FADA7A] dark:bg-[#574964] text-[#555879] dark:text-white w-full h-16 shadow">
            <div className="flex justify-between items-center h-full p-2">
                <button className="text-3xl xl:hidden" onClick={toggleSidebar} >
                    <IoMenu />
                </button>
                <div>
                    <h2>امروز 25 اردیبهشت</h2>
                </div>
                <div>
                    <h1>مدیر سیستم</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;