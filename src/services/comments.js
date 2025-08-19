import axios from "axios";

// ** Get Comments data ** //
export const getComments = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
    return response.data;
}

// ** Create new comment ** //
export const createCommentService = (data) => {
    return axios({
        url: "https://jsonplaceholder.typicode.com/comments",
        method: "POST",
        data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};

// ** Update comment ** //
export const updateCommentService = (id, data) => {
    return axios({
        url: `https://jsonplaceholder.typicode.com/comments/${id}`,
        method: "PUT",
        data,
        headers: {
            "Content-Type": 'application/json; charset=UTF-8',
        },
    });
};

// ** Delete Comment ** //
export const deleteComment = (id) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
};