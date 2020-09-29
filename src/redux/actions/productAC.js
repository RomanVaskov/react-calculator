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
    name,
    price,
    qty,
    id: ++nextProductId
  },
})

export const setProductDel = (productId) => ({
  type: 'SET_PRODUCT_DEL',
  payload: productId,
})
