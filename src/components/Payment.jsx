import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import { useDispatch, useSelector } from "react-redux";

import { setPayment, setPaymentTime } from "../redux/actions/paymentAction";

registerLocale("ru", ru);

const Payment = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const dispatch = useDispatch();

  const payments = useSelector((data) => data.payment.payments);

  let year = JSON.stringify(startDate.getFullYear());
  let day = JSON.stringify(startDate.getDate());
  let month = JSON.stringify(startDate.getMonth() + 1);
  let fullDate = `${day}/${month}/${year}`;

  let hours = JSON.stringify(startDate.getHours());
  let minutes = JSON.stringify(startDate.getMinutes());

  let fullTime = `${hours}:${minutes === "0" ? minutes + "0" : minutes}`;

  React.useEffect(() => {
    dispatch(setPaymentTime(fullDate, fullTime));
  }, [fullDate, fullTime]);

  const onChangePay = (pay) => {
    dispatch(setPayment(pay));
  };

  return (
    <div className="border">
      <h5>Форма способа оплаты и доставки</h5>
      <div className="row">
        <div className="col">
          <h4>Способ оплаты</h4>
          <div className="mb-3">
            <select
              className="custom-select"
              id="bank-select"
              onChange={(e) => onChangePay(e.target.value)}
            >
              {payments.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col">
          <h4>Дата</h4>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            locale="ru"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
