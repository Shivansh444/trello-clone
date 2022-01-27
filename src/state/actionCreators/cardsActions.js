import {CONSTANTS } from './index'

export const addCard=(title,listId)=>{
    console.log(listId, title)
return {
    type:CONSTANTS.ADD_CARD,
    payload:{listId,title}
    
}
}
export const removeCard=(listId,cardId)=>{
    console.log(listId, cardId)
return {
    type:CONSTANTS.REMOVE_CARD,
    payload:{listId,cardId}
    
}
}
export const setDesc=(listId,cardId,desc)=>{
    console.log(listId, cardId,desc)
return {
    type:CONSTANTS.SETDESC_CARD,
    payload:{listId,cardId,desc}
    
}
}

export const settitle=(listId,cardId,title)=>{
    console.log(listId, cardId,title)
return {
    type:CONSTANTS.SETTITLE_CARD,
    payload:{listId,cardId,title}
    
}
}



