import React from "react";
import Bank from "./components/Bank/Bank";
import CartContainer from "./components/Cart/Cart";
import PersonalData from "./components/PersonalData";
import ProductContainer from "./components/Product";
import Address from "./components/Address";
import Payment from "./components/Payment";
import BankResult from "./components/BankResult";
import TextDescriptions from "./components/TextDescriptions/TextDescriptions";

function App() {
  return (
    <div className="container">
      <div className="row">
        <h2>Калькулятор и шаблонизатор v.3</h2>
        <div className="col-12">
          <PersonalData />
          <ProductContainer />
          <CartContainer />
          <Bank />
          <Payment />
          <Address />
        </div>
        <BankResult />
        <TextDescriptions />
      </div>
    </div>
  );
}

export default App;
