import { CREATE_C, CREATE_B } from "../constants/blogs";

let userIndex = 1;

export const createEntry = (username = "", content = "", title = "") => {
    return {
        type: CREATE_B,
        id: userIndex++,
        username,
        content,
        title
    };
};
let commentIndex = 1;

export const addComment = (idBlog, username = "", content = "") => {
    return {
        type: CREATE_C,
        id: commentIndex++,
        idBlog,
        username,
        content
    };
};