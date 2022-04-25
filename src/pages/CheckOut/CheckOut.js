import React from "react";
import "./CheckOut.css";

const CheckOut = () => {
  return (
    <div>
      <h1 className="check-out-heading">Consumer</h1>
      <div className="information-container">
        <div className="information">
          <form action="/">
            <div className="grid">
              <div className="grid-item" id="first-name">
                <label htmlFor="first-name">First name *</label>
                <input type="text" id="first-name" required />
              </div>

              <div className="grid-item" id="last-name">
                <label htmlFor="last-name">Last name *</label>
                <input type="text" id="last-name" required />
              </div>

              <div className="grid-item" id="email">
                <label htmlFor="Email">Email</label>
                <input type="text" id="Email" />
              </div>

              <div className="grid-item" id="phone-number">
                <label htmlFor="phone-number">Phone number</label>
                <input type="text" id="phone-number" />
              </div>

              <div className="grid-item" id="address">
                <label htmlFor="address">Address *</label>
                <input type="text" id="address" required />
              </div>

              <div className="grid-item" id="postal-code">
                <label htmlFor="postal-code">Postal code *</label>
                <input type="text" id="postal-code" required />
              </div>

              <div className="grid-item" id="country">
                <label htmlFor="country">Country *</label>
                <input type="text" id="country" required />
              </div>
            </div>

            <p className="payment-method">Payment Method</p>
            <div className="option">
              <input type="radio" id="banking" name="method" checked />
              <label htmlFor="banking">Online Banking</label>
            </div>
            <div className="option">
              <input type="radio" id="COD" name="method" />
              <label htmlFor="COD">Ship COD</label>
            </div>
            <div className="submit">
              <input type="submit" value={"Place Order"} id="submit-btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
