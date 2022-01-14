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
        <IconContext.Provider value = {{color:'#fff',size:64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Pricing</h1>
                    <div className="pricing__container">
                        <Link to="/sign-up"
                        className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire />>
                                </div>
                            </div>
                            <h3>Gold</h3>
                            <p>40000won</p>
                            <ul className="pricing__container-features">
                                <li>200 transactions</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>Choose</Button>
                        </Link>
                        <Link to="/sign-up"
                        className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />>
                                </div>
                            </div>
                            <h3>Starters</h3>
                            <p>20000won</p>
                            <ul className="pricing__container-features">
                                <li>100 transactions</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>Choose</Button>
                        </Link>
                        <Link to="/sign-up"
                        className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize />>
                                </div>
                            </div>
                            <h3>Diamond</h3>
                            <p>50000won</p>
                            <ul className="pricing__container-features">
                                <li>600 transactions</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>Choose</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </IconContext.Provider>
    )
}

export default Pricing
