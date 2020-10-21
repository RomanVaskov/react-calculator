import React from "react";

export const BankSelect = ({ selector, id, items, onBankPercent }) => {
  return (
    <select
      className={selector}
      id={id}
      onChange={(e) => onBankPercent(e.target.value)}
    >
      {items.map((item, index) => (
        <option key={index} value={item.percent}>
          {item.bank}
        </option>
      ))}
    </select>
  );
};

export const SelectMonth = ({ selector, id, items, onProduct }) => {
  return (
    <select
      className={selector}
      id={id}
      onChange={(e) => {
        onProduct(e.target.value);
      }}
    >
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export const SelectAvailability = ({
  selector,
  id,
  items,
  onProductAvailability,
}) => {
  return (
    <select
      className={selector}
      id={id}
      onChange={(e) => {
        onProductAvailability(e.target.value);
      }}
    >
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
