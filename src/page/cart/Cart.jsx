import React, { useContext } from 'react'
import { StoreContext } from '../../component/context/StoreContext'
import "./cart.css";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate = useNavigate();
  const{food_list,cartItem,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          

        </div>
        <br />
        <hr />
        {
          food_list.map((item,index)=>{
            if(cartItem[item._id]>0){
              return (
                <>
                  <div className="cart-item-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>{item.price*cartItem[item._id]}</p>
                    <p className='cross' onClick={()=>removeFromCart(item._id)}>x</p>
  
                  </div>
                  <hr />
                </>
              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
        
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
        <button onClick={()=>navigate("/place")}>PRODUCT TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Prom'/>
              <button >Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Cart