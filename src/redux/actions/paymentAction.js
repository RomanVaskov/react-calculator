export const SET_PAYMENT_TIME = "SET_PAYMENT_TIME";
export const SET_PAYMENT = "SET_PAYMENT";

export const setPaymentTime = (year, time) => ({
  type: SET_PAYMENT_TIME,
  payload: { year, time },
});

export const setPayment = (pay) => ({
  type: SET_PAYMENT,
  pay,
});
