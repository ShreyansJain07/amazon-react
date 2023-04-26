import React from "react";
import "./ProductPage.css";
import PlaceIcon from "@mui/icons-material/Place";
import data from "./data";
import { useStateValue } from "./StateProvider";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  let date = new Date();
  let day = date.getDate();
  let { id } = useParams();
  console.log(id);
  let weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  let r = weekdays[date.getDay()];
  let monthArr = new Array(12);
  monthArr[0] = "January";
  monthArr[1] = "February";
  monthArr[2] = "March";
  monthArr[3] = "April";
  monthArr[4] = "May";
  monthArr[5] = "June";
  monthArr[6] = "July";
  monthArr[7] = "August";
  monthArr[8] = "September";
  monthArr[9] = "October";
  monthArr[10] = "November";
  monthArr[11] = "December";
  let month = monthArr[date.getMonth()];
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: data[id].id,
        title: data[id].title,
        image: data[id].image,
        price: data[id].price,
        rating: data[id].rating,
      },
    });
  };
  return (
    <div>
      <div className="product__page">
        <div className="first__div">
          <img className="product__img" src={data[id].image} alt="img"></img>
        </div>
        <div className="second__div">
          <div className="sd__title">{data[id].title}</div>
          <div className="product__ratingSD">
            {Array(data[0].rating)
              .fill()
              .map((_) => (
                <p>🌟</p>
              ))}
            <span style={{paddingLeft:"40px",fontSize:"15px",color:"#007185"}}>4,182 ratings | 123 reviews</span>
          </div>
          <div className="sd__price">
            <div>
              ₹<span className="td__price">{data[id].price}</span>.00
            </div>
            <div
              style={{
                color: "#CC0C39",
                fontWeight: "500",
                paddingTop: "10px",
              }}
            >
              Deal of the Day
            </div>
            <div style={{ paddingTop: "10px" }}>Inclusive of all taxes</div>
          </div>
          <div className="sd__icons">
            <div className="test">
              <img
                className="sd__icons_img"
                alt="icon"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
              />
              <p style={{ paddingTop: "10px" }}>Free Delivery</p>
            </div>

            <div className="test">
              <img
                className="sd__icons_img"
                alt="icon"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png"
              />
              <p style={{ paddingTop: "10px" }}>Safe Payments</p>
            </div>
            <div className="test">
              <img
                className="sd__icons_img"
                alt="icon"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"
              />
              <p style={{ paddingTop: "10px" }}>Top Brands</p>
            </div>
            <div className="test">
              <img
                className="sd__icons_img"
                alt="icon"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"
              />
              <p style={{ paddingTop: "10px" }}>Pay on Delivery</p>
            </div>
            <div className="test">
              <img
                className="sd__icons_img"
                alt="icon"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
              />
              <p style={{ paddingTop: "10px" }}>Returnable</p>
            </div>
          </div>
        </div>
        <div className="third__div">
          <div>
            ₹<span className="td__price">{data[id].price}</span>.00
          </div>
          <div style={{ paddingTop: "20px" }}>
            FREE delivery{" "}
            <span style={{ fontWeight: "bold" }}>
              {r} , {day + 3} {month}
            </span>{" "}
          </div>
          <div style={{ paddingTop: "20px" }}>
            Or fastest delivery{" "}
            <span style={{ fontWeight: "bold" }}>Tomorrow 10 AM - 2 PM.</span>{" "}
            Order within 6 hrs 8 mins.
          </div>
          <div style={{ paddingTop: "20px" }}>
            <PlaceIcon style={{ position: "relative", top: "5px" }} /> Deliver
            to{" "}
            {user ? user.email.substring(0, user.email.indexOf("@")) : "Guest"}{" "}
            {"-"} Mumbai 400092
          </div>
          <div
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              color: "green",
              fontWeight: "500",
            }}
          >
            In Stock
          </div>
          <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            Sold by RetailEZ Pvt Ltd and Fulfilled by Amazon.
          </div>
          <button className="td__button" onClick={addToBasket}>
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
