import { combineReducers } from 'redux'
import  chapterReducer  from './Api/reducer'
const todoApp = combineReducers({
    chapterReducer,
//   todos
})
export default todoApp