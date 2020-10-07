import React from 'react';
import {connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';
import {ReactComponent as CrossIcon} from '../../assets/icons/cross.svg';
import './cart-item.styles.scss';


const CartItem = ({ size, title, photo, quantity, item, removeItemFromCart}) => {
    const photoUrl = require(`../../assets/img/${photo}`)
    return (
        <div className='cart-item'>
            <img className='cart-item_photo' src={photoUrl}/>
            <span className='cart-item_title'>{ title }</span>
            <span className='cart-item_size'>{ size }</span>
            <span className='cart-item_quantity'>{quantity}</span>
            <CrossIcon className='cart-item_delete' onClick={()=>removeItemFromCart(item)}/>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart : (item) => dispatch(removeItem(item))
})


export default  connect(null, mapDispatchToProps)(CartItem);

