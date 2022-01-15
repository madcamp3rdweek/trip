import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne, homeObjTwo} from './Data';
import Pricing from '../../Pricing';
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
