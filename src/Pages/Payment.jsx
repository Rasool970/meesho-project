import React from 'react'
import '../Pages/payment.css'
import { Link } from 'react-router-dom'

function Payment() {
  return (
    <div className='payment'>
        <div className='paytitle'>
            <h4>Enter Card Details</h4>
            <div className='payinputs'>
            <input type='text ' placeholder='Enter Card Number'/>
            <input type='text' placeholder='MM'  className='line1'/>
            <input type='text' placeholder='YY' className='line1'/>
            <input type='text' placeholder='CVV'/>
            </div>
            <div className='btn'>
                <Link to='/'><button>Cancel</button></Link>
                <Link to='/veri'><button>Verify</button></Link>
            </div>

        </div>



    </div>
  )
}

export default Payment