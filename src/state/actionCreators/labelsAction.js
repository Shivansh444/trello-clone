import { CONSTANTS } from "./index"

export const addLabel = (cardId,listId,color,text)=>{
    return {
        type: CONSTANTS.ADD_LABEL,
        payload:{cardId,listId,color,text}
    }
}

export const removeLabel = (cardId,listId,color)=>{
    return {
        type: CONSTANTS.REMOVE_LABEL,
        payload:{cardId,listId,color}
    }
}