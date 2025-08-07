import { Routes, Route, Navigate } from "react-router";
import UsersPage from "../../pages/users";
import PostsPage from "../../pages/posts";
import CommentsPage from "../../pages/comments";
import TasksPage from "../../pages/tasks";
import GalleriesPage from "../../pages/galleries";
import AddUserPage from "../../pages/users/add-user";

const Content = () => {
    return(
        <main className="bg-[#DED3C4] dark:bg-[#555879] text-[#555879] dark:text-white h-screen w-full">
            <div className="p-3 w-full h-full">
                <Routes>
                    <Route path="/users" element={<UsersPage/>} />
                    <Route path="/users/add" element={<AddUserPage/>} />
                    <Route path="/posts" element={<PostsPage/>} />
                    <Route path="/comments" element={<CommentsPage/>} />
                    <Route path="/tasks" element={<TasksPage/>} />
                    <Route path="/gallery" element={<GalleriesPage/>} />
                    <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
            </div>
        </main>
    )
}

export default Content;