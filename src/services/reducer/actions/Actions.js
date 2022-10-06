import {USER_DATA, CONFIG } from '../../Constants'

export const setConfig = (data)=>{
    return {
        type:CONFIG,
        data:data
    }
}

export const setUserData = (data)=>{
    return {
        type:USER_DATA,
        data:data
    }
}
