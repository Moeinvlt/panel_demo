import { Routes, Route } from "react-router";
import UsersPage from "../../pages/users";
import PostsPage from "../../pages/posts";
import CommentsPage from "../../pages/comments";
import TasksPage from "../../pages/tasks";
import GalleriesPage from "../../pages/galleries";

const Content = () => {
    return(
        <main className="bg-[#DED3C4] dark:bg-[#555879] dark:text-white fixed top-0 left-0 h-screen w-full pr-64 pt-16">
            <div className="p-4 w-full h-full">
                <Routes>
                    <Route path="/users" element={<UsersPage/>} />
                    <Route path="/posts" element={<PostsPage/>} />
                    <Route path="/comments" element={<CommentsPage/>} />
                    <Route path="/tasks" element={<TasksPage/>} />
                    <Route path="/gallery" element={<GalleriesPage/>} />
                </Routes>
            </div>
        </main>
    )
}

export default Content;