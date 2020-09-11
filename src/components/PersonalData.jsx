import React from 'react'

const PersonalData = () => {
  return (
    <div className='border'>
      <h5>Поле для ввода телефона и №заказа</h5>
      <form>
        <div className='row'>
          <div className='col-6'>
            <input
              type='text'
              className='form-control'
              placeholder='Заказ'
              value='ЗАКАЗ'
            />
          </div>
          <div className='col-6'>
            <input
              type='text'
              className='form-control'
              placeholder='Телефон'
              value='375'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default PersonalData
