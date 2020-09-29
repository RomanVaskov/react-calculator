import React from 'react'
import {useDispatch} from 'react-redux'
import {setProductDel} from '../../redux/actions/productAC'
import CartItem from "./CartItem";

const CartContainer = ({store}) => {
  let productInfo = store.productInfo
  const dispatch = useDispatch()

  const onDeleteProduct = (id) => {
    dispatch(setProductDel(id))
  }

  return <Cart productInfo={productInfo} onDeleteProduct={onDeleteProduct} />
}

export default CartContainer

const Cart = React.memo(function Cart({productInfo, onDeleteProduct}) {
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
          <CartItem productInfo={productInfo} onDeleteProduct={onDeleteProduct} />
          <tr>
            <th scope='row'>Итог</th>
            <td/>
            <td/>
            <td/>
            <td>
              <div className='btn btn-warning'>3008.4</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
})
