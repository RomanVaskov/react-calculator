const initialState = {
  name: '',
  price: 0,
  qty: 0,
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
    return {
      ...state,
      productInfo: [...state.productInfo, action.payload],
    }
  }
  if (action.type === 'SET_PRODUCT_DEL') {
    let productId = action.payload
    return {
      ...state,
      productInfo: state.productInfo.filter((p) => p.id !== productId),
    }
  }

  return state
}

export default productReducer
