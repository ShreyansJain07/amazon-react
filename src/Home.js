import React from "react";
import "./Home.css";
import Product from "./Product";
import data from "./data"
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="home-pic"
          src="https://m.media-amazon.com/images/I/61db+epJ+vL._SX3000_.jpg"
        />
        <div className="home__row">
          <Product
            id="0"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={489}
            rating={4}
            image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            id="1"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={5999}
            rating={3}
            image="https://m.media-amazon.com/images/I/718Bxs69wUL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="2"
            title="Fastrack Reflex 3.0 Digital Black Dial Unisex-Adult Watch-SWD90067PP03A"
            price={2995}
            rating={2}
            image="https://m.media-amazon.com/images/I/61u2Rr7tBRL._UX679_.jpg"
          />
          <Product
            id="3"
            title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
            price={3449}
            rating={4}
            image="https://m.media-amazon.com/images/I/41FgiLFNhFL.jpg"
          />
          <Product
            id="4"
            title="Apple 2022 11-inch iPad Pro (Wi-Fi, 256GB) - Space Grey (4th Generation)"
            price={84900}
            rating={4}
            image="https://m.media-amazon.com/images/I/81gC7frRJyL._SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="Samsung 123.9cm 49inch Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate - LC49G95TSSWXXL"
            price={13500}
            rating={3}
            image="https://m.media-amazon.com/images/I/51+iB9+5HKL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
