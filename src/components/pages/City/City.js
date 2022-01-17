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
            start:"center center",
            end : "+=100000",
            markers:false,
            onUpdate: function(self){
                if(bgvideo){
                    const scrollPos=self.progress;
                    
                    const videoDuration = bgvideo.duration;
                    console.log(scrollPos,videoDuration);
                    const videoCurrentTime= videoDuration*scrollPos;
                    if(videoCurrentTime){
                        bgvideo.currentTime=0.03*videoCurrentTime;
                    }
                }
            },
        })
        let steps = stepRefs.current;
        console.log(steps)
        const tl0 = gsap.timeline( { 
            scrollTrigger: {
                trigger: steps[0],
                start: "top bottom",
                end: "+=100000",
                scrub: true,
                // markers: true,
                toggleActions: "play reverse play reverse",
            }
        });
      
        tl0.to(videoContainerRef.current, { opacity: 1, duration: 0.5 })
            .to(videoContainerRef.current, { y:-40, opacity: 0, duration:4 }, 6);



        /* for text fading in and out */
        
        steps.forEach((step,i) => {

            const tl = gsap.timeline( { 
                scrollTrigger: {
                    pin: true,
                
                    trigger: step,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    // markers: true,
                    toggleActions: "play reverse play reverse",
                }
                
            });
          
            tl.to(step, { y:-40, opacity: 1, duration: 6 })
                .to(step, { y:-40, opacity: 0, duration:4 }, 6);
        });
        

        const tl1 = gsap.timeline( { 
            scrollTrigger: {
                trigger: steps[steps.length-1],
                start: "top top",
                end: "bottom center",
                scrub: true,
                markers: true,
                onLeave: function(){
                    bgvideo.pause();
                },
                toggleActions: "play reverse play reverse",
            }
        });
      
    tl1.to(videoContainerRef.current, { opacity: 0, duration: 10 });
    },[videoContainerRef,bgvideoRef]);
    
    





















    return(
        <>
        <div className={styles.background_container}>
            <div ref={videoContainerRef} className={[styles.opacity, styles.video_container].join(' ')}>
                <video ref={bgvideoRef} src={`/Seoul2.mp4`} type="video/mp4" className={styles.bgvideo}></video>
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
                    <img className={styles.city_logo}src='/images/seoul_logo_2.png'></img>
                </div>
            </section>
            <section ref={addToStepRefs} className={styles.step}>
                <div className={styles.step_content}>
                    <h3>JW</h3>
                </div>
            </section>
            <section ref={addToStepRefs} className={styles.step}>
                <div className={styles.step_content}>
                    <h3>KKKKKKKkK</h3>
                </div>
            </section>
            <section ref={addToStepRefs} className={styles.step}>
                <div className={styles.step_content}>
                    <h3>Last Element</h3>
                </div>
            </section>
        </div>
        </>
    );
}

export default City;