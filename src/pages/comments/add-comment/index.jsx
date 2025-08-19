import { useState } from "react";
import { createCommentService, updateCommentService } from "../../../services/comments";
import { useNavigate, useLocation } from "react-router";


export default function AddCommentPage() {
    const navigate = useNavigate();

    const location = useLocation();
    const commentToEdit = location.state?.comment;

    const [formData, setFormData] = useState({
        name: commentToEdit?.name || '',
        body: commentToEdit?.body || '',
        email: commentToEdit?.email || '',
    });

    const [error, setError] = useState(""); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (!formData.name.trim() || !formData.body.trim() || !formData.email.trim()) {
            setError("لطفا تمام فیلدها را پر کنید");
            return;
        }
        setError("");

        const res = commentToEdit
            ? await updateCommentService(commentToEdit.id, formData)
            : await createCommentService(formData);

        if (res.status === 201 || res.status === 200) {
            alert("عملیات با موفقیت انجام شد - ID: " + res.data.id);
            console.log(res);

            setFormData({ name: '', body: '', email: '' });
            navigate(-1);
        }
    };


    return(
        <div className="w-[45%] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-[#555879]">
            {commentToEdit ? 'ویرایش کامنت' : 'افزودن کامنت'}
        </h1>

        <form
            onSubmit={handleSubmit}
            className="bg-[#FFEAEA] dark:bg-[#272727] shadow-lg rounded-lg border-2 border-[#555879] p-5"
        >
            {error && (
                <p className="text-red-500 text-sm mb-3">{error}</p>
            )}

            <label
                htmlFor="name"
                className="block text-gray-700 dark:text-white font-medium mb-2"
            >
                نام
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#555879] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="نام کاربری را وارد کنید"
            />

            <label
                htmlFor="email"
                className="block text-gray-700 dark:text-white font-medium my-2"
            >
                ایمیل
            </label>
            <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#555879] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="ایمیل کاربر را وارد کنید"
            />

            <label
                htmlFor="body"
                className="block text-gray-700 dark:text-white font-medium mb-2 mt-4"
            >
                متن پست
            </label>
            <textarea
                name="body"
                id="body"
                rows="10"
                placeholder="متن پست خود را وارد کنید"
                className="w-full px-4 py-3 border border-[#555879] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                value={formData.body}
                onChange={handleChange}
            ></textarea>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-[#555879] cursor-pointer text-white font-medium py-3 px-8 mt-2 rounded-lg transition duration-300 shadow-md"
                >
                    {commentToEdit ? 'ویرایش' : 'ثبت'}
                </button>
            </div>
        </form>
    </div>
    )
}