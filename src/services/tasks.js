import axios from "axios";

// ** Get Tasks data ** //
export const getTasks = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return response.data;
}

// ** Create new task ** //
export const createTaskService = (data) => {
    return axios({
        url: "https://jsonplaceholder.typicode.com/todos",
        method: "POST",
        data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};

// ** Update task ** //
export const updateTaskService = (id, data) => {
    return axios({
        url: `https://jsonplaceholder.typicode.com/todos/${id}`,
        method: "PUT",
        data,
        headers: {
            "Content-Type": 'application/json; charset=UTF-8',
        },
    });
};

// ** Delete task ** //
export const deleteTaskService = (id) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
};