import React from 'react'

const Cart = React.memo(function Cart({store}) {
  console.log(store.productInfo)
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
          {store.productInfo.map((item, index) => {
            return (
              <tr key={item.name + index}>
                <th scope='row'>{index + 1}</th>
                <td>{item.name}</td>
                <td>
                  <button type='button' className='qtyminus'>
                    -
                  </button>
                  <input
                    type='text'
                    name='quantity'
                    value={item.qty}
                    className='qty'
                  />
                  <button type='button' className='qtyplus'>
                    +
                  </button>
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => {
                      console.log('Item')
                    }}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            )
          })}
          <tr>
            <th scope='row'>Итог</th>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className='btn btn-warning'>3008.4</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
})

export default Cart
