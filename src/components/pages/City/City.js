import React, {useEffect, useRef} from 'react';
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import styles from './City.module.css';
import {Tween} from 'react-gsap';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Controller, Scene} from 'react-scrollmagic';
import useWindowDimensions from '../../../hooks/useWindowDimensions';




function City({match}){
    // const {scrollY} = useScroll();
    const {cityname}= match.params;

    const {width,height} = useWindowDimensions();

    gsap.registerPlugin(ScrollTrigger);

    /*background video */
    const bgvideoRef = useRef(null);
    const videoContainerRef = useRef(null);
    /* intro steps */
    const stepRefs = useRef([]);
    stepRefs.current = [];
    const addToStepRefs = el => {
        if (el && !stepRefs.current.includes(el)) {
            stepRefs.current.push(el);
        }
    };



    /*background img1 */
    const img1Ref = useRef(null);
    const img1ContainerRef = useRef(null);
    /* content1 steps */
    const content1StepRefs = useRef([]);
    content1StepRefs.current = [];
    const addToContentStepRefs = el => {
        if (el && !content1StepRefs.current.includes(el)) {
            content1StepRefs.current.push(el);
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
        


        ///////////////////////////////////////////////////////////////////////////////////////////
        /*content1 start */


        let content1Steps = content1StepRefs.current;
        console.log(content1Steps);
        const tlc1 = gsap.timeline( { 
            scrollTrigger: {
                trigger: content1Steps[0],
                start: "top bottom",
                end: "+=100000",
                scrub: true,
                // markers: true,
                toggleActions: "play reverse play reverse",
            }
        });
      
        tlc1.to(img1ContainerRef.current, { opacity: 1, duration: 0.5 })
             .to(img1ContainerRef.current, { y:-40, opacity: 0, duration:4 }, 6);

        




    },[videoContainerRef,bgvideoRef]);
    
    





















    return(
        <>
        <div className={styles.main_container}>
            <div className={styles.background_container}>
                <div ref={videoContainerRef} className={[styles.opacity, styles.media_container].join(' ')}>
                    <video ref={bgvideoRef} src={`/Seoul2.mp4`} type="video/mp4" className={styles.bgmedia}></video>
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
        </div>   
        
        <div className={styles.main_container}>
            <div ref={img1ContainerRef} className={[styles.opacity, styles.media_container].join(' ')}>
                <img ref={img1Ref} className={styles.bgmedia} src='/images/gyeongbokgung.jpg'></img>
            </div>    
            <div className={styles.scroll_container}>
                <section>
                    <div style={{color:"white"}}>
                        HIHELLo
                    </div>
                </section>
                <section ref={addToContentStepRefs} className={styles.step}>
                    <div className={styles.step_content}>
                        desciption1
                    </div>
                </section>
                <section ref={addToContentStepRefs} className={styles.step}>
                    <div className={styles.step_content}>
                        desciption2
                    </div>
                </section></div>
                <section ref={addToContentStepRefs} className={styles.step}>
                    <div className={styles.step_content}>
                        desciption3
                    </div>
                </section>
        </div>
        </>
    );
}

export default City;