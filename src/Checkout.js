import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__title">
          <h2>Shopping Cart</h2>
        </div>
        {basket.length !== 0 ? (
          <>
            {basket.map((product) => (
              <CheckoutProduct
                id={product.id}
                title={product.title}
                rating={product.rating}
                price={product.price}
                image={product.image}
              />
            ))}
          </>
        ) : (
          <div className="empty_cart">
            <h2>Your cart is empty</h2>
            <p>
              Your shopping cart is waiting. Give it purpose – fill it with
              groceries, clothing, household supplies, electronics and more.
              Continue shopping on the Amazon.in homepage, learn about today's
              deals, or visit your Wish List.
            </p>
          </div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
