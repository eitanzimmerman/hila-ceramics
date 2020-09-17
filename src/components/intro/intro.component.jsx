import React from 'react';

import './intro.styles.scss'

const Intro  = ({clicked}) => (
    <div className='intro'>
        <h1 className='intro_title'>Hila's Ceramics</h1>
        <span className='intro_subtitle'>hand made with love and care</span>
        <button className='intro_button' onClick={clicked}>Visit Store</button>
    </div>
)


export default Intro