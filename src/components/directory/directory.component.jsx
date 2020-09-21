import React from 'react'
import './directory.styles.scss';
import { CSSTransition } from 'react-transition-group'
import { SHOP_DATA } from '../../data/data';

import ShopItem from '../shop-item/shop-item.component';

const Directory = () => {
    const shopCollection = Object.keys(SHOP_DATA).map(key => SHOP_DATA[key])
    return (
        <div className='directory'>
            {shopCollection.map(item => {
                return <CSSTransition><ShopItem  key={item.id} item={item}/></CSSTransition>
            })
            }
        </div>
    )
}

export default Directory;