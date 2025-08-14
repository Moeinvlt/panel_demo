import axios from "axios";

// ** Get posts data ** //
export const getPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
};

// ** Create new post ** //
export const createPostService = (data) => {
    return axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};

// ** Update post ** //
export const updatePostService = (id, data) => {
    return axios({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        method: "PUT",
        data,
        headers: {
            "Content-Type": 'application/json; charset=UTF-8',
        },
    });
};

// ** Delete post ** //
export const deletePostService = (id) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};