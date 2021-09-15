import {combineReducers} from "redux";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";
import notifyReducer from "./notifyReducer";
import registerReducer from "./registerReducer";

const rootReducer = combineReducers({
    authReducer,
    loadingReducer,
    notifyReducer,
    registerReducer
});

export default rootReducer;