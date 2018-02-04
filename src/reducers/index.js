// Set up your root reducer here...
import { combineReducers } from 'redux';
import { blogs } from "./blogs";
import { comments } from "./comments";
import { users } from "./users";
export default combineReducers({
    blogs,
    users,
    comments
});