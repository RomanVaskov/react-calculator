import React from "react";
import { useDispatch } from "react-redux";
import {
  setProductQuantityDec,
  setProductQuantityInc,
} from "../../redux/actions/productAction";

const CartItem = ({ productInfo, onDeleteProduct }) => {
  const dispatch = useDispatch();
  const increment = (id, qty) => {
    dispatch(setProductQuantityInc(id, qty));
  };
  const decrement = (id, qty) => {
    dispatch(setProductQuantityDec(id, qty));
  };
  return (
    <>
      {productInfo.map((item, index) => {
        return (
          <tr key={item.name + index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>
              <button
                type="button"
                className="qty-minus"
                onClick={() =>
                  item.qty === 1
                    ? onDeleteProduct(item.id)
                    : decrement(item.id, item.qty)
                }
              >
                -
              </button>
              <input
                onChange={(e) => e.target.value}
                type="text"
                name="quantity"
                value={item.qty}
                className="qty"
              />
              <button
                type="button"
                className="qty-plus"
                onClick={() => increment(item.id, item.qty)}
              >
                +
              </button>
            </td>
            <td>{item.price}</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  onDeleteProduct(item.id);
                }}
              >
                Удалить
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CartItem;
