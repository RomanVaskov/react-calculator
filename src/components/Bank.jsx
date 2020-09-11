import React from 'react'

const Bank = () => {
  return (
    <div className='border'>
      <h5>Форма заполнения банка</h5>
      <form>
        <div className='row'>
          <div className='col'>
            <h4>Банк</h4>
            <div className='mb-3'>
              <select className='custom-select' id='bank-select'>
                <option value='13.5'>Идеябанк</option>
                <option value='24'>Приорбанк</option>
                <option value='29.9'>БелВЭБ</option>
                <option value='23.5'>Паритетбанк</option>
                <option value='18.41'>Белагропромбанк</option>
                <option value='29.9'>ВТБ</option>
              </select>
            </div>
          </div>
          <div className='col'>
            <h4>Срок</h4>
            <div className='mb-3'>
              <select className='custom-select' id='month-select'>
                <option value='3'>3</option>
                <option value='6'>6</option>
                <option value='12'>12</option>
                <option value='18'>18</option>
                <option value='24'>24</option>
                <option value='36' selected>
                  36
                </option>
              </select>
            </div>
          </div>
          <div className='col'>
            <h4>Сумма, BYN</h4>
            <div className='mb-3'>
              {/* <!-- Подтягивает с таблицы итоговую сумму --> */}
              <input
                type='text'
                className='form-control'
                placeholder='Сумма'
                value='4242.88'
                id='amount'
                disabled
              />
            </div>
          </div>
          <div className='col'>
            <h4>ПВ, %</h4>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='ПВ, %'
                id='percent'
                value='20'
              />
            </div>
          </div>
          <div className='col'>
            <h4>ПВ, BYN</h4>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='переведен в деньги'
                id='percent-result'
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <button type='button' className='btn btn-success'>
              Рассчитать
            </button>
            <button type='button' className='btn btn-danger'>
              Сбросить
            </button>
          </div>
        </div>
        <div className='col'>
          <h4>Документы</h4>
          <div className='mb-3'>
            {/* <!-- Данный селект подставляется в шаблон. Если товар не на складе то вводит "Отправим доки по приходу", по умолчанию пусто --> */}
            <select className='custom-select' id='doc-select'>
              <option value=''>Товар в наличии</option>
              <option value='Отправим документы по приходу'>По приходу</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Bank
