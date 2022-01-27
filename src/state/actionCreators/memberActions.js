import { CONSTANTS } from "./index"

export const addMember = (id)=>{
    return {
        type: CONSTANTS.ADD_MEMBER,
        payload:id
    }
}

export const removeMember = (id)=>{
    return {
        type: CONSTANTS.REMOVE_MEMBER,
        payload:id
    }
}