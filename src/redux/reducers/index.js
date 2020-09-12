import {combineReducers} from 'redux'
import personalDataReducer from './personalDataReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
  personalData: personalDataReducer,
  product: productReducer,
})

export default rootReducer
