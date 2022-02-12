import { combineReducers } from "redux";
import counterReducers from './counter/reducers'
export default combineReducers(
    {
        counterReducers
    }
)