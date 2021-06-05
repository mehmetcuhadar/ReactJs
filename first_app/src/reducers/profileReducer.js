const CURRENT_STATE ={
    profileName:""
};

export default (state = CURRENT_STATE,action) =>{
    switch (action.type) {
        case  "PROFILE_CHOOSE":
            return {...state,profileName:action.profileName};
        default:
            return state;
    }
};