import React from "react";
import CardItem from './CardItem';
import styles from "./Cards.module.css";
import {cards} from './MyData';


// const cards=[{
//         src:'/images/seoul.jpg',
//         name:'서울'
//     },
//     {
//         src:'/images/busan.jpeg',
//         name:'부산'
//     },
//     {
//         src:'/images/jeju.jpeg',
//         name:'제주'
//     },
//     {
//         src:'/images/yeosu.jpg',
//         name:'여수'
//     },
//     {
//         src:'/images/gangneung.jpg',
//         name:'강릉'
//     },
//     {
//         src:'/images/jeonju.jpg',
//         name:'전주'
//     },
//     {
//         src:'/images/gyeongju.jpg',
//         name:'경주'
//     }];

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