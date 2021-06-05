import {SIGN_IN,SIGN_OUT,LOAD_USER} from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null,
    name:null,
    url:null,
    userId:null
};

export default (state = INITIAL_STATE,action) =>{
    switch (action.type) {
        case  SIGN_IN:
            return {...state,isSignedIn:true,name:action.name,url:action.url,userId: action.payload};
        case SIGN_OUT:
            return {...state,isSignedIn:false,name:null,url:null,userId:null};
        default:
            return state;
    }
};