import {combineReducers} from "redux";
import adminReducer from "./admin";
import groupsReducer from "./groups";

const rootReducer = combineReducers({
    admin:adminReducer,
    groups:groupsReducer,
})

export default rootReducer;


