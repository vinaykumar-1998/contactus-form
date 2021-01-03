import * as actionTypes from './actiontypes'
import axios from 'axios'

export const authStart = () =>{
    return{
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = (token,userId) =>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const signinclicked = () =>{
    return{
        type:actionTypes.SIGINCLICKED
    }
}

export const signupclicked = () =>{
    return{
        type:actionTypes.SIGNUPCLICKED
    }
}



export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1-UjX_SheblPwv00VmWggLOELZ2SnwAk';
        
        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data.idToken, response.data.localId));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};