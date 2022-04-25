import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { update } from "../../features/img";
import { useDispatch } from "react-redux";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="card-container">
      <Link
        to="/product-details"
        className="card"
        onClick={() => {
          dispatch(update(props.name));
          console.log("dispatch called");
        }}
      >
        <img src={props.img} alt="product" />
        <p className="category">Category</p>
        <h1 className="name">Black T-shirt</h1>
        <div className="pricing-section">
          <div className="discription">
            <p>Short-sleeves, freesize</p>
            <p>Owen</p>
          </div>
          <h1 className="price">$50</h1>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
