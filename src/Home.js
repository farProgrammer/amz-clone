import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0EvBHzDze6UCKV-QtFxPNQPHAr8bR_-HZcatLiCwnerFAIitQkjRVv03rL_okPDlQdGy9id_CgDtfWE8mp7kWEqlEKblmi9cGB_i056quS25gTwji1oXzlA&usqp=CAc"
          />
          <Product
            id="49538094"
            title="Kenwood KMM021 7QT Chef Titanium Kitchen Machine"
            price={659.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81tCWi0BusL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="SAMSUNG Galaxy Watch (46mm) SM-R800NZSAXAR (Bluetooth) - Silver (Renewed)"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61NO3aDVGRL._AC_UY218_.jpg"
          />
          <Product
            id="23445930"
            title="Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Glacier White"
            price={258.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51vuAEcgqvL._AC_UL320_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Sony X90J 65 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart Google TV with Dolby Vision HDR and Alexa Compatibility XR65X90J- 2021 Model"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/91KZbi-CbzL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
