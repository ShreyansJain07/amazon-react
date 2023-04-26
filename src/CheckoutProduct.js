import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating,hideButton }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id,
        })
    }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" alt="" src={image} />
      <div className="checkoutProduct__info">
        <div className="content">
          <p className="checkoutProduct__title">{title}</p>
          <div className="checkoutProduct__price">
            <div style={{ float: "right" }}>
              <small>₹ </small>
              <strong>{price}</strong>
            </div>
          </div>
        </div>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
            {!hideButton&&(<button onClick={removeFromBasket} className="checkoutProduct__button">Remove from basket</button>)}
        
      </div>
    </div>
  );
};

export default CheckoutProduct;
