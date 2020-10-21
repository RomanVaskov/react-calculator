import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BankSelect, SelectAvailability, SelectMonth } from "./BankSelect";
import {
  setBank,
  setClearResult,
  setContributionMoney,
  setContributionPercent,
  setCreditMonth,
  setProductAvailability,
  setResult,
  setTotalMoney,
} from "../../redux/actions/bankAction";

const Bank = () => {
  const dispatch = useDispatch();
  const total = useSelector(({ product }) => product.total);
  const banks = useSelector(({ bank }) => bank.bankData.name);
  const month = useSelector(({ bank }) => bank.bankData.month);
  const percent = useSelector(({ bank }) => bank.contributionPercent);
  const money = useSelector(({ bank }) => bank.contributionMoney);
  const bankMonth = useSelector(({ bank }) => bank.bankMonth);
  const bankPercent = useSelector(({ bank }) => bank.bankPercent);

  const productAvailability = useSelector(
    ({ bank }) => bank.bankData.productAvailability
  );

  const onBankPercent = (percent) => dispatch(setBank(percent));

  const onCreditMonth = (data) => dispatch(setCreditMonth(data));

  const onProductAvailability = (data) =>
    dispatch(setProductAvailability(data));

  const onPercent = (data) => dispatch(setContributionPercent(data));

  const onChangeMoney = () => {
    dispatch(setContributionMoney());
  };

  const onChangeTotal = (total) => {
    dispatch(setTotalMoney(total));
  };

  const onTotalResult = (banks, month, total, percent, money) => {
    dispatch(setResult(banks, month, total, percent, money));
  };

  const onClearResult = () => {
    dispatch(setClearResult());
  };

  React.useEffect(() => {
    onChangeMoney();
    onChangeTotal(total);
  }, [total, percent, dispatch, onChangeMoney, onChangeTotal]);

  return (
    <div className="border">
      <h5>Форма заполнения банка</h5>
      <div className="row">
        <div className="col">
          <h4>Банк</h4>
          <div className="mb-3">
            <BankSelect
              selector="custom-select"
              id="bank-select"
              items={banks}
              onBankPercent={onBankPercent}
            />
          </div>
        </div>
        <div className="col">
          <h4>Срок</h4>
          <div className="mb-3">
            <SelectMonth
              selector="custom-select"
              id="month-select"
              items={month}
              onProduct={onCreditMonth}
            />
          </div>
        </div>
        <div className="col">
          <h4>Сумма, BYN</h4>
          <div className="mb-3">
            {/* <!-- Подтягивает с таблицы итоговую сумму --> */}
            <input
              onChange={() => onChangeTotal(total)}
              type="text"
              className="form-control"
              placeholder="Сумма"
              value={total}
              id="amount"
              disabled
            />
          </div>
        </div>
        <div className="col">
          <h4>ПВ, %</h4>
          <div className="mb-3">
            <input
              onChange={(e) => onPercent(e.target.value)}
              type="text"
              className="form-control"
              placeholder="ПВ, %"
              id="percent"
              value={percent}
            />
          </div>
        </div>
        <div className="col">
          <h4>ПВ, BYN</h4>
          <div className="mb-3">
            <input
              onChange={() => onChangeMoney()}
              type="text"
              className="form-control"
              placeholder="переведен в деньги"
              id="percent-result"
              value={money}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button
            type="button"
            className="btn btn-success"
            onClick={() =>
              onTotalResult(bankPercent, bankMonth, total, percent, money)
            }
          >
            Рассчитать
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onClearResult()}
          >
            Сбросить
          </button>
        </div>
      </div>
      <div className="col">
        <h4>Документы</h4>
        <div className="mb-3">
          {/* <!-- Данный селект подставляется в шаблон. Если товар не на складе то вводит "Отправим доки по приходу", по умолчанию пусто --> */}
          <SelectAvailability
            selector="custom-select"
            id="doc-select"
            items={productAvailability}
            onProductAvailability={onProductAvailability}
          />
        </div>
      </div>
    </div>
  );
};

export default Bank;
