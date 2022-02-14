import { combineReducers } from "redux";
import counterReducers from './counter/reducers'
import todoListReducers from "./todolist/reducers";
export default combineReducers(
    {
        counterReducers,
        todoListReducers
    }
)