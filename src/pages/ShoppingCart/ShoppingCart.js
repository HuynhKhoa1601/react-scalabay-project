import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../features/cart";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import BlackTShirt from "../../img/Black-T-Shirt.png";
import PinkTShirt from "../../img/Pink-T-Shirt.png";
import WhiteTShirt from "../../img/White-T-Shirt.png";
import BlueTShirt from "../../img/Blue-T-Shirt.png";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const cart = useSelector(cartSelector);
  let cartIndex = ["BlackTShirt", "BlueTShirt", "PinkTShirt", "WhiteTShirt"];
  const cartIndexItem = {
    BlackTShirt,
    BlueTShirt,
    PinkTShirt,
    WhiteTShirt,
  };
  const filterCart = () => {
    cartIndex = cartIndex.filter((name) => cart[name] !== 0);
  };
  filterCart();
  const getTotal = () => {
    let res = 0;
    cartIndex.forEach((name) => {
      res += cart[name] * 50;
    });
    return res;
  };
  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart">
        <h1 className="shopping-cart-heading">Shopping Cart</h1>
        {cartIndex.length > 0 ? (
          cartIndex.map((name) => (
            <div className="shopping-cart-item">
              <CartItem img={cartIndexItem[name]} name={name} />
            </div>
          ))
        ) : (
          <p className="error">You Haven't Buy Anything Yet</p>
        )}
        <div className="notice">
          <p className="items-quantity">{cartIndex.length} items in cart</p>
          <p className="shopping-cart-total" id="desktop">
            ${getTotal()}
          </p>
        </div>
      </div>
      <div className="bill">
        <h1 className="bill-heading">Cart Details</h1>
        <div className="voucher">
          <p>Voucher</p>
          <p>+</p>
        </div>
        <div className="voucher-list">
          <p className="voucher-list-item">Free shipping - max $5</p>
          <p className="voucher-list-item">Membership - $20</p>
        </div>
        <div className="summary">
          <h1>Summary</h1>
          <div className="bill-items">
            <div className="bill-item">
              <p className="content">Total Amount:</p>
              <p className="money-count">{getTotal()}</p>
            </div>
            <div className="bill-item">
              <p className="content">Discount:</p>
              <p className="money-count">-$25</p>
            </div>
            <div className="bill-item">
              <p className="content">Shipping:</p>
              <p className="money-count">$15</p>
            </div>
            <div className="bill-item">
              <p className="content">Tax:</p>
              <p className="money-count">$19</p>
            </div>
            <div className="bill-footer">
              <div className="bill-item-total">
                <p className="content">Total:</p>
                <p className="money-count" id="money-count">
                  ${getTotal() + 9}
                </p>
              </div>
              <Link to="/check-out/payment" className="check-out-btn">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
