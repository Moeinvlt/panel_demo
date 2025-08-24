import { useState, useEffect } from "react"
import { getComments,deleteComment } from "../../services/comments"
import { MdAddComment } from "react-icons/md";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";

export default function CommentsPage(){

    const [comments, setComments] = useState([]);

    const handelGetComments = async () => {
        try {
            const data = await getComments();
            setComments(data || []);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handelGetComments();
    }, []);

    const handelDelete = async (id) => {
        const res = await deleteComment(id)
        if(res.status === 200) {
            alert('عملیات با موفقیت انجام شد')

            setComments(comments.filter(comment => comment.id !== id))
        }
    }

    return(
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">مدیریت کامنت ها</h1>
                <Link to="/comments/add" className="bg-[#333446] text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer">
                    <MdAddComment />
                    <span>افزودن کامنت</span>
                </Link>
            </div>

            <div className="flex flex-wrap gap-6 justify-center mt-15 pb-6">
                {comments.slice(0,20).map((comment => (
                    <div className="w-full md:w-[45%] xl:w-[30%] 2xl:w-[20%] overflow-hidden bg-white dark:bg-[#574964] rounded-2xl shadow-md dark:shadow-sm dark:shadow-cyan-50" key={comment.id}>
                        <div className="bg-[#333446] text-white p-3 rounded-t-2xl flex justify-between">
                            <span> {comment.id}# </span>
                            <div className="flex gap-2 items-center">
                                <Link to={`/comments/edit/${comment.id}`} state={{comment}} className="cursor-pointer text-white">
                                    <FaEdit />
                                </Link>

                                <button onClick={() => handelDelete(comment.id)} className="text-red-400 cursor-pointer">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>

                        <div className="p-4 flex flex-col h-full justify-between">
                            <p className="border-b w-full text-left ltr">post ID: {comment.postId} </p>
                            <p className="border-b w-full ltr">name: {comment.name} </p>
                            <p className="border-b w-full ltr">email: {comment.email} </p>
                            <p className="text-justify bg-[#333446] rounded-2xl p-3 h-52 text-white"> {comment.body} </p>
                        </div>
                        
                    </div>
                )))}
            </div>
        </div>
    )
}