import { useState } from "react";
import { createTaskService, updateTaskService } from "../../../services/tasks";
import { useNavigate, useLocation } from "react-router";


export default function AddTaskPage() {
    const navigate = useNavigate();

    const location = useLocation();
    const taskToEdit = location.state?.task;

    const [formData, setFormData] = useState({
        title: taskToEdit?.title || '',
        completed: taskToEdit?.completed || '',
    });

    const [error, setError] = useState(""); 

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value
        }));
    };
      

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (!formData.title.trim()) {
            setError("لطفا تمام فیلدها را پر کنید");
            return;
        }
        setError("");

        const res = taskToEdit
            ? await updateTaskService(taskToEdit.id, formData)
            : await createTaskService(formData);

        if (res.status === 201 || res.status === 200) {
            alert("عملیات با موفقیت انجام شد - ID: " + res.data.id);
            console.log(res);

            setFormData({ title: '', completed: false });
            navigate(-1);
        }
    };


    return(
        <div className="w-[45%] mx-auto">
            <h1 className="text-3xl font-bold text-center mb-4 text-[#555879]">
            {taskToEdit ? 'ویرایش تسک' : 'افزودن تسک'}
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
                    تسک
                </label>

                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#555879] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="تسک را وارد کنید"
                />

                <label htmlFor="completed" className="inline-block text-gray-700 dark:text-white font-medium mt-4 ml-2">وضعیت انجام تسک</label>
                <input type="checkbox" name="completed" id="completed" checked={formData.completed} onChange={handleChange} />

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#555879] cursor-pointer text-white font-medium py-3 px-8 mt-2 rounded-lg transition duration-300 shadow-md"
                    >
                        {taskToEdit ? 'ویرایش' : 'ثبت'}
                    </button>
                </div>
            </form>
        </div>
    )
}