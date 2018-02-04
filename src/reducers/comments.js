import { CREATE_C } from "../constants/blogs";

const blogsInitialState = {};

export const comments = (state = blogsInitialState, action) => {
    switch (action.type) {
        case CREATE_C:
            return  {
                ...state,
                [action.id]: {
                    username: action.username,
                    content: action.content
                }
            };    
        default:
            return state;
    }
};