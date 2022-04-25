import React from "react";
import "./CartItem.css";
import { cartSelector } from "../../features/cart";
import { useDispatch, useSelector } from "react-redux";
import { add, minus, remove } from "../../features/cart";

const CartItem = (props) => {
  const cartItem = {
    img: props.img,
    name: props.name,
    gtin: 12341234,
    sku: 12341234,
  };
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="cart-item-container" id="cart-item-desktop">
        <div className="cart-item-description-container">
          <img src={cartItem.img} alt="product" />
          <div className="cart-item-description">
            <p>T-Shirt</p>
            <h1>Black T-Shirt</h1>
            <p id="code">Gtin code: {cartItem.gtin}</p>
            <p id="code">SKU: {cartItem.sku}</p>
          </div>
        </div>
        <div className="cost-per-item">$50</div>
        <div className="quantity">
          <p
            onClick={() => {
              dispatch(minus(cartItem.name));
            }}
          >
            -
          </p>
          <p id="quantity">{cart[cartItem.name]}</p>
          <p
            onClick={() => {
              dispatch(add(cartItem.name));
            }}
          >
            +
          </p>
        </div>
        <div className="total-cost">
          <p>${50 * cart[cartItem.name]}</p>
          <img
            src={require("../../img/GarbageBin.png")}
            alt="delete"
            onClick={() => {
              dispatch(remove(cartItem.name));
            }}
            id="remove"
          />
        </div>
      </div>
      <div className="cart-item-container" id="cart-item-mobile">
        <div className="cart-item-description-container">
          <img src={cartItem.img} alt="product" />
          <div className="cart-item-description">
            <p>T-Shirts</p>
            <h1>Name</h1>
            <div className="cost">
              <p>${50 * cart[cartItem.name]}</p>
              <div className="quantity">
                <p
                  onClick={() => {
                    dispatch(minus(cartItem.name));
                  }}
                >
                  -
                </p>
                <p id="quantity">{cart[cartItem.name]}</p>
                <p
                  onClick={() => {
                    dispatch(add(cartItem.name));
                  }}
                >
                  +
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="remove">
          <img
            src={require("../../img/GarbageBin.png")}
            alt="delete"
            onClick={() => {
              dispatch(remove(cartItem.name));
            }}
            id="remove"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItem;
