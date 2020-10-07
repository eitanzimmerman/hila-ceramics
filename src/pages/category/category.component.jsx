import React, { useState } from 'react';
import { connect } from 'react-redux';
import './category.styles.scss';
import {ReactComponent as BackIcon} from '../../assets/icons/arrow-left2.svg';
import { selectCollection } from '../../redux/shop/shop.selectors';
import {withRouter} from 'react-router-dom';

import { addItem } from '../../redux/cart/cart.actions'




const Category = ({ history, collection, addItem}) => {
    const background = require(`../../assets/img/${collection.background}`)
    const photos = collection.images.map(item => {
        return {photo : require(`../../assets/img/${item.photo}`), title: item.name }
    })

    const [item, setItemCredentials] = useState({id: collection.id, title: collection.title, size: '', item_background: collection.background})
    
    const handleSize = (size) => {
        setItemCredentials({...item, size: size})
    }

    const handleAddToCart = () => {
        if ( ! item.size ) {
            alert("must pick a size")
            return
        }
        addItem(item)
    }

    return (
        <div className='category'>
            <div className='category_header' 
            style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),url(${background})`}}>
                <h1>{ collection.title.toUpperCase() }</h1>
            </div>
            <BackIcon className='return-icon' onClick={()=>history.goBack()}/>
            <div className='category_content'>
                <div className='category_content_info-box'>
                    <h1 className='info-title'>The Specifics</h1>
                    <h2 className='info-subtitle'>Work and Materials</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, consequatur perferendis! In sunt praesentium doloribus eum ex repellendus aut voluptas</p>
                    <h2>Pricing</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dicta minima nobis voluptatem facere id! Ducimus ipsam aliquam, quo necessitatibu</p>
                    <p>S : , M : , L : </p>
                </div>
                <div className='category_content_gallery'>
                    {
                        photos.map( item => {
                            return <div  className='category_content_gallery_item'
                                    style={{backgroundImage: `url(${item.photo})`}}>
                                    </div>
                        })
                    }
                </div>
            </div>
            <div className='category_paybox'>
                    <div className='paybox_options'>
                        <button className='option' onClick={() => handleSize('S')}> S </button>
                        <button className='option' onClick={() => handleSize('M')}> M </button>
                        <button className='option' onClick={() => handleSize('L')}> L </button>
                    </div>
                    <button className='paybox_button' onClick={handleAddToCart}>add to cart</button>
            </div>
        </div>
    )
};


const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.category)(state)
})

const mapDispatchToProps = dispatch => ({
    addItem : (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Category));