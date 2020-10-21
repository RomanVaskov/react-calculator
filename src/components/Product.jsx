import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductName,
  setProductPrice,
  setProductQuantity,
  setProductInfo,
} from "../redux/actions/productAction";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const product = useSelector(({ product }) => product.name);
  const price = useSelector(({ product }) => product.price);
  const quantity = useSelector(({ product }) => product.qty);

  const onChangeProduct = (name) => dispatch(setProductName(name));
  const onChangePrice = (price) => dispatch(setProductPrice(price));
  const onChangeQuantity = (qty) => dispatch(setProductQuantity(qty));
  const onClick = (name, price, qty) => {
    dispatch(setProductInfo(name, price, qty));
  };

  return (
    <div className="border">
      <h5>Форма заполнения товаров</h5>
      <div className="row">
        <div className="col-6">
          <input
            onChange={(e) => onChangeProduct(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Наименование товара"
            value={product}
          />
        </div>
        <div className="col">
          <input
            onChange={(e) => onChangePrice(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Цена"
            value={price}
          />
        </div>
        <div className="col">
          <input
            onChange={(e) => onChangeQuantity(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Кол-во"
            value={quantity}
          />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success"
            form-control="true"
            onClick={() => {
              onClick(product, price, quantity);
            }}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
