import React from 'react'

const Payment = () => {
  return (
    <div className='border'>
      <h5>Форма способа оплаты и доставки</h5>
      <div className='row'>
        <div className='col'>
          <h4>Способ оплаты</h4>
          <div className='mb-3'>
            <select className='custom-select' id='bank-select'>
              <option value='Наличные'>Наличные</option>
              <option value='Обычная банковская карта'>
                Обычная банковская карта
              </option>
              <option value='Карта рассрочки'>Карта рассрочки</option>
              <option value='ЕРИП'>ЕРИП</option>
              <option value='WEBPAY'>Оплата онлайн (WEBPAY)</option>
              <option value='без первого взноса'>
                без первоначальго взноса
              </option>
            </select>
          </div>
        </div>
        <div className='col'>
          <h4>Дата</h4>
          <div className='mb-3'>
            {/* <!-- Вручную, либо если можно в виде календаря и запиливать данные в шаблон --> */}
            <div className='mab-5'>
              <input
                type='text'
                className='form-control'
                placeholder='Дата'
                value='04'
                id=''
              />
            </div>
            <div className='mab-5'>
              <input
                type='text'
                className='form-control'
                placeholder='Месяц'
                value='09'
                id=''
              />
            </div>
            <div className='mab-5'>
              <input
                type='text'
                className='form-control'
                placeholder='Год'
                value='2020'
                id=''
              />
            </div>
          </div>
        </div>
        <div className='col'>
          <h4>Время</h4>
          <div className='mb-3'>
            {/* <!-- Время С и ПО --> */}
            <div className='mab-5'>
              <input
                type='text'
                className='form-control'
                placeholder='С'
                value='9'
                id=''
              />
            </div>
            <div className='mab-5'>
              <input
                type='text'
                className='form-control'
                placeholder='По'
                value='21'
                id=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
