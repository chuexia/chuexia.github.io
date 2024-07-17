import React from 'react';

import Top from 'components/Top.jsx';
import Gallery from 'components/Gallery.jsx';
import Footer from 'components/Footer.jsx';

export default function Main(props) {
    return <>
        <main>
        <Top/>
        <Gallery/>
        <Footer/>
        </main>
    </>;
}