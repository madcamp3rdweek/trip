import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { Button } from './Button';
import {BsXDiamondFill} from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';

function Pricing() {
    return (
        <IconContext.Provider value = {{color:'#FFF',size:64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Pricing</h1>
                    <div className="pricing__container">
                        <Link to="/sign-up"
                        className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Choose</Button>
                            </div>
                            
                            
                        </Link>
                        <Link to="/sign-up" className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>
                                <h3>Starters</h3>
                            <p>20000won</p>
                            <ul className="pricing__container-features">
                                <li>100 transactions</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>Choose</Button>
                            </div>
                            

                        </Link>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </IconContext.Provider>
    )
}

export default Pricing
