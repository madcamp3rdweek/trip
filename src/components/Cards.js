import React from "react";
import CardItem from './CardItem';
import styles from "./Cards.module.css";
import {cards} from './MyData';



function Cards() {
    
    return (
        <div className = {styles.cards__container}>
            <h1 className={styles.cards__title}>멋진 도시들을 방문해 보세요</h1>

            <div className={styles.cards}>
                {cards.map((item,i)=>(
                    <CardItem imgSrc={item.src} name={item.name} key={i}></CardItem>
                ))}
        </div>
        </div>
    )
}

export default Cards;