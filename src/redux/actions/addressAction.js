export const SET_ADDRESS = "SET_ADDRESS";
export const SET_PICKUP_POINT = "SET_PICKUP_POINT";

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  address,
});

export const setPickupPoint = (pickupPoint) => ({
  type: SET_PICKUP_POINT,
  pickupPoint,
});
