import {
  SET_BANK,
  SET_CREDIT_MONTH,
  SET_TOTAL_MONEY,
  SET_CONTRIBUTION_PERCENT,
  SET_CONTRIBUTION_MONEY,
  SET_PRODUCT_AVAILABILITY,
  SET_RESULT,
  SET_CLEAR_RESULT,
} from "../actions/bankAction";

const initialState = {
  bankData: {
    name: [
      { bank: "Идеябанк", percent: 13.5 },
      { bank: "Приорбанк", percent: 24 },
      { bank: "БелВЭБ", percent: 29.9 },
      { bank: "Паритетбанк", percent: 23.5 },
      { bank: "Белагропромбанк", percent: 18.41 },
      { bank: "ВТБ", percent: 29.9 },
    ],
    month: [3, 6, 12, 18, 24, 36],
    productAvailability: ["Товар в наличии", "По приходу"],
  },
  totalMoney: 0,
  contributionPercent: 0,
  contributionMoney: 0,
  bankPercent: 13.5,
  bankMonth: 3,
  bankProduct: "Товар в наличии",
  result: null,
  payResult: {
    monthPay: 0,
    totalMoney: 0,
    overpayment: 0,
  },
};

const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        result: action.payload,
        payResult: payResult(action.payload),
      };
    case SET_CLEAR_RESULT:
      return {
        ...state,
        result: null,
        payResult: {
          monthPay: 0,
          totalMoney: 0,
          overpayment: 0,
        },
      };
    case SET_TOTAL_MONEY:
      return { ...state, totalMoney: action.total };
    case SET_CONTRIBUTION_PERCENT:
      return { ...state, contributionPercent: action.percent };
    case SET_CONTRIBUTION_MONEY:
      return {
        ...state,
        contributionMoney:
          (+state.contributionPercent * state.totalMoney) / 100,
      };
    case SET_PRODUCT_AVAILABILITY:
      return { ...state, bankProduct: action.product };
    case SET_CREDIT_MONTH:
      return { ...state, bankMonth: action.month };
    case SET_BANK:
      return { ...state, bankPercent: action.percent };
    default:
      return state;
  }
};

const payResult = (data) => {
  let { bank, month, totalMoney, percent, money } = data;

  let bc = 0; //БС = 0
  let tip = 0; //ТИП = 0
  let pc = 0; //ПС = -(СУММА - Сумма ПВ (число))

  let stavka = +bank / 100 / 12; //СТАВКА
  //let c = (totalMoney * percent) / 100 //Результат процента от суммы кредита (число)
  let d = Math.pow(1 + stavka, +month); // Возведение в степень СТАВКА

  pc = -(totalMoney - money);

  let a = -stavka * (pc * d + bc); //Верхняя часть уравнения
  let b = (1 + stavka * tip) * (d - 1); //Нижняя часть уравнения

  //Функция для округления дробных чисел к сотым. Т.е. такого вида - 1.05
  function decimalAdjust(type, value, exp) {
    // Если степень не определена, либо равна нулю...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Если значение не является числом, либо степень не является целым числом...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // Сдвиг разрядов
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    // Обратный сдвиг
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }

  //Десятичное округление к ближайшему
  if (!Math.round10) {
    Math.round10 = function (value, exp) {
      return decimalAdjust("round", value, exp);
    };
  }

  //percentResult.value = Math.round(money)
  let monthPay = Math.round10(a / b, -2);
  let totalMoneyOver = Math.round10(monthPay * month + money, -2);
  let overpayment = Math.round10(totalMoneyOver - totalMoney, -2);

  return {
    monthPay: monthPay,
    totalMoney: totalMoneyOver,
    overpayment: overpayment,
  };
};

export default bankReducer;
