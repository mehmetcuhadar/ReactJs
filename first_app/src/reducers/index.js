import {combineReducers} from 'redux';
import authReducer from './authReducer';
import profileReducer from "./profileReducer";
import dataReducer from "./dataReducer";
//import {reducer as formReducer} from 'redux-form';


export default combineReducers ({
    auth: authReducer,
    profile:profileReducer,
    data:dataReducer
  //  form: formReducer,
   // streams:streamReducer
});