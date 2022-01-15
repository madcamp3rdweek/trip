import React, {useEffect, useRef} from 'react';
// import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import styles from './City.module.css';
// import {useScroll} from '../../Scroll';

const options = {
    root: null,
    rootMargin:"0px",
    threshold:[0, 0.25, 0.5 , 0.75,1]
};

function City({name}){
    // const {scrollY} = useScroll();
    
    const containerTarget1 = useRef(null);
    const containerTarget = useRef(null);
 
    
    

    useEffect(()=>{
        const {current} = containerTarget;
        const observer = new IntersectionObserver((entries)=>{
            

            entries.forEach((entry)=>{
                if (entry.intersectionRatio===0){
                    entry.target.classList.remove(styles.sa_up);
                }
                if (entry.isIntersecting){
                    entry.target.opacity = entry.intersectionRatio;
                    entry.target.classList.add(styles.sa_up);
                    console.log("bye");
    
                }
            })
        },options);
        observer.observe(current);
        return () =>{
            observer.disconnect(current);
        }
    });


    return(
        <>

                <div className={[styles.intro,styles.sa,styles.sa_up].join('')}>
                    <h1>{name}</h1>
                    <h1>afwefaewfaewfewfafewsfaewfawvadsva</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


                    <img src='/images/busan.jpeg' ref={containerTarget} className={styles.sa}></img>
                    {/* <div ref={containerTarget}>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkwvvasvaewvvasvaewvvasvaewv</div> */}
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                    <div>afwefaewfaewfewfafewsfaewfawvadsvasdvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewvvasvaewv</div>
                </div>

        </>
    );
}

export default City;