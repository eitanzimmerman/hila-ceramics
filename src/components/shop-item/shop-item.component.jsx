import React from 'react';
import { withRouter } from 'react-router-dom';

import './shop-item.styles.scss';

const ShopItem  = ({item, history, match}) => {
    const url = require(`../../assets/img/${item.background}`)
    return(
    <div className='shop-item' onClick={()=> history.push(`${match.url}${item.route}`)}>
        <div 
        className={`shop-item_background ${item.title}`}
        style={{backgroundImage:`url(${url})`}} 
        />
        <div className='shop-item_content'>
            <h1 className='shop-item_content_title'>{item.title.toUpperCase()}</h1>
            <span className='shop-item_content_subtitle'>SHOP NOW</span>
        </div>
    </div>
)};

export default withRouter(ShopItem);