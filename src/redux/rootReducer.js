import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducers";
import multiplyReducer from "./multiply/multiplyReducers";

const rootReducer = combineReducers({
    counter: counterReducer,
    multiply: multiplyReducer
})

export default rootReducer;