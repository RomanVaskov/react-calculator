import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress, setPickupPoint } from "../redux/actions/addressAction";

const Address = () => {
  const dispatch = useDispatch();
  const pickupPoints = useSelector((data) => data.address.pickupPoints);
  const address = useSelector((data) => data.address.address);

  const onChangePickupPoint = (pickupPoint) =>
    dispatch(setPickupPoint(pickupPoint));

  const onChangeAddress = (address) => {
    dispatch(setAddress(address));
  };

  return (
    <div className="border">
      <h5>Форма заполнения адреса</h5>
      <form>
        <div className="row center">
          <div className="form-check mr-50 mal-20">
            <label className="form-check-label">Адрес:</label>
            <input
              onChange={(e) => onChangeAddress(e.target.value)}
              className="form-control"
              type="text"
              name="exampleRadios"
              id="exampleRadios1"
              value={address}
            />
          </div>
          <div className="form-check">
            <label className="form-check-label">Пункт вывоза:</label>
            <select
              className="custom-select"
              id="pvz-select"
              onChange={(e) => onChangePickupPoint(e.target.value)}
            >
              {pickupPoints.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Address;
