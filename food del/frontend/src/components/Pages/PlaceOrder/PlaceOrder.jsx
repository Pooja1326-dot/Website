import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  const [del,setdel]=useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    setdel(del)
    window.location.href = '/payment';
    console.log(del);
  }
  
  return (
    <form className='place-order' onSubmit={handleSubmit}>
    <div className="place-order-left">
    <p className="title">Delivery Information</p>
    <div className="multi-fields">
      <input required name='firstName'  type="text" placeholder='First Name' />
      <input required name='lastName' type="text" placeholder='Last Name' />
      </div>
      <input className='emaill' required name='email'   type="email" placeholder='Email address' />
      <input className='streett' required name='street'  type="text" placeholder='Street' />
      <div className="multi-fields">
      <input required name='city'  type="text" placeholder='City' />
      <input required name='state' type="text" placeholder='State' />
      </div>
      <div className="multi-fields">
      <input required name='zipcode'  type="text" placeholder='Zip code' />
      <input required name='country'  type="text" placeholder='Country' />
      </div>
      <input className='phonee' required name='phone'  type="text" placeholder='Phone' />
    </div>
    <div className="place-order-right">
    <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
        <div className="cart-total-details">
              <p>Subtotal</p>
              <p>RS.{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>RS.{getTotalCartAmount()===0?0:20}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
              <b>Total</b>
              <b>RS.{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
          </div>
        </div>
        <button type='submit'>PROCEED TO PAYMENT</button>
      </div>
    </div>
  </form>
)
}
export default PlaceOrder
