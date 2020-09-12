const initialState = {
  name: '',
  price: '',
  qty: '',
  productInfo: [],
}

const productReducer = (state = initialState, action) => {
  if (action.type === 'SET_PRODUCT_NAME') {
    return {...state, name: action.payload}
  }
  if (action.type === 'SET_PRODUCT_PRICE') {
    return {...state, price: action.payload}
  }
  if (action.type === 'SET_PRODUCT_QUANTITY') {
    return {...state, qty: action.payload}
  }
  if (action.type === 'SET_PRODUCT_INFO') {
    let products = action.payload
    return {
      ...state,
      productInfo: [...state.productInfo, products],
    }
  }

  return state
}

export default productReducer
