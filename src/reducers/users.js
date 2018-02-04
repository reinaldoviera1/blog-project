import { CREATE_B, CREATE_C } from "../constants/blogs";

export const users = (state = [], action) => {
    switch (action.type) {
        case CREATE_B:
        case CREATE_C:
            if(state.indexOf(action.username) !== -1)
                return state;
            return [...state, action.username];
        default:
            return state;
    }
}