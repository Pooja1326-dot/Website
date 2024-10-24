import React, { useState } from 'react'
import './Pay.css'
import { assets } from '../../../assets/frontend_assets/assets'
function BasicPaymentForm() {
  const [user, setuser] = useState({ name: "", cardNumber: "", month: "", year: "", number: "" })
    const handleSubmit = (e) => {
      e.preventDefault();
      setuser(user);
      alert('Payment Processed!');
      window.location.href = '/success';
      console.log(user);
}
    return (
            <form onSubmit={handleSubmit}>
        <div className="box1">
          <div className="input1">
            <h1>PAYMENT</h1>
          </div>
          <div className="input-file">
            <label>Cards Accepted:</label>
            <div className="img2">
              <img className="i1" src={assets.debit} alt="" />
              <img className="i1" src={assets.creditcard} alt="" />
              <img className="i1" src={assets.gpay} alt="" />
              <img className="i1" src={assets.upi} alt="" />
            </div>
            <div>
              <label>Name Of Card:</label>
              <br></br>
              <input type="text" placeholder="Mr.jocod Aiden" id="txt" name="name" value={user.name} onChange={(e) => { (setuser(e.target.value)) }} required />
              <br></br><br></br>
              <label> Credit card Number:</label><br></br>
              <input type="number" placeholder="1111 2222 3333 4444" id="txt" pattern="\d{16}" maxLength="16" value={user.cardNumber} onChange={(e) => { (setuser(e.target.value)) }} required />
              <br></br><br></br>
              <label>Exp Month:</label>
              <br></br>
              <input type="month" id="txt" value={user.month} onChange={(e) => { (setuser(e.target.value)) }} required />
              <br></br><br></br>
              <label>Exp Year:</label><br></br>
              <input type="year" id="txt" placeholder="2024" value={user.year} onChange={(e) => { (setuser(e.target.value)) }} required /> <br></br><br></br>
              <label>CVV:</label><br></br>
              <input type="number" id="txt" placeholder='125' value={user.number} onChange={(e) => { (setuser(e.target.value)) }}
                required /><br></br><br></br>
              <button type='submit'className="btnsubmit">Process To Pay</button>
            </div></div>
        </div>
</form>
    )
  }
export default BasicPaymentForm;


