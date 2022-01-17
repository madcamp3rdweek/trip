import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne,ownObj} from './Data';

import Cards from '../../Cards';

function Home() {
    return (
        <>
            {/* <HeroSection {...homeObjOne}/> */}
            <HeroSection {...ownObj}/>

            <Cards/>
        </>
    );
}

export default Home
