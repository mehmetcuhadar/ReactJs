import {DATA_LOAD} from "../actions/types"
const CURRENT_STATE ={
    movieData:null
};

export default (state = CURRENT_STATE,action) =>{
    switch (action.type) {
        case  DATA_LOAD:
            return {...state,movieData:action.movieData};
        default:
            return state;
    }
};