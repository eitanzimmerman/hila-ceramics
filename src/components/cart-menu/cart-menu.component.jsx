import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-menu.styles.scss';

import CartItem from '../cart-item/cart-item.component'

const CartMenu = ({ cartItems }) => {
    const errMessage = 'No items in cart'
    return (
        <div className='cart-menu'>
            <div className='cart-menu_header'>
                <span className='cart-menu_header_item'>Item</span>
                <span className='cart-menu_header_size'>Size</span>
                <span className='cart-menu_header_quantity'>Quantity</span>
            </div>
            {   cartItems.length ?
                cartItems.map(item => <CartItem key={item.id} size={item.size} title={item.title} photo={item.item_background} quantity={item.quantity}/>)
                : <p>errMessage</p>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems : selectCartItems(state)
})

export default connect(mapStateToProps)(CartMenu);