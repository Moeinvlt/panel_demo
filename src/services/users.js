import axios from "axios"

export const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
};

// ** Create New User ** //
export const createUserService = (data) => {
    return axios({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "POST",
        data,
        headers: {
            "Content-Type": 'application/json; charset=UTF-8',
        },
    });
};

// ** Update User ** //
export const updateUserUserService = (id, data) => {
    return axios({
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        method: "PUT",
        data,
        headers: {
            "Content-Type": 'application/json; charset=UTF-8',
        },
    });
};

// ** Delete User ** //
export const deleteUserService = (id) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
};