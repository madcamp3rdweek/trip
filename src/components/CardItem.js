import React from 'react';
import { MdStayCurrentLandscape } from 'react-icons/md';
import {Link} from 'react-router-dom';
import styles from "./Cards.module.css";


function CardItem({imgSrc,name,engName}){
    console.log(engName);
    return(
        <>
            <div className={styles.cards__item}>
                <Link className={styles.cards__item__link} to={'/city/'+name+'/'+engName} params={{ cityname: name, engName:engName}}>
                    <img src={imgSrc} alt="Travel Image" className={styles.cards__item__img}/>
                    <h5 className={styles.cards__item__text}>{name}</h5>
                </Link>
            </div>
        
        </>
    )
}
export default CardItem;