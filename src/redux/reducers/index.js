import { combineReducers } from "redux";
import personalDataReducer from "./personalDataReducer";
import productReducer from "./productReducer";
import bankReducer from "./bankReducer";
import paymentReducer from "./paymentReducer";
import addressReducer from "./addressReducer";

const rootReducer = combineReducers({
  personalData: personalDataReducer,
  product: productReducer,
  bank: bankReducer,
  payment: paymentReducer,
  address: addressReducer,
});

export default rootReducer;
