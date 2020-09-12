import React from 'react'
import {connect} from 'react-redux'
// import Address from './components/Address'
// import Bank from './components/Bank'
// import BankResult from './components/BankResult'
import Cart from './components/Cart'
// import Payment from './components/Payment'
import PersonalData from './components/PersonalData'
import ProductContainer from './components/Product'
// import TextDescriptions from './components/TextDescriptions/TextDescriptions'

function App({store}) {
  return (
    <div className='container'>
      <div className='row'>
        <h2>Калькулятор и шаблонизатор v.3</h2>
        <div className='col-12'>
          <PersonalData />
          <ProductContainer />
          <Cart store={store.product} />
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

const mapStateToProps = (store) => {
  return {store}
}

export default connect(mapStateToProps)(App)
