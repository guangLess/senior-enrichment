import { combineReducers } from 'redux'
import students from './studentStore';
//const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

// student reducer 
// campus reducer

//export default rootReducer
export default combineReducers({students})

