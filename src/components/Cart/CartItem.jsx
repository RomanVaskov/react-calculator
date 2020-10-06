import React from 'react'
import {useDispatch} from 'react-redux'
import {
  setProductQuantityDec,
  setProductQuantityInc,
} from '../../redux/actions/productAC'

const CartItem = ({productInfo, onDeleteProduct}) => {
  const dispatch = useDispatch()
  const increment = (id, qty, total) => {
    dispatch(setProductQuantityInc(id, qty, total))
  }
  const decrement = (id, qty, total) => {
    dispatch(setProductQuantityDec(id, qty, total))
  }
  return (
    <>
      {productInfo.map((item, index) => {
        return (
          <tr key={item.name + index}>
            <th scope='row'>{index + 1}</th>
            <td>{item.name}</td>
            <td>
              <button
                type='button'
                className='qty-minus'
                onClick={() => decrement(item.id, item.qty, item.total)}
              >
                -
              </button>
              <input
                onChange={(e) => e.target.value}
                type='text'
                name='quantity'
                value={item.qty}
                className='qty'
              />
              <button
                type='button'
                className='qty-plus'
                onClick={() => increment(item.id, item.qty, item.total)}
              >
                +
              </button>
            </td>
            <td>{item.price}</td>
            <td>
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => {
                  onDeleteProduct(item.id)
                }}
              >
                Удалить
              </button>
            </td>
          </tr>
        )
      })}
    </>
  )
}

export default CartItem
