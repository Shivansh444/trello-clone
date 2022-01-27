import { CONSTANTS } from "../actionCreators";
let id =4;
const initialState = [
    {
        id:0,
        name:'Shivansh Bhat',
        member:true,
        
        
    },
    {
        id:1,
        name:'Rishabh Raina',
        member:true,
        
    },
    {
        id:2,
        name:'Sumedha Chowdhury',
        member:true,
         
    },
    {
        id:3,
        name:'Popat Lal',
        member:false,
        
    }
]

const memberReducer = (state=initialState,action)=>{
    switch(action.type){
        case CONSTANTS.ADD_MEMBER:
        const newstate = state.map((mem)=>{
            if(mem.id===action.payload){
                const newmem = {
                    id:mem.id,
                    name:mem.name,
                    member:true
                }
                console.log(newmem)
                return newmem;
            }else{
                return mem;
            }
        }
        )
        return newstate;

        case CONSTANTS.REMOVE_MEMBER:
        const nustate = state.map((mem)=>{
            if(mem.id===action.payload){
                const numem = {
                    id:mem.id,
                    name:mem.name,
                    member:false
                }
                return numem;
            }else{
                return mem;
            }
        }
        )
        return nustate;

        default:
            return state;
    }
}

export default memberReducer;