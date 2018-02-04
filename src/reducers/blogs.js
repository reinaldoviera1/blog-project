import { CREATE_B, CREATE_C } from "../constants/blogs";

const blogsInitialState = {};

export const blogs = (state = blogsInitialState, action) => {
    switch (action.type) {
        case CREATE_B:
            return  {
                ...state,
                [action.id]: {
                    id: action.id,
                    username: action.username,
                    content: action.content,
                    title: action.title,
                    date: new Date().toLocaleString(),
                    comments: []
                }
            }; 
        case CREATE_C:
            return {
                ...state,
                [action.idBlog]: {
                    ...(state[action.idBlog] || {}),
                    comments: [...((state[action.idBlog] || {})["comments"] || []), action.id]
                }
            };
        default:
            return state;
    }
};