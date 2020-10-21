import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductDel,
  setTotalPrice,
} from "../../redux/actions/productAction";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const productInfo = useSelector(({ product }) => product.productInfo);
  const total = useSelector(({ product }) => product.total);
  const onDeleteProduct = (id) => dispatch(setProductDel(id));
  const totalProductPrice = () => dispatch(setTotalPrice());

  React.useEffect(() => {
    totalProductPrice();
  }, [productInfo, totalProductPrice]);

  return (
    <Cart
      productInfo={productInfo}
      onDeleteProduct={onDeleteProduct}
      total={total}
    />
  );
};
export default CartContainer;

const Cart = React.memo(function Cart({ productInfo, onDeleteProduct, total }) {
  return (
    <div className="border">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Наименование</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Цена</th>
            <th scope="col">Удалить</th>
          </tr>
        </thead>
        <tbody>
          <CartItem
            productInfo={productInfo}
            onDeleteProduct={onDeleteProduct}
          />
          <tr>
            <th scope="row">Итог</th>
            <td />
            <td />
            <td />
            <td>
              <div className="btn btn-warning">{total}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});
