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
  if (action.type === 'SET_PRODUCT_INCREMENT') {
    return {
      ...state,
      productInfo: state.productInfo.map(item => {
        return {
          name: item.name,
          price: item.price,
          qty: action.payload + 1,
          id: item.id
        }
      })
    }
  }
  if (action.type === 'SET_PRODUCT_DECREMENT') {
    return {
      ...state,
      productInfo: state.productInfo.map(item => {
        return {
          name: item.name,
          price: item.price,
          qty: action.payload - 1,
          id: item.id
        }
      })
    }
  }

  return state
}

export default productReducer
