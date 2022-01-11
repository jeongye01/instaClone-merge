import { SET_USER ,CLEAR_USER } from './types';



export function setUser(user:any){
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

