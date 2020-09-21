import React from 'react';
import './category.styles.scss';
import {ReactComponent as BackIcon} from '../../assets/icons/arrow-left2.svg';
import {withRouter} from 'react-router-dom'
import { SHOP_DATA } from '../../data/data';



const Category = ({match, history}) => {
    const collection = SHOP_DATA[match.params.category]
    const background = require(`../../assets/img/${collection.background}`)
    const photos = collection.images.map(item => {
        return {photo : require(`../../assets/img/${item.photo}`), title: item.name }
    })
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
                    <p>S : </p>
                    <p>M : </p>
                    <p>L : </p>
                </div>
                <div className='category_content_gallery'>
                    {
                        photos.map( item => {
                            return <div className='category_content_gallery_item'
                                    style={{backgroundImage: `url(${item.photo})`}}>
                                    </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
};

export default withRouter(Category);