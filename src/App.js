import React from 'react'
// import Address from './components/Address'
// import Bank from './components/Bank'
// import BankResult from './components/BankResult'
import CartContainer from './components/Cart/Cart'
// import Payment from './components/Payment'
import PersonalData from './components/PersonalData'
import ProductContainer from './components/Product'
// import TextDescriptions from './components/TextDescriptions/TextDescriptions'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <h2>Калькулятор и шаблонизатор v.3</h2>
        <div className='col-12'>
          <PersonalData />
          <ProductContainer />
          <CartContainer />
          {/* <Bank /> */}
          {/* <Payment /> */}
          {/* <Address /> */}
        </div>
        {/* <BankResult /> */}
        {/* <TextDescriptions /> */}
      </div>
    </div>
  )
}

export default App
