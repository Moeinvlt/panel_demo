import { useState } from "react"
import { createUserService } from "../../../services/users";
import { updateUserUserService } from "../../../services/users";
import { useNavigate, useLocation } from "react-router";

export default function AddUserPage(){
    const navigate = useNavigate()

    const location = useLocation()
    const  userToEdit = location.state?.user

    const [formData, setFormData] = useState({
        name: userToEdit?.name || '',
        email: userToEdit?.email || '',
        phone: userToEdit?.phone || '',
        website: userToEdit?.website || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = userToEdit ? await updateUserUserService(userToEdit.id, formData) : await createUserService(formData)

        if(res.status === 201 || res.status === 200) {
            alert("عملیات با موفقیت انجام شد" + res.data.id);
            console.log(res)

            //* clear form
            setFormData({ name: '', email: '', phone: '', website: '' });
            navigate(-1)
        }
    };

    return(
        <div className="w-[45%] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-[#555879">{userToEdit? 'ویرایش کاربر' : 'افزودن کاربر'} </h1>
        
        <form onSubmit={handleSubmit} className="bg-[#FFEAEA] dark:bg-[#272727] shadow-lg rounded-lg border-2 border-[#555879] p-5">
            <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-white font-medium mb-2">نام</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#555879] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="نام خود را وارد کنید"
                />
            </div>
            
            <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-white font-medium mb-2">ایمیل</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#555879] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="ایمیل خود را وارد کنید"
                />
            </div>
            
            <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 dark:text-white font-medium mb-2">شماره موبایل</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#555879] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="شماره موبایل خود را وارد کنید"
                />
            </div>
            
            <div className="mb-8">
                <label htmlFor="website" className="block text-gray-700 dark:text-white font-medium mb-2">وب سایت</label>
                <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#555879] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="وبساید خود را وارد کنید"
                />
            </div>
            
            <div className="flex justify-center">
                <button 
                    type="submit" 
                    className="bg-[#555879] cursor-pointer text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md"
                >
                    {userToEdit? 'ویرایش' : 'ثبت'}
                </button>
            </div>
        </form>
    </div>
    )
}