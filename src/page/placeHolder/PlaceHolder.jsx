import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../component/context/StoreContext";
import "./placeHolder.css"
const PlaceHolder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="State" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="County" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cart-total-detail">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()? 2 : 0}</p>
          </div>
          <hr />

          <div className="cart-total-detail">
            <p>Total</p>
            <p>${getTotalCartAmount() ? getTotalCartAmount()+2 : getTotalCartAmount()}</p>
          </div>
            <hr />
          </div>
          <button>
            PRODUCT TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceHolder;
