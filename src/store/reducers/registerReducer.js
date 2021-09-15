import {actionTypes} from "../actions/registerAction";
import {initialState} from "./initialState";

const registerReducer = (state = initialState.register, {type, payload}) => {
    switch (type) {
        case actionTypes.CHANGE:
            return {...state, ...payload}

        case actionTypes.SUCCESS:
            return {...state, ...payload}

        case actionTypes.ERROR:
            return {...state, ...payload}

        default:
            return state;
    }
}

export default registerReducer;