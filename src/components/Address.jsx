import React from 'react'

const Address = () => {
  return (
    <div className='border'>
      <h5>Форма заполнения адреса</h5>
      <form>
        <div className='row center'>
          <div className='form-check mr-50 mal-20'>
            <input
              className='form-check-input'
              type='radio'
              name='exampleRadios'
              id='exampleRadios1'
              value='АДРЕС'
              checked
            />
            <label className='form-check-label' for='exampleRadios1'>
              Адрес
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='exampleRadios'
              id='exampleRadios2'
              value='option2'
            />
            <div>
              <select className='custom-select' id='pvz-select'>
                {/* <!-- Я хз как здесь правильно сделать чтобы запрогроммировать можно было , при выборе чего-либо. Должно сработать подставить в шаблон (адрес как один valuе1) и второй график в таком виде (value2) г. Барановичи, ул. Брестская, 226/4 (ТЦ «Легион») 
                      График работы 
                      пн-пт: 10:00-20:00,
                      сб-вс: 10:00-19:00.--> */}
                <option value='13.5'>ПВЗ Гомель</option>
                <option value='24'>ПВЗС Тростенецкая</option>
                <option value='29.9'>ПВЗ Минск Уманская</option>
              </select>
              {/* <!-- <label className="form-check-label" for="exampleRadios2">ПВЗ</label>--> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Address
