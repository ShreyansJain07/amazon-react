import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__title">
          <h3 style={{ paddingBottom: "5px" }}>
            Hello,{" "}
            {user
              ? user.email.charAt(0).toUpperCase() +
                user.email.substring(1, user.email.indexOf("@"))
              : "Guest"}
          </h3>
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
            <h2 style={{ paddingBottom: "15px" }}>Your cart is empty</h2>
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
