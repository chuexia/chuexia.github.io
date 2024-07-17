import React, {useEffect, useState, useRef} from 'react';

import 'components/Top.css'

export default function Top(props) {
    return <section className='intro'>
        <div className='img-wrap'>
            <img src="image/temp.jfif"/>
        </div>
        <section className='top'>
                
            <div className='title'>夏玦</div>
            <p className='text'>夏玦的個人網站</p>
        </section>
        <section className='about'>
        <div className='title'>About</div>
        <div className='category'>- - - -</div>
        <div className='info'>info</div>
        </section>
    </section>;
}