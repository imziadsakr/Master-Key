

import { getCookie, isAuthenticated } from "../../utils/Helper";
import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    isAuthenticated : isAuthenticated() ? true : false ,
    accessToken : isAuthenticated() ? getCookie('access_token') : null,
    userInfo : {
        user_id : null
    },
    error : null ,
    isVerifyEmail : false ,
    isVerfiyProfile : false,
    profile : {

    }
}

export default (state=INITIAL_STATE , action) => {
    switch(action.type){
        case ActionTypes.SignUpUser :
        case ActionTypes.SignOutUser : 
            return ({
                ...state,
                isAuthenticated : false,
                accessToken : null
            })
        case ActionTypes.ClearAuthError : 
            return ({
                ...state,
                error : null
            })
        case ActionTypes.SignInUser : 
            return ({
                ...state ,
                isAuthenticated : true,
                accessToken : action.payload.accessToken,
                profile : action.payload.profile,
                userInfo : {
                    ...state.userInfo,
                    user_id : action.payload.user_id
                },
                isVerifyEmail : true,
                isVerfiyProfile : true,
                error : null
            })
        case ActionTypes.ConfirmUser :
            return ({
                ...state,
                isAuthenticated : true,
                accessToken : action.payload.accessToken,
                isVerfiyProfile : action.payload.isVerfiyProfile,
                profile : action.payload.profile,
                error : null
            })
        case ActionTypes.Profile : 
            return ({
                ...state , 
                isVerfiyProfile : action.payload.isVerfiyProfile ,
                profile : action.payload.profile
            })
        case ActionTypes.ProfileEdit : 
            return ({
                ...state , 
                profile : action.payload.profile
            })
        case ActionTypes.SignUpUserError :
            return({
                ...state,
                error : action.payload
            })
        case ActionTypes.SignInUserError :
            return ({
                ...state,
                error : action.payload
            })
        case ActionTypes.ConfirmUserError :
            return ({
                ...state,
                error : action.payload
            })
        case ActionTypes.ProfileError :
            return ({
                ...state ,
                error : action.payload
            })
        case ActionTypes.ProfileEditError :
            return ({
                ...state ,
                error : action.payload
            })
        default :
            return state ;
    }
}