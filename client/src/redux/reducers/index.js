import { combineReducers } from "redux";
import authReducer from './authReducer';
import alertReducer from "./alertReducer";
import dogReducer from "./dogReducer"
import userReducer from "./userReducer";


const rootReducer=combineReducers({authReducer,alertReducer,dogReducer,userReducer});
export default rootReducer;
