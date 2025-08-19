import { Routes, Route, Navigate } from "react-router";
import UsersPage from "../../pages/users";
import PostsPage from "../../pages/posts";
import CommentsPage from "../../pages/comments";
import TasksPage from "../../pages/tasks";
import GalleriesPage from "../../pages/galleries";
import AddUserPage from "../../pages/users/add-user";
import AddPostPage from "../../pages/posts/add-post";
import AddCommentPage from "../../pages/comments/add-comment";

const Content = () => {
    return(
        <main className="bg-[#DED3C4] dark:bg-[#555879] text-[#555879] dark:text-white h-screen w-full">
            <div className="p-3 w-full h-full">
                <Routes>
                    <Route path="/users" element={<UsersPage/>} />
                    <Route path="/users/add" element={<AddUserPage/>} />
                    <Route path="/users/edit/:id" element={<AddUserPage/>} />
                    <Route path="/posts" element={<PostsPage/>} />
                    <Route path="/posts/add" element={<AddPostPage/>} />
                    <Route path="/posts/edit/:id" element={<AddPostPage/>} />
                    <Route path="/comments" element={<CommentsPage/>} />
                    <Route path="/comments/add" element={<AddCommentPage/>} />
                    <Route path="/comments/edit/:id" element={<AddCommentPage/>} />
                    <Route path="/tasks" element={<TasksPage/>} />
                    <Route path="/gallery" element={<GalleriesPage/>} />
                    <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
            </div>
        </main>
    )
}

export default Content;