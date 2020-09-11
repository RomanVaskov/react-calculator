import React from 'react'

const Product = () => {
  return (
    <div className='border'>
      <h5>Форма заполнения товаров</h5>
      <form>
        <div className='row'>
          <div className='col-6'>
            <input
              type='text'
              className='form-control'
              placeholder='Наименование товара'
            />
          </div>
          <div className='col'>
            <input type='text' className='form-control' placeholder='Цена' />
          </div>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='Кол-во'
              value='1'
            />
          </div>
          <div className='col'>
            <button type='button' className='btn btn-success' form-control>
              Добавить
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Product
