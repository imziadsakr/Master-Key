
import ActionTypes from './actionTypes' ;
import * as config from '../../static/constants';

import { eraseCookie, setCookie, authorization, errorHandler } from '../../utils/helper' ;

import axios from 'axios' ;

export const ClearAuthError = () => async dispatch => {
    return dispatch({
        type : ActionTypes.ClearAuthError
    })
}

export const SignUpUser = (formState, navigate) => async dispatch => {
    try {
        let res = await axios.post(`${config.PRIVATE_CA1HEX_API}auth/signup` , {
            email : formState.values.email,
            password : formState.values.password,
            refferal_code : formState.values.refferal_code
        }) ;

        if(res.status === 200) {
            return navigate('/login' , formState.values.email) ;
        }

    } catch(err) {
        return dispatch({
            type : ActionTypes.SignUpUserError ,
            payload : errorHandler(err)
        })
    }
}

export const SignInUser = (formState , navigate) => async dispatch => {
    try {
        let res = await axios.post(`${config.PRIVATE_CA1HEX_API}auth/signin` , {
            email : formState.values.email,
            password : formState.values.password
        })

        if(res.status === 200) {
            setCookie('access_token' , res.data.access_token) ;
           
            if(res.data.is_created_profile){
                dispatch({
                    type : ActionTypes.SignInUser,
                    payload : {
                        profile : res.data.profile ,
                        accessToken : res.data.access_token,
                    }
                })
                return navigate("/") ;
            } else {
                return navigate('/profile')
            }
        }

    } catch(err) {
        return dispatch({
            type : ActionTypes.SignInUserError ,
            payload : errorHandler(err) 
        })
    }
}

export const SignOutUser = () => async dispatch => {
    eraseCookie('access_token');

    dispatch({
        type : ActionTypes.SignOutUser
    })
}