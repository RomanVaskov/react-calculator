import {combineReducers} from 'redux'
import personalDataReducer from './personalDataReducer'

const rootReducer = combineReducers({
  personalData: personalDataReducer,
})

export default rootReducer
