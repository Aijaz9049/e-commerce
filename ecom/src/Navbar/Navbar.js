import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from "react-redux";
import Menu from '@mui/material/Menu';
import { add, decrement, remove } from '../Pages/Reducer/Action';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';





const Navbar = ({ search, setsearch, check, change, theme }) => {


  const getdata = useSelector((state) => state.reducers.cards)

  const [price, setprice] = useState(0)


  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch()

  function del(id) {
    dispatch(remove(id))
  }

  function descr(e) {
    dispatch(decrement(e))
  }

  function send(e) {
    dispatch(add(e))

  }


  function total() {
    let price = 0

    getdata.map((val) => {
      price = val.price * val.quantity + price

      setprice(price)
    })
  }
  useEffect(() => {
    total()
  }, [total])

  const [click, setclick] = useState(false)
  const handleClicks = () => setclick(!click)

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  const navigate = useNavigate()

  function test() {

    navigate("/")
    window.scrollTo({ top: 0 })

  }
  function closeNavbarMenu() {
    // const menu = document.querySelector('.nav-menu');
    // menu.classList.remove('nav-menu li');
  }




  return (

    <div className={theme.palette.mode === 'dark' ? 'Navbar1' : 'Navbar'}>
      <input type="checkbox" className='check-box' id='same' />
      <label htmlFor="same" className='label'> <i className="fa-solid fa-bars"></i> </label>

      <div className='nav-logo'>
        <img src="https://i.imgur.com/lskn0IJ.png" alt="" onClick={test} />
      </div>
      <ul className='nav-menu'>
        <li> <Link onClick={closeNavbarMenu} to="/">Home</Link></li>
        <li> <Link onClick={closeNavbarMenu} to="Mens">Men</Link></li>
        <li> <Link onClick={closeNavbarMenu} to="Women">Women</Link></li>
        <li> <Link onClick={closeNavbarMenu} to="Kids">Kids</Link></li>

      <div className="search">

        <input type="search" placeholder='What are you looking for ?' value={search} onChange={(e) => setsearch(e.target.value)} />
        <i className="fa-solid fa-magnifying-glass"></i>

      </div>
      </ul>
      <div className='cart'>

        {/* <div className="darkm">
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked onChange={change} checked={check} />}
          />

        </div> */}


        <Link to="Login"><button className='login-button'>Login</button> </Link>

        <div className="cartre">


          <Badge badgeContent={getdata.length} color="primary">
            <i className="fa-solid fa-cart-shopping"


              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}

            ></i>
          </Badge>

        </div>
      </div>
      {
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}

        >

          {
            getdata.length
              ?
              // <div>
              <div className="maincartitem">

                <div className="cartitrm1" > <br />
                  <h3>YOUR CART</h3> <br />



                  {
                    getdata.map(function (val) {
                      return (
                        <div className="carditemflex">
                          <div className="carditemimg">
                            <Link to={`/cart/${val.id}`}>

                              <img src={val.imgurl} onClick={handleClose} alt="" />

                            </Link>
                          </div>
                          <div className="cartdesc">
                            {/* <p>{val.cname}</p> */}
                            <p><b>{val.title} </b></p>
                            <h2><b>₹ {val.price}</b></h2>
                            {/* <p>{val.quantity}</p> */}
                          </div>
                          <div className="deleteicon">
                            {/* <h5>Quantity: {val.quantity}</h5> */}
                            {/* <i className="fa-solid fa-trash" onClick={()=>del(del.id)}></i> */}
                            <button onClick={() => del(val.id)}>Remove</button>
                            {/* <i class="fa-solid fa-trash" onClick={() => del(val.id)}></i> */}
                            <div className="qty">
                              <div className="qty1" onClick={val.quantity <= 1 ? () => del(val.id) : () => descr(val)}><span>-</span></div>
                              <div className="qty2"><span>{val.quantity}</span></div>
                              <div className="qty3" onClick={() => send(val)}> <span>+</span></div>


                            </div>
                          </div>
                        </div>
                      )
                    })

                  }

                  {/* <div className="total"> */}
                    {/* <input className='cop' type="text" placeholder='Type coupon code here' /> */}
                    {/* <hr /> */}
                    {/* <p>₹99 off on All UPI Payments</p> */}
                    <hr />
                    <div className="gateway">
                      <h4>Total Amount : ₹ {price}</h4>
                      <button>Confirm Order</button>

                    </div>

                  {/* </div> */}
                </div>
              </div>



              // </div>
              :
              <div className='carditem4'>
                <i className="fa-solid fa-xmark" onClick={handleClose}></i>
                <img src="https://tss-static-images.gumlet.io/emptyCart.png" alt="" />
                <h3>Your shopping cart is empty.</h3>
                <p>Please add something soon, <br />carts have feelings too.</p>



              </div>


          }



        </Menu>
      }


    </div>
  )
}

export default Navbar