import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    return (
        <div className='cart'>
           <h1>this is cart</h1>
                <p>Selected-Item:{cart.length}</p> 
                <p>Totall price:</p>
                <p>Totall shipping:</p>
                <p>Tax:</p>
                <h4>Grand Totall:</h4>
        </div>
    );
};

export default Cart;