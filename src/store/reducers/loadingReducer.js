import {actionTypes} from '../actions/loadingAction';
import {initialState} from './initialState';

const loadingReducer = (state = initialState.loading, {type, payload}) => {
    switch (type){
        case actionTypes.CHANGE_LOADING:
            return {...state, ...payload};
        default:
            return state;
    }
}

export default loadingReducer;