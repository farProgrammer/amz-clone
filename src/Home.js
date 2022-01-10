import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"

          src="https://assets.pandaily.com/uploads/2020/06/online-shopping-apps.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Javascript mastery book helpful for interview preparation"
            price={48.96}
            rating={5}
            image="https://sp.yimg.com/ib/th?id=OP.4rb2NVvpKmjPjg474C474&o=5&pid=21.1&bw=0&bc=FFFFFF&w=174&h=174"
          />
          <Product
            id="49538094"
            title="Floral Pointelle A-Line Dress"
            price={659.0}
            rating={4}
            image="https://image.s5a.com/is/image/saks/0400014786970_BLACK?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0"
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
            title="NK+IVY Imani 3-Piece King/California King Comforter Set in Gray"
            price={179.99}
            rating={5}
            image="https://b3h2.scene7.com/is/image/BedBathandBeyond/2020-05-22-01-23_86569993953?$imagePLP$&wid=363&hei=363"
          />
          <Product
            id="3254354345"
            title="Amazon Brand – Rivet Cove Mid-Century Modern Tufted Leather Loveseat Sofa, 56'W, Caramel"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/8199jR9H1LL._AC_SY200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="DAWEI 3D Luxury Damask Pearl Powder Non-Woven Wallpaper Roll for Living Room Red Purple Color 1.73'W x 32.8'L"
            price={38.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/61paH3Mr2kL._AC_SY355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
