import React from 'react'

const BankResult = () => {
  return (
    <div className='col-12'>
      <div className='border'>
        <h5>Расчёты</h5>
        <div className='result'>
          <div className='result-budget_month'>
            <span className='title'>Ежемесячный платеж</span>
            <input
              type='text'
              className='result-total budget_month-value'
              placeholder='0'
              disabled
              id='money-month'
            />
          </div>
          <div className='result-budget_day'>
            <span className='title'>Итоговая сумма</span>
            <input
              type='text'
              className='result-total budget_day-value'
              placeholder='0'
              disabled
              id='result-total'
            />
          </div>
          <div className='result-expenses_month'>
            <span className='title'>Переплата</span>
            <input
              type='text'
              className='result-total expenses_month-value'
              placeholder='0'
              disabled
              id='overpayment'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankResult
