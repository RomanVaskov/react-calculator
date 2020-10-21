import { SET_PAYMENT, SET_PAYMENT_TIME } from "../actions/paymentAction";

const initialState = {
  date: null,
  pay: null,
  payments: [
    "Наличные",
    "Обычная банковская карта",
    "Карта рассрочки",
    "ЕРИП",
    "WEBPAY",
    "без первого взноса",
  ],
};

const paymentReducer = (state = initialState, action) => {
  if (action.type === SET_PAYMENT_TIME) {
    return { ...state, date: action.payload };
  }
  if (action.type === SET_PAYMENT) {
    return { ...state, pay: action.pay };
  }

  return state;
};

export default paymentReducer;
