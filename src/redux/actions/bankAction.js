export const SET_BANK = "SET_BANK";
export const SET_CREDIT_MONTH = "SET_CREDIT_MONTH";
export const SET_TOTAL_MONEY = "SET_TOTAL_MONEY";
export const SET_CONTRIBUTION_PERCENT = "SET_CONTRIBUTION_PERCENT";
export const SET_CONTRIBUTION_MONEY = "SET_CONTRIBUTION_MONEY";
export const SET_PRODUCT_AVAILABILITY = "SET_PRODUCT_AVAILABILITY";
export const SET_RESULT = "SET_RESULT";
export const SET_CLEAR_RESULT = "SET_CLEAR_RESULT";

export const setBank = (percent) => {
  return {
    type: SET_BANK,
    percent,
  };
};

export const setCreditMonth = (month) => {
  return {
    type: SET_CREDIT_MONTH,
    month,
  };
};

export const setTotalMoney = (total) => {
  return {
    type: SET_TOTAL_MONEY,
    total,
  };
};

export const setContributionPercent = (percent) => {
  return {
    type: SET_CONTRIBUTION_PERCENT,
    percent,
  };
};

export const setContributionMoney = () => {
  return {
    type: SET_CONTRIBUTION_MONEY,
  };
};

export const setProductAvailability = (product) => {
  return {
    type: SET_PRODUCT_AVAILABILITY,
    product,
  };
};

export const setResult = (bankPercent, month, total, percent, money) => {
  return {
    type: SET_RESULT,
    payload: {
      bank: bankPercent,
      month: month,
      totalMoney: total,
      percent: percent,
      money: money,
    },
  };
};

export const setClearResult = () => {
  return {
    type: SET_CLEAR_RESULT,
  };
};
