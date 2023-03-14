import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'

const Checkout = () => {
    const [{basket},dispatch] = useStateValue();
    return (
    <div className='checkout'>
    <div className='checkout__left'>
        <div className='checkout__title'>
            <h2>Shopping Cart</h2>
            {basket.map((product) => <div>{product.title}</div>)}
        </div>
    </div>
    <div className='checkout__right'>
        <Subtotal />
    </div>
    </div>
  )
}

export default Checkout