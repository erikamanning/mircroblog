import { combineReducers } from 'redux'
import postReducer  from './postReducer'
import postCommentReducer  from './postCommentReducer'

const rootReducer = combineReducers({posts:postReducer, postComments:postCommentReducer});

export default rootReducer;