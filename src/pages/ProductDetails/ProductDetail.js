import React from "react";
import BlackTShirt from "../../img/Black-T-Shirt.png";
import PinkTShirt from "../../img/Pink-T-Shirt.png";
import WhiteTShirt from "../../img/White-T-Shirt.png";
import BlueTShirt from "../../img/Blue-T-Shirt.png";
import "./ProductDetail.css";
import { useSelector } from "react-redux";
import { imgSelector } from "../../features/img.js";
import { cartSelector } from "../../features/cart";
import { useDispatch } from "react-redux";
import { add, minus } from "../../features/cart.js";

const ProductDetail = (props) => {
  const productName = useSelector(imgSelector);
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();
  const img = {
    BlackTShirt: BlackTShirt,
    PinkTShirt: PinkTShirt,
    WhiteTShirt: WhiteTShirt,
    BlueTShirt: BlueTShirt,
  };
  return (
    <div className="product-details-container">
      <div className="product-details-main">
        <div className="product-details-categories">
          <p id="category-details">Category</p>
          <p id="symbol">{">"}</p>
          <p id="T-shirt">T-Shirts</p>
        </div>
        <div className="product-details-tags">
          <img src={img[productName]} alt="products" />
          <div className="tags-para">
            <p className="tags-para-origin">Owen</p>
            <p className="tags-para-name">Black T-Shirt</p>
            <p className="tags-para-price">$50</p>
            <p className="tags-para-description">
              Open repair of infrarenal aortic aneurysm or dissection, plus
              repair of associated arterial trauma, following unsuccessful
              endovascular repair; aorto-bi-iliac prosthesis.
            </p>
            <div className="to-cart">
              <div className="counter">
                <p
                  onClick={() => {
                    dispatch(minus(productName));
                  }}
                >
                  -
                </p>
                <p id="counter">{cart[productName]}</p>
                <p
                  onClick={() => {
                    dispatch(add(productName));
                  }}
                >
                  +
                </p>
              </div>
              <div
                className="add-to-cart"
                onClick={() => {
                  dispatch(add(productName));
                }}
              >
                Add To Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
