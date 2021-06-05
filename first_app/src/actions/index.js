import {SIGN_IN,SIGN_OUT,LOAD_USER,DATA_LOAD} from "./types";

export const signIn = (userId,name,url) =>{
    return {
        type:SIGN_IN,
        name:name,
        url:url,
        payload:userId
    };
}

export const loadUser = (userId,name,url) =>{
    return {
        type:LOAD_USER,
        name:name,
        url:url,
        payload:userId
    };
}

export const signOut = () =>{
    return {
        type:SIGN_OUT
    };
}

export const profileChooser = (profileName) =>{
    return {
        type:"PROFILE_CHOOSE",
        profileName
    };
}

export const dataLoad = (movieData) =>{
    console.log(movieData);
    return {
        type:DATA_LOAD,
        movieData:movieData
    }
}