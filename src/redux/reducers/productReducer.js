const initialState = {
  name: '',
  price: '',
  qty: '',
  total: '',
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
    let tempCart = state.productInfo.map((item) => {
      if (item.id === action.payload.id) {
        item = {...item, qty: +item.qty + 1, total: +item.price * +item.qty}
      }
      return item
    })
    return {...state, productInfo: tempCart}
  }
  if (action.type === 'SET_PRODUCT_DECREMENT') {
    let tempItem = state.productInfo.map((item) => {
      if (item.id === action.payload.id) {
        item = {...item, qty: +item.qty - 1, total: +item.price * +item.qty}
      }
      return item
    })
    return {...state, productInfo: tempItem}
  }
  if (action.type === 'SET_TOTAL_PRICE') {
    let {total} = state.productInfo.reduce(
      (cartTotal, productInfo) => {
        const {price, qty} = productInfo
        const itemTotal = price * qty

        cartTotal.total += itemTotal
        return cartTotal
      },
      {total: 0}
    )
    total = parseFloat(total.toFixed(2))
    return {...state, total}
  }

  return state
}

export default productReducer
