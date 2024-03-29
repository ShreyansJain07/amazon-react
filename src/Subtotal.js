import React from 'react'
import CurrencyFormat from 'react-currency-format'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./Subtotal.css"
import {useStateValue} from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
  const navigate = useNavigate ();
    const [{basket},dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        <div style={{color:"green",fontSize:"20px",display:"flex"}}><CheckCircleIcon  />
        <span style={{fontSize:"18px"}}>You are eligible for free delivery</span>
        </div>
        <CurrencyFormat 
        renderText={(value) => (<>
            <p>Subtotal ({basket?.length} items) : <strong>{value}</strong></p>
            <small className='subtotal__gift'>
                <input type="checkbox" /> This order contains gift
            </small>
        </>)}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
        <button onClick={()=> navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal