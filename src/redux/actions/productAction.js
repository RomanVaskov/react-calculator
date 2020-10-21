export const SET_PRODUCT_NAME = "SET_PRODUCT_NAME";
export const SET_PRODUCT_PRICE = "SET_PRODUCT_PRICE";
export const SET_PRODUCT_QUANTITY = "SET_PRODUCT_QUANTITY";
export const SET_PRODUCT_INFO = "SET_PRODUCT_INFO";
export const SET_PRODUCT_DEL = "SET_PRODUCT_DEL";
export const SET_PRODUCT_INCREMENT = "SET_PRODUCT_INCREMENT";
export const SET_PRODUCT_DECREMENT = "SET_PRODUCT_DECREMENT";
export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";

export const setProductName = (name) => ({
  type: SET_PRODUCT_NAME,
  payload: name,
});

export const setProductPrice = (price) => ({
  type: SET_PRODUCT_PRICE,
  payload: price,
});

export const setProductQuantity = (qty) => ({
  type: SET_PRODUCT_QUANTITY,
  payload: qty,
});

let nextProductId = 0;

export const setProductInfo = (name, price, qty) => ({
  type: SET_PRODUCT_INFO,
  payload: {
    name: name,
    price: price,
    qty: qty,
    id: ++nextProductId,
  },
});

export const setProductDel = (productId) => ({
  type: SET_PRODUCT_DEL,
  payload: productId,
});

export const setProductQuantityInc = (id, qty) => ({
  type: SET_PRODUCT_INCREMENT,
  payload: { id, qty },
});

export const setProductQuantityDec = (id, qty) => ({
  type: SET_PRODUCT_DECREMENT,
  payload: { id, qty },
});

export const setTotalPrice = () => ({
  type: SET_TOTAL_PRICE,
});
