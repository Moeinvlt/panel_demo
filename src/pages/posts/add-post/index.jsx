import { useState } from "react";
import { createPostService, updatePostService } from "../../../services/posts";
import { useNavigate, useLocation } from "react-router";

export default function AddPostPage() {
    const navigate = useNavigate();

    const location = useLocation();
    const postToEdit = location.state?.post;

    const [formData, setFormData] = useState({
        title: postToEdit?.title || '',
        body: postToEdit?.body || '',
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

        
        if (!formData.title.trim() || !formData.body.trim()) {
            setError("لطفا تمام فیلدها را پر کنید");
            return;
        }
        setError("");

        const res = postToEdit
            ? await updatePostService(postToEdit.id, formData)
            : await createPostService(formData);

        if (res.status === 201 || res.status === 200) {
            alert("عملیات با موفقیت انجام شد - ID: " + res.data.id);
            console.log(res);

            setFormData({ title: '', body: '' });
            navigate(-1);
        }
    };

    return (
        <div className="w-[45%] mx-auto">
            <h1 className="text-3xl font-bold text-center mb-4 text-[#555879]">
                {postToEdit ? 'ویرایش پست' : 'افزودن پست'}
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-[#FFEAEA] dark:bg-[#272727] shadow-lg rounded-lg border-2 border-[#555879] p-5"
            >
                {error && (
                    <p className="text-red-500 text-sm mb-3">{error}</p>
                )}

                <label
                    htmlFor="title"
                    className="block text-gray-700 dark:text-white font-medium mb-2"
                >
                    تیتر
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#555879] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="تیتر پست را وارد کنید"
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
                        {postToEdit ? 'ویرایش' : 'ثبت'}
                    </button>
                </div>
            </form>
        </div>
    );
}
