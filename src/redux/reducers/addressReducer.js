import { SET_ADDRESS, SET_PICKUP_POINT } from "../actions/addressAction";

const initialState = {
  address: "Адрес",
  pickupPoint: "ПВЗ Гомель",
  pickupPoints: ["ПВЗ Гомель", "ПВЗС Тростенецкая", "ПВЗ Минск Уманская"],
};

const addressReducer = (state = initialState, action) => {
  if (action.type === SET_ADDRESS) {
    return { ...state, address: action.address };
  }
  if (action.type === SET_PICKUP_POINT) {
    return { ...state, pickupPoint: action.pickupPoint };
  }

  return state;
};

export default addressReducer;
