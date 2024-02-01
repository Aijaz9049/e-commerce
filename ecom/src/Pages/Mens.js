import React, { useState } from 'react'
import Mensdata from '../Data/Mensdata';
import './Mens.css'
import { useDispatch, useSelector } from "react-redux";
import { add } from './Reducer/Action';
import { Link } from 'react-router-dom';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Mens = ({ search }) => {

  const [data, setdata] = useState(Mensdata)
  const getdata = useSelector((state) => state.reducers.cards)
  console.log(getdata)
  const dispatch = useDispatch()

  let filteredata = data.filter((val) => val.title.toLowerCase().includes(search.toLowerCase())
  )

  function send(e) {
    dispatch(add(e))

  }

  const obj = {
    loop: true,
    nav: true,
    autoplay: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };


  return (
    <div className="body">
      <OwlCarousel className="owl-theme" {...obj}>
      <div className="item">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-Banner1_1_RZkAlBW.jpg?format=webp&w=1366&dpr=1.0"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_6_n614KTa.jpg?format=webp&w=1366&dpr=1.0"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/web-banner_2_QdZpDAO.jpg?format=webp&w=1366&dpr=1.0"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_darth-vader-sneakers_1_1.jpg?format=webp&w=1366&dpr=1.0"
            alt=""
          />
        </div>
      
      </OwlCarousel>

      {/* <br /> */}
      <div className="pr">

        <h1>Our Product</h1>
        <br />
      </div>
      <div className="main-body">
        {
          filteredata.map(function (val) {
            return (
              <div className="product-body" key={val.id}>
                <div className="img">
                  <img src={val.imgurl} />
                </div>
                <div className="title">
                  <p> {val.title}</p>
                  {/* <h4>{val.cname}</h4> */}

                </div>
                <div className="line"></div>

                {/* <div className="rate">
                  <img src={val.rating} alt="" />
                  <h5>(9 Review)</h5>

                </div> */}


                <div className="btnn">
                  <p><b>₹ {val.price} </b> </p>
                  {/* <button>Buy Now</button> */}
                  <button className='Add' onClick={() => send(val)} > <b>Add to Cart</b></button>
                </div>
                <div className="line2"></div>
              </div>
            )
          })
        }
      </div> <br />
      <div className="promoo">
      </div> <br />

      <div className="footer">
        <div className="info">
          <h3>CrossX.com</h3>

          <h2>  NEVER MISS OUT ON A MOMENT avec US </h2> <br />
          <div className="inf">
            <input className='mail' type="email" placeholder='Email Address' />
            <button className='sbutton'><h4>SUBSCRIBE</h4></button>

          </div>
        </div>
        <div className="smedia">
          <h3>Follow Us</h3>
          <div className="socialm">
            <Link to="https://www.instagram.com/ns1.khanaijaz"><i className="fa-brands fa-instagram"></i> </Link>
            <a href="https://www.instagram.com/ns1.khanaijaz"><i className="fa-brands fa-facebook"></i> </a>
            <a href=""><i className="fa-brands fa-square-x-twitter"></i> </a>
            <a href="https://www.threads.net/ns1.khanaijaz"><i className="fa-brands fa-square-threads"></i> </a>
            <a href=""><i className="fa-brands fa-youtube"></i> </a> <br />
          </div>
          <div className="address">
            <p>Cross X (India) Private Limited All Rights Reserved <br /> 2nd & 3rd Floor, Birla Centurion | Pandurang Budhkar Marg | Worli <br /> Mumbai 400030 | Maharashtra | India <br /><br /> Forward to a friend | Don't want to recieve this email? <span><Link to="/"> <b>Unsubscribe here</b></Link></span> </p>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Mens