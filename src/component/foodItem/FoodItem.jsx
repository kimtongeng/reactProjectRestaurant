import React, { useContext} from 'react'
import "./foodItem.css"
import { assets } from '../../assets/assets/assets'
import { StoreContext } from '../context/StoreContext';
const FoodItem = ({id,name,description,price,image}) => {
  const {cartItem,
    setCartItem,
    addToCart,
    removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {
              !cartItem[id] ?
                <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" /> :
                <div className='food-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItem[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <div className="food-item-description">{description}</div>
            <div className="food-item-price">${price}</div>
        </div>
    </div>
  )
}

export default FoodItem