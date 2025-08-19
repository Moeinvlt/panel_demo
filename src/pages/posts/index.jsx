import { useEffect, useState } from "react"
import { deletePostService, getPosts } from "../../services/posts";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";


export default function PostsPage(){

    const [posts, setPosts] = useState([]);

    const handelGetPosts = async () => {
        try {
            const data = await getPosts();
            setPosts(data || []);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handelGetPosts();
    }, []);


    const handelDelete = async (id) => {
        const res = await deletePostService(id)
        if(res.status === 200) {
            alert('عملیات با موفقیت انجام شد')

            setPosts(posts.filter(post => post.id !== id))
        }
    }

    return(
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">مدیریت پست ها</h1>
                <Link to="/posts/add" className="bg-[#333446] text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer">
                    <MdOutlinePostAdd />
                    <span>افزودن پست</span>
                </Link>
            </div>

            <div className="flex flex-wrap gap-6 justify-center mt-15 pb-6">
                {posts.slice(0,20).map((post => (
                    <div className="w-full md:w-[45%] xl:w-[30%] 2xl:w-[20%]  bg-white dark:bg-[#574964] rounded-2xl shadow-md dark:shadow-sm dark:shadow-cyan-50" key={post.id}>
                        <div className="bg-[#333446] text-white p-3 rounded-t-2xl flex justify-between">
                            <span># {post.id}</span>
                            <div className="flex gap-2 items-center">
                                <Link to={`/posts/edit/${post.id}`} state={{post}} className="cursor-pointer text-white">
                                    <FaEdit />
                                </Link>
                                <button onClick={() => handelDelete(post.id)} className="text-red-400 cursor-pointer">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                        <h2 className="font-bold text-[20px] dark:text-[#cfcfcf] py-2 px-3">{post.title}</h2>
                        <div className="text-justify px-4 pb-2 dark:text-[#cfcfcf]">{post.body}</div>
                    </div>
                )))}
            </div>
        </div>
    )
}