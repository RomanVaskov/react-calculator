import React from 'react'
import {useDispatch} from "react-redux";
import {setProductQuantityDec, setProductQuantityInc} from "../../redux/actions/productAC";

const CartItem = ({productInfo, onDeleteProduct}) => {
    const dispatch = useDispatch()
    const qtyProductInc = (qty) => {
        dispatch(setProductQuantityInc(qty))
    }
    const qtyProductDec = qty => {
        dispatch(setProductQuantityDec(qty))
    }
    return(
        <>
        {productInfo.map((item, index) => {
            return (
                <tr key={item.name + index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>
                        <button
                            type='button'
                            className='qtyminus'
                            onClick={() => qtyProductDec(item.qty)}>
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
                            className='qtyplus'
                            onClick={() => qtyProductInc(item.qty)}>
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
        </>)
}

export default CartItem