import {createStore} from 'redux'
import rootReducer from './reducers'

let store = createStore(
  rootReducer,
  localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState())
})

export default store
