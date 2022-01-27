import { combineReducers } from "redux";
// import commentReducer from "./commentReducer";

import listReducer from "./listReducer";
import memberReducer from "./memberReducer";

const reducers = combineReducers({
    list:listReducer,
    member:memberReducer,
    // comment:commentReducer
    // you can add other reducers here
})
export default reducers