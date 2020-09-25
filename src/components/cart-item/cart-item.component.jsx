import React from 'react';
import './cart-item.styles.scss';


const CartItem = ({ size, title, photo, quantity}) => {
    const photoUrl = require(`../../assets/img/${photo}`)
    return (
        <div className='cart-item'>
            <img className='cart-item_photo' src={photoUrl}/>
            <span className='cart-item_title'>{ title }</span>
            <span className='cart-item_size'>{ size }</span>
            <span className='cart-item_quantity'>{quantity}</span>
        </div>
    )
}

export default CartItem;

