import React, {useEffect, useRef} from 'react';
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import styles from './City.module.css';
import {Tween} from 'react-gsap';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Controller, Scene} from 'react-scrollmagic';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
// import {useScroll} from '../../Scroll';

const options = {
    root: null,
    rootMargin:"0px",
    threshold:[0, 0.25, 0.5 , 0.75,1]
};

function City({match}){
    // const {scrollY} = useScroll();
    const {cityname}= match.params;

    const {width,height} = useWindowDimensions();

    gsap.registerPlugin(ScrollTrigger);
    const bgvideoRef = useRef(null);
    const videoContainerRef = useRef(null);

    const stepRefs = useRef([]);
    stepRefs.current = [];
    const addToStepRefs = el => {
        if (el && !stepRefs.current.includes(el)) {
            stepRefs.current.push(el);
        }
    };

    useEffect(()=>{

        /* for scrubbing video */
        const bgvideo = bgvideoRef.current;
        bgvideo.pause();
        bgvideo.currentTime=0;
        ScrollTrigger.create({
            trigger:videoContainerRef.current,
            scrub:true,
            pin:videoContainerRef.current,
            start:'center center',
            end : '+=100000',
            markers:false,
            onUpdate: function(self){
                if(bgvideo){
                    const scrollPos=self.progress;
                    
                    const videoDuration = bgvideo.duration;
                    console.log(scrollPos,videoDuration);
                    const videoCurrentTime= 0.05*videoDuration*scrollPos;
                    if(videoCurrentTime){
                        bgvideo.currentTime=videoCurrentTime;
                    }
                }
            },
        })


        /* for text fading in and out */
        let steps = stepRefs.current;
        steps.forEach((step,i) => {

            const tl = gsap.timeline( { 
                scrollTrigger: {
                    pin: true,
                
                    trigger: step,
                start: "top top",
                end: "bottom top",
                scrub: true,
                markers: true,
                toggleActions: "play reverse play reverse",
                }
                
            });
          
            tl.to(step, { opacity: 1, duration: 6 })
                .to(step, { opacity: 0, duration:2 }, 6);
        });


        // gsap.to(bgvideo,{
        //     scrollTrigger:{
        //         scrub:true
        //     },
        //     scale: 1.5
        // })

    },[videoContainerRef,bgvideoRef]);
    
    

    return(
        <>
        <div className={styles.background_container}>
            <div ref={videoContainerRef} className={styles.video_container}>
                <video ref={bgvideoRef} src="/Seoul2.mp4" type="video/mp4" className={styles.bgvideo}></video>
            </div>    
        </div>
        <div className={styles.scroll_container}>
            <section  >
                <div className={styles.city_name}>
                    <h3>{cityname}</h3>
                </div>
            </section>
            <section ref={addToStepRefs} className={styles.step}>
                <div className={styles.step_content}>
                    <h3>I'm</h3>
                </div>
            </section>
            <section ref={addToStepRefs} className={styles.step}>
                <div className={styles.step_content}>
                    <h3>JW</h3>
                </div>
            </section>
            <section ref={addToStepRefs} className={styles.step}>
                <div className={styles.step_content}>
                    <h3>K</h3>
                </div>
            </section>
        </div>
        </>
    );
}

export default City;