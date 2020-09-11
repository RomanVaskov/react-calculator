const initialState = {
  phone: 0,
  order: 0,
}

const personalDataReducer = (state = initialState, action) => {
  if (action.type === 'SET_PERSONAL_NUM') {
    return {...state, phone: action.payload}
  }
  if (action.type === 'SET_ORDER_NUMBER') {
    return {...state, order: action.payload}
  }

  return state
}

export default personalDataReducer
