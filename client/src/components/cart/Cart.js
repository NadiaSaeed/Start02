import React from 'react';
import "./cart.css";
import { Divider } from '@mui/material';


function Cart() {
  return (
    <div className='cart_section'>
      <div className="cart_container">
        <div className="left_cart">
          <img src= "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50" alt=''/>
          <div className="cart_btn">
            <button className='cart_btn1'>Add to Cart</button>
            <button className='cart_btn2'>Buy Now</button>
          </div>
          



        </div>
        <div className="right_cart">
         <h3>Fitness Gear</h3>
         <h4>This product make you fit fat</h4>
         <Divider />
         <p className="mrp">m.r.p</p>
         <p>Deal of The Day: <span style={{color:"#B12704"}}>Rs.789</span></p>
         <p>You save: <span style={{color:"#B12704"}}>Rs.789</span></p>
         <div className="discount_box">
          <h5>Discount : <span style={{color:"#111"}}> Extra 10% off</span></h5>
          <h4>Free Delivery <span style={{color:"#111", fontWeight:600}}>Oct 8 - 21</span></h4>
          <p>Fastest Delivery <span style={{color:"#111", fontWeight:600}}>Tommorrow 11AM</span></p>

         </div>
         <p className="description">About the item: <span style={{color: "#565659", fontSize:14, fontWeight:500,letterSpacing:"0.4px"}}>mern stack ecommerce tutorial
e-commerce website using mern stack
Can I use node JS for eCommerce website?
mern stack ecommerce project github
mern stack e-commerce open source
full-stack e-commerce website github
material ui e-commerce github
react ecommerce project
react-ecommerce github</span></p>


         <p></p>

      </div>
      </div>

    </div>
  )
}

export default Cart
