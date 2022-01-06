import { SET_USER ,CLEAR_USER } from './types';


type userType = {}

export function setUser(user:userType){
    return{
        type:SET_USER,
        payload:user
    }
}

export function clearUser(){
    return{
        type:CLEAR_USER
    }
}

