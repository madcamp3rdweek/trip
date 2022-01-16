import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne} from './Data';

import Cards from '../../Cards';

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne}/>

            <Cards/>
        </>
    );
}

export default Home
