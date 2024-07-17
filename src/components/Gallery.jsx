import React, {useEffect, useState, useRef} from 'react';

import 'components/Gallery.css'

export default function Gallery(props) {
    return (
        <section className='gallery'>
            <div className='title'>Work</div>
            <div className='lightbox'></div>
            <div className='commission'>commission</div>
        </section>
    );
}