import * as actionTypes from '../actions/actiontypes'

const initalstate={
    token: null,
    userId: null,
    error: null,
    signinclicked:false,
    signupclicked:false
}
const signinclicked = (state) =>{
    return{
        ...state,
        signinclicked:true

    }
}
const signupclicked = (state) =>{
    return{
        ...state,
        signupclicked:true
    }
}
const authStart = (state) => {
    return {
        ...state,
        error: null, 
        loading: true 
    };
};

const authSuccess = (state, action) => {
    return  { 
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
     
     } ;
};

const authFail = (state, action) => {
    return  {
        ...state,
        error: action.error.message,
    }
};

const reducer=(state=initalstate,action) =>{
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.SIGINCLICKED : return signinclicked(state);
        case actionTypes.SIGNUPCLICKED:return signupclicked(state)
        default:
            return state;
    }
}

export default reducer