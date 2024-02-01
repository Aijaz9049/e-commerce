
import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

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
    <div className="main-home">
    <OwlCarousel className="owl-theme" {...obj}>
    <div className="item">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_banner_copy.jpg?format=webp&w=1366&dpr=1.0"
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
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_6_n614KTa.jpg?format=webp&w=1366&dpr=1.0"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/web-banner_5.jpg?format=webp&w=1366&dpr=1.0"
            alt=""
          />
        </div>
      </OwlCarousel>

      <div className="prommo-1">
        <img src="https://www.beyoung.in/api/catalog/homepage-5-dec/new-desktop/free-shipping-desktop-view.jpg" alt="" />
      </div> <br />
      <h1>TRENDING CATEGORIES</h1>
      <br />
      <div className="category-home">
        <div className='img01'>
          <Link to= "/Mens"><img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/11_1_M2GAp04.jpg?format=webp&w=480&dpr=1.0" alt="" /> </Link>
        </div>
        <div className='img02'>
        <Link to= "/Women"><img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Big_Tile_1_DjWLgVr.jpg?format=webp&w=480&dpr=1.0" alt="" /> </Link>
        </div>
        <div className='img03'>
        <Link to= "/Kids"><img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Website-tile1_iCn5C4m.jpg?format=webp&w=480&dpr=1.0" alt="" /> </Link>
        </div>
      </div> <br />
      <div className="prom">
        <img src="https://images.bewakoof.com/uploads/grid/app/desktop-strip-rm--1--1706453631.jpg" alt="" />
      </div> 
      <br />
      <h1>Design of the week</h1>
      <div className="promo3">
      <Link to= "/Mens"> <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men--24--1706600019.jpg" alt="" /> </Link>
      <Link to= "/Women"> <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women--24--1706600018.jpg" alt="" /> </Link>
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

export default Home









// import React, { useState } from 'react'
// import Data from "../Data/Data"
// import './Home.css';
// import { useDispatch, useSelector } from "react-redux";
// import { add } from './Reducer/Action';
// import { Link } from 'react-router-dom';

// const Home = ({search ,check,change,theme}) => {
  
//   const [data, setdata] = useState(Data)
//   const getdata = useSelector((state) => state.reducers.cards)
//   console.log(getdata)
//   const dispatch = useDispatch()
  
//   let filteredata = data.filter((val)=>val.title.toLowerCase().includes(search.toLowerCase()))

//   function send(e) {
//     dispatch(add(e))

//   }


//   return (
//     <div className={theme.palette.mode=== 'dark' ? 'd' : 'dd'}>
//       <div className="c">
//       </div>
        
//         <br />
//         <div className="pr">

//         <h1>Our Product</h1>
//         <br />
//         </div>
//       <div className={theme.palette.mode=== 'dark' ? 'grid' : 'grid1'}>
//         {
//           filteredata.map(function (val) {
//             return (
//               <div className={theme.palette.mode=== 'dark' ? 'card' : 'card1'} key={val.id}>
//                 <div className="img">
//                   <img src={val.imgurl} />
//                 </div>
//                 <div className={theme.palette.mode=== 'dark' ? 'title' : 'title1'}>
//                   <p> {val.title}</p>
//                   <h4>{val.cname}</h4>

//                 </div>

//                 <div className="rate">
//                   <img src={val.rating} alt="" />
//                   <h5>(9 Review)</h5>

//                 </div>


//                 <div className="btn">
//                   <p><b>₹ {val.price}.00 </b> </p>
//                   {/* <button>Buy Now</button> */}
//                   <button className='b' onClick={() => send(val)} > <b>Add to Cart</b></button>
//                 </div>
//               </div>
//             )
//           })
//         }
//       </div> <br />
//       <div className="promo">
//       </div> <br />

//       <div className="footer">
//         <div className="info">
//           <br />
//           <h3>CrossX.com</h3>
          
//             <h2>  NEVER MISS OUT ON A MOMENT avec US </h2> <br />
//             <div className="inf">
//           <input className='mail' type="email" placeholder='Email Address' />
//           <button className='sbutton'><h4>SUBSCRIBE</h4></button>

//             </div>
//         </div>
//         <div className="smedia">
//           <h3>Follow Us</h3> 
//           <div className="socialm">
//          <Link to="https://www.instagram.com/ns1.khanaijaz"><i className="fa-brands fa-instagram"></i> </Link>
//           <a href="https://www.instagram.com/ns1.khanaijaz"><i className="fa-brands fa-facebook"></i> </a>
//           <a href=""><i className="fa-brands fa-square-x-twitter"></i> </a>
//           <a href="https://www.threads.net/ns1.khanaijaz"><i className="fa-brands fa-square-threads"></i> </a>
//           <a href=""><i className="fa-brands fa-youtube"></i> </a> <br />
//           </div>
//           <div className="address">
//             <p>Cross X (India) Private Limited All Rights Reserved <br /> 2nd & 3rd Floor, Birla Centurion | Pandurang Budhkar Marg | Worli <br /> Mumbai 400030 | Maharashtra | India <br /><br /> Forward to a friend | Don't want to recieve this email? <span><Link to="/"> <b>Unsubscribe here</b></Link></span> </p>
//           </div>
          

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Home
