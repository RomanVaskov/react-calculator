export const setProductName = (name) => ({
  type: 'SET_PRODUCT_NAME',
  payload: name,
})

export const setProductPrice = (price) => ({
  type: 'SET_PRODUCT_PRICE',
  payload: price,
})

export const setProductQuantity = (qty) => ({
  type: 'SET_PRODUCT_QUANTITY',
  payload: qty,
})

let nextProductId = 0

export const setProductInfo = (name, price, qty) => ({
  type: 'SET_PRODUCT_INFO',
  payload: {
    name: name,
    price: price,
    total: price,
    qty: qty,
    id: ++nextProductId,
  },
})

export const setProductDel = (productId) => ({
  type: 'SET_PRODUCT_DEL',
  payload: productId,
})

export const setProductQuantityInc = (id, qty, total) => ({
  type: 'SET_PRODUCT_INCREMENT',
  payload: {id, qty, total},
})

export const setProductQuantityDec = (id, qty, total) => ({
  type: 'SET_PRODUCT_DECREMENT',
  payload: {id, qty, total},
})

export const setTotalPrice = () => ({
  type: 'SET_TOTAL_PRICE',
})
