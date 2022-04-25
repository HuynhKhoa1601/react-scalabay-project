import React, { Component } from "react";
import BlackTShirt from "../../img/Black-T-Shirt.png";
import PinkTShirt from "../../img/Pink-T-Shirt.png";
import WhiteTShirt from "../../img/White-T-Shirt.png";
import BlueTShirt from "../../img/Blue-T-Shirt.png";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductMenu.css";

class ProductMenu extends Component {
  state = {
    img: [BlueTShirt, WhiteTShirt, PinkTShirt, BlackTShirt],
    imgName: ["BlueTShirt", "WhiteTShirt", "PinkTShirt", "BlackTShirt"],
  };
  render() {
    return (
      <div className="menu-container">
        <div className="menu">
          <div className="product-menu">
            <h1>Product Menu (23)</h1>
            <p>T-shirt</p>
          </div>
          <div className="grid-container" id="desktop">
            {[1, 2].map((time) =>
              this.state.img.map((item, id) => (
                <div className="grid-item">
                  <ProductCard img={item} name={this.state.imgName[id]} />
                </div>
              ))
            )}
          </div>
          <div className="grid-container" id="mobile">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((time) => (
              <ProductCard img={BlackTShirt} name={"BlackTShirt"} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductMenu;
