import React from 'react'

const CartItem = ({productInfo, onDeleteProduct}) => {
    return(
        <>
        {productInfo.map((item, index) => {
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