import {Http} from '../../config/globalConfig'
import {changeLoading} from "./loadingAction";
import {changeNotify} from "./notifyAction";

export const actionTypes = {
    GET_TOKEN: "GET_TOKEN",
    LOGOUT: "LOGOUT",
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    CHANGE: "CHANGE",
    ERROR: "ERROR"
}

export const getToken = (token) => ({
    type: actionTypes.GET_TOKEN,
    token,
});

export const removeToken = () => ({
    type: actionTypes.LOGOUT,
});

export const loginSuccess = (bool) => ({
    type: actionTypes.SUCCESS,
    bool,
});

export const loginError = (error) => ({
    type: actionTypes.ERROR,
    error,
});

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload,
});

export const loading = (bool, msg = null) => ({
    type: actionTypes.LOADING,
    isLoading: {
        action: bool,
        msg,
    }
});

export const getUserToken = () => (dispatch) => {
    localStorage.getItem("access_token").then((res) => {
        dispatch(loading(false));
        if (typeof res !== 'undefined') {
            dispatch(getToken(res));
        }
    }).catch(error => console.log("Erro: ", error));
};

export const setUserToken = (token) => (dispatch) => {
    localStorage.setItem("access_token", token);
    dispatch(loading(false));
    dispatch(loginSuccess(true));
};

export const login = (credentials) => {
    return dispatch => {
        dispatch(changeLoading({
            open: true,
            msg: 'Autenticando...'
        }));
        return Http.post("/oauth/token", {
            grant_type: 'password',
            client_id: '2',
            client_secret: '6Nc3qDMHzAKgmF2KKP7HUVBWmhzwfATJZG4Tk4sD',
            username: credentials.username,
            password: credentials.password,
        }).then((res) => {
            dispatch(changeLoading({
                open: false,
            }));
            if (typeof res  !==  "undefined"){
                dispatch(setUserToken(res.data.access_token));
            }
        }).catch((error) =>{
            dispatch(changeLoading({
                open: false,
            }));
            if (error.response){
                if (error.response.status === 401 || error.response.status === 400){
                    dispatch(changeNotify({
                        open: true,
                        msg: 'E-mail ou Senha incorretos',
                        class: 'error'
                    }))
                }
            }else{
                dispatch(changeNotify({
                    open: true,
                    msg: 'Erro ao efetuar o Login',
                    class: 'error'
                }))
                console.log('ERROR: ', error);
            }
        });
    };
};