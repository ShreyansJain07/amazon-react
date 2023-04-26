import React, { useState,useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, Navigate } from "react-router-dom";
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import axios from "./axios"
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {db} from "./firebase"

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate ();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const[clientSecret,setClientSecret] = useState(true);

  useEffect(() => {
  const getClientSecret = async () =>{
    const response = await axios({
        method:'post',
        url:`/payments/create?total=${getBasketTotal(basket)*100}`
    })
    setClientSecret(response.data.clientSecret);
  }
  getClientSecret();
  }, [basket])

  console.log("the secret is >>>> ",clientSecret);
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
              card:elements.getElement(CardElement)
          }
      }).then(({paymentIntent})=>{

          db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket,
            amount:paymentIntent.amount,
            created:paymentIntent.created
          })

          setSucceeded(true)
          setError(null)
          setProcessing(false)
          dispatch({
            type:'EMPTY_BASKET'
          })
          navigate('/orders', { replace: true });
      })

  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__conatainer">
        <h1>
          Checkout ({" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/checkout"
          >
            {basket.length} items
          </Link>
          )
        </h1>
      </div>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Mumbai , India</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery </h3>
          </div>
          <div className="payment__items">
            {basket.map((product) => (
              <CheckoutProduct
                id={product.id}
                title={product.title}
                rating={product.rating}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p style={{paddingTop:"5px"}}>
                        Subtotal ({basket?.length} items) :{" "}
                        <strong>{value}</strong>
                      </p>
                      
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button className="buy__button" style={{marginTop:"5px"}} disabled={processing || disabled || succeeded}>
                <span>{processing?"Processing":"Buy now"}</span>
                </button>
              </div>
              {error&&<div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
