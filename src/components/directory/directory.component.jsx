import React from 'react'
import './directory.styles.scss';
import { connect } from 'react-redux'

import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors'

import ShopItem from '../shop-item/shop-item.component';

const Directory = ({ collections }) => {
    return (
        <div className='directory'>
            { collections.map(item => {
                return <ShopItem key={item.id} item={item}/>
            })
            }
        </div>
    )
}

const mapStateToProps = state => ({
    collections : selectShopCollectionsForPreview(state)
})

export default connect(mapStateToProps, null)(Directory);