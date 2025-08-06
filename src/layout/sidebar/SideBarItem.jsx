import { NavLink } from "react-router";

const SideBarItem = ({ to, children }) => {
    return(
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `block hover:bg-[#55587996] text-[#555879] dark:text-white hover:text-white p-2 rounded w-full h-full ${
                        isActive ? "bg-[#555879] text-white" : ""
                    }`
                }
            >
            {children}
            </NavLink>
        </li>
    );
};

export default SideBarItem;