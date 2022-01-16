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
    // const containerTarget1 = useRef(null);
    // const containerTarget2 = useRef(null);

    const {width,height} = useWindowDimensions();
    // useEffect(()=>{
    //     const {current:current1} = containerTarget1;
    //     // const {current:current2} = containerTarget2;

    //     const observer = new IntersectionObserver((entries)=>{

    //         entries.forEach((entry)=>{
    //             if (entry.intersectionRatio===0){
    //                 entry.target.classList.remove(styles.sa_up);
    //             }
    //             if (entry.isIntersecting){
    //                 entry.target.opacity = entry.intersectionRatio;
    //                 entry.target.classList.add(styles.sa_up);
    
    //             }
    //         })
    //     },options);
    //     observer.observe(current1);
    //     // observer.observe(current2);
    //     return () =>{
    //         observer.disconnect(current1);
    //         // observer.disconnect(current2);
    //     }
    // },[]);

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
                    const videoCurrentTime= 0.11*videoDuration*scrollPos;
                    if(videoCurrentTime){
                        bgvideo.currentTime=videoCurrentTime;
                    }
                }
            },
        })
        let steps = stepRefs.current;
        steps.forEach((step,i) => {

            const tl = gsap.timeline( { 
                scrollTrigger: {
                    pin: true,
                
                    trigger: step,
                start: "top top",
                end: "bottom 50%",
                scrub: true,
                markers: true,
                toggleActions: "play reverse play reverse",
                }
                
            });
          
            tl.to(step, { opacity: 1, duration: 6 })
                .to(step, { opacity: 0, duration:6 }, 6);
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
         





 
    {/* <div style={{ height: "100vh" }}/>
      <Controller>
        <Scene triggerHook="onEnter" duration="100%">
          <Tween from={{ x: 0 }} to={{ x: width-200 }}>
            <div
              style={{ height: "200px", width: "200px", background: "red" }}
            />
          </Tween>
        </Scene>
      </Controller>
     */}
        
        {/* <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>

            <Scene pin indicators={true} duration="5000">
                <div className={styles.title_container}>
                    <h1  className={[styles.title].join(' ')}>{cityname}</h1>
                    <img src='/images/busan.jpeg' ref={containerTarget2} className={styles.sa}></img>

                </div>
            </Scene>
            
          <Scene pin>
            
            <div className={[styles.panel,styles.blue].join(' ')}>
              <span className={styles.panel_text}>Panel</span>
            </div>
          </Scene>
          <Scene pin>
            <div className={[styles.panel,styles.turqoise].join(' ')}>
              <span className={styles.panel_text}>Panel</span>
            </div>
          </Scene>
          </Controller>
                <div>
                    
                    
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


                    <img src='/images/busan.jpeg' ref={containerTarget1} className={styles.sa}></img>
                </div> */}

        </>
    );
}

export default City;