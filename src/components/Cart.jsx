import React from 'react'

const Cart = () => {
  return (
    <div className='border'>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Наименование</th>
            <th scope='col'>Кол-во</th>
            <th scope='col'>Цена</th>
            <th scope='col'>Удалить</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>555912, Холодильник с морозильником Bosch KGF39SQ3AR</td>
            <td>
              <input
                type='button'
                value='-'
                className='qtyminus'
                field='quantity'
              />
              <input type='text' name='quantity' value='1' className='qty' />
              <input
                type='button'
                value='+'
                className='qtyplus'
                field='quantity'
              />
            </td>
            <td>3008.4</td>
            <td>
              <button type='button' className='btn btn-danger'>
                Удалить
              </button>
            </td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>
              630145, Зимняя шина Nokian Hakkapeliitta 8 225/55R16 99T (шины)
            </td>
            <td>
              <input
                type='button'
                value='-'
                className='qtyminus'
                field='quantity'
              />
              <input type='text' name='quantity' value='4' className='qty' />
              <input
                type='button'
                value='+'
                className='qtyplus'
                field='quantity'
              />
            </td>
            {/* Result */}
            <td>1234.48</td>
            <td>
              <button type='button' className='btn btn-danger'>
                Удалить
              </button>
            </td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>
              <button type='button' className='btn btn-danger'>
                Удалить
              </button>
            </td>
          </tr>
          <tr>
            <th scope='row'>Итог</th>
            <td></td>
            <td></td>
            <td></td>
            {/* <!-- сумма --> */}
            <td>
              <div className='btn btn-warning'>4242.88</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Cart
