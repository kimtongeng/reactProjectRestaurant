import React, { createContext, useEffect, useState } from 'react'
import { food_list } from '../../assets/assets/assets';

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {

  const [cartItem,setCartItem] = useState({});

  function addToCart(id){
    if(!cartItem[id]){
      setCartItem((perv)=>({...perv,[id]:1}));
    }
    else{
      setCartItem(perv=>({...perv,[id]:perv[id]+1}));
    }
  }
  function removeFromCart(id){
    setCartItem(perv=>({...perv,[id]:perv[id]-1}));
  }
  function getTotalCartAmount(){
    let total = 0;
    for(let item in cartItem){
      if(cartItem[item]>0){
        let food = food_list.find((pro)=>pro._id===item);
        total += food.price * cartItem[item];
      }
    }
    return total;
  }
  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  }
  
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider