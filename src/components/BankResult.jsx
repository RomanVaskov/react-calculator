import React from "react";
import { useSelector } from "react-redux";

const BankResult = () => {
  const monthPay = useSelector(({ bank }) => bank.payResult.monthPay);
  const totalMoney = useSelector(({ bank }) => bank.payResult.totalMoney);
  const overpayment = useSelector(({ bank }) => bank.payResult.overpayment);

  return (
    <div className="col-12">
      <div className="border">
        <h5>Расчёты</h5>
        <div className="result">
          <div className="result-budget_month">
            <span className="title">Ежемесячный платеж</span>
            <input
              type="text"
              className="result-total budget_month-value"
              placeholder="0"
              disabled
              id="money-month"
              value={monthPay}
            />
          </div>
          <div className="result-budget_day">
            <span className="title">Итоговая сумма</span>
            <input
              type="text"
              className="result-total budget_day-value"
              placeholder="0"
              disabled
              id="result-total"
              value={totalMoney}
            />
          </div>
          <div className="result-expenses_month">
            <span className="title">Переплата</span>
            <input
              type="text"
              className="result-total expenses_month-value"
              placeholder="0"
              disabled
              id="overpayment"
              value={overpayment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankResult;
