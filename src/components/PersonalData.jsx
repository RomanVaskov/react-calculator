import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPersonalPhone,
  setOrderNumber,
} from "../redux/actions/personalDataAction";

const Personal = ({ onChangeOrder, onChangePhone, order, phone }) => {
  return (
    <div className="border">
      <h5>Поле для ввода телефона и №заказа</h5>
      <div className="row">
        <div className="col-6">
          <input
            onChange={(e) => onChangeOrder(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Заказ"
            value={order}
          />
        </div>
        <div className="col-6">
          <input
            onChange={(e) => onChangePhone(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Телефон"
            value={phone}
          />
        </div>
      </div>
    </div>
  );
};

const PersonalData = () => {
  const dispatch = useDispatch();
  const phone = useSelector(({ personalData }) => personalData.phone);
  const order = useSelector(({ personalData }) => personalData.order);

  const onChangePhone = (phone) => {
    dispatch(setPersonalPhone(phone));
  };

  const onChangeOrder = (order) => {
    dispatch(setOrderNumber(order));
  };

  return (
    <Personal
      onChangePhone={onChangePhone}
      onChangeOrder={onChangeOrder}
      phone={phone}
      order={order}
    />
  );
};

export default PersonalData;
