import React, {useEffect, useRef} from 'react';
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import styles from './City.module.css';
import {Tween} from 'react-gsap';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Controller, Scene} from 'react-scrollmagic';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import {cards} from '../../MyData';



function City({match}){
    // const {scrollY} = useScroll();
    const {cityname}= match.params;
    const cityData = cards.find(city => city.name===cityname);
    const {engName,intro,place,videoConstant}=cityData;
    console.log(cityData);

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
    const img1ContainerRef = useRef(null);
    /* content1 steps */
    const content1StepRefs = useRef([]);
    content1StepRefs.current = [];
    const addToContentStepRefs = el => {
        if (el && !content1StepRefs.current.includes(el)) {
            content1StepRefs.current.push(el);
        }
    };
    /*content2 iimg */
    const img2ContainerRef = useRef(null);
    /*content2 */
    const content2Ref = useRef(null);

    /*content3 img */
    const img3ContainerRef = useRef(null);
    /*content3 */
    const content3Ref = useRef(null);
    /*content4 img */
    const img4ContainerRef = useRef(null);
    /*content4 */
    const content4Ref = useRef(null);

    /*other usefull links */
    const linkSectionRef = useRef(null);




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
            // markers:false,
            onUpdate: function(self){
                if(bgvideo){
                    const scrollPos=self.progress;
                    
                    const videoDuration = bgvideo.duration;
                    const videoCurrentTime= videoDuration*scrollPos;
                    if(videoCurrentTime){
                        bgvideo.currentTime=videoConstant*videoCurrentTime;
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
            let tl;
            if (i==steps.length-1){
                tl = gsap.timeline( { 
                    scrollTrigger: {
                        pin: true,
                    
                        trigger: step,
                        start: "top top",
                        end: "+=10000",
                        scrub: true,
                        // markers: true,
                        toggleActions: "play reverse play reverse",
                    }
                });
            }else{
                tl = gsap.timeline( { 
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
            }   
        
          
            tl.to(step, { y:-40, opacity: 1, duration: 6 })
                .to(step, { y:-40, opacity: 0, duration:4 }, 6);
        });
        

        const tl1 = gsap.timeline( { 
            scrollTrigger: {
                trigger: steps[steps.length-1],
                start: "top top",
                end: "bottom center",
                scrub: true,
                // markers: true,
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
        
        content1Steps.forEach((step,i) => {

            const tl = gsap.timeline( { 
                scrollTrigger: {
                    pin: true,
                    trigger: step,
                    start: "top top",
                    end: "+=6000",
                    scrub: true,
                    // markers: true,
                    toggleActions: "play reverse play reverse",
                }
            });
        
            tl.to(step, { y:-40, opacity: 1, duration: 6 })
                .to(step, { y:-40, opacity: 0, duration:4 }, 6);
        });
        
        /* content 2 */
        // transition place content1 to the left and new content2 to from the right.
        const tlc1bye = gsap.timeline({ 
            scrollTrigger: {
                trigger: content2Ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true,
                onLeave: function(){
                    bgvideo.pause();
                },
                toggleActions: "play reverse play reverse",
            }
        });
      
        tlc1bye.to(img1ContainerRef.current, { x:-50, opacity: 0, duration: 10 })
                .to(img2ContainerRef.current, { x:-50, opacity: 1, duration: 10 })

        
        const tlc2 = gsap.timeline( { 
            scrollTrigger: {
                    pin: true,
                    trigger: content2Ref.current,
                    start: "top top",
                    end: "+=6000",
                    scrub: true,
                    // markers: true,
                    toggleActions: "play reverse play reverse",
                }         
        });
            
        tlc2.to(content2Ref.current, { x:-40, opacity: 1, duration: 6 })
                    .to(content2Ref.current, { x:-40, opacity: 0, duration:0.5 }, 6);


        
        /* content 3 */
        // tramsition place content2 to the left and new content3 to from the right.
        const tlc2bye = gsap.timeline( { 
            scrollTrigger: {
                trigger: content3Ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true,
                toggleActions: "play reverse play reverse",
            }
        });
      
        tlc2bye.to(img2ContainerRef.current, { x:-50, opacity: 0, duration: 10 })
                .to(img3ContainerRef.current, { x:-50, opacity: 1, duration: 10 })
        
        const tlc3= gsap.timeline( { 
            scrollTrigger: {
                    pin: true,
                    trigger: content3Ref.current,
                    start: "top top",
                    end: "+=6000",
                    scrub: true,
                    // markers: true,
                    toggleActions: "play reverse play reverse",
                }         
        });
            
        tlc3.to(content3Ref.current, { x:-40, opacity: 1, duration: 6 })
                    .to(content3Ref.current, { x:-40, opacity: 0, duration:4 }, 6);

        /* content 4*/
        // tramsition place content3 to the left and new content4 to from the right.
        const tlc3bye = gsap.timeline( { 
            scrollTrigger: {
                trigger: content4Ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true,
                toggleActions: "play reverse play reverse",
            }
        });
      
        tlc3bye.to(img3ContainerRef.current, { x:-50, opacity: 0, duration: 10 })
                .to(img4ContainerRef.current, { x:-50, opacity: 1, duration: 10 })
        
        const tlc4= gsap.timeline( { 
            scrollTrigger: {
                    pin: true,
                    trigger: content4Ref.current,
                    start: "top top",
                    end: "+=6000",
                    scrub: true,
                    // markers: true,
                    toggleActions: "play reverse play reverse",
                }         
        });
            
        tlc4.to(content4Ref.current, { x:-40, opacity: 1, duration: 6 })
                    .to(content4Ref.current, { x:-40, opacity: 0, duration:4 }, 6);
        



        /* need more content */
        const tlc4bye = gsap.timeline( { 
            scrollTrigger: {
                trigger: linkSectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true,
                toggleActions: "play reverse play reverse",
            }
        });
      
        tlc4bye.to(img4ContainerRef.current, { y:-20, opacity: 0, duration: 10 })






    },[videoContainerRef,bgvideoRef]);
    
    





















    return(
        <>
        <div className={styles.main_container}>
            <div className={styles.background_container}>
                <div ref={videoContainerRef} className={[styles.opacity, styles.media_container].join(' ')}>
                    <video ref={bgvideoRef} src={`/${engName}.mp4`} type="video/mp4" className={styles.bgmedia}></video>
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
                        <img className={styles.city_logo} src={`/images/${engName}_logo.png`}></img>
                    </div>
                </section>
                <section ref={addToStepRefs} className={styles.step}>
                    <div className={styles.step_content}>
                        <h3>{intro[0]}</h3>
                    </div>
                </section>
                <section ref={addToStepRefs} className={styles.step}>
                    <div className={styles.step_content}>
                        <h3>{intro[1]}</h3>
                    </div>
                </section>
                <section ref={addToStepRefs} className={styles.step}>
                    <div className={styles.step_content}>
                        <h3>관광 명소</h3>
                    </div>
                </section>
            </div>
        </div>   
        
        <div className={styles.main_container}>
            <div ref={img1ContainerRef} className={[styles.opacity, styles.media_container].join(' ')}>
                <img className={styles.bgmedia} src={`/images/${place[0].img}`}></img>
            </div>    
            <div className={styles.scroll_container}>

                <section ref={addToContentStepRefs} className={styles.step}>
                    <div className={styles.content1_step}>
                        <div className={styles.content_titles}>{place[0].title}</div>
                        <div className={styles.content_details}>{place[0].detail}</div>
                    </div>
                </section>
            </div>
        </div>


        <div className={styles.main_container}>
            <div ref={img2ContainerRef} className={[styles.opacity, styles.media_container, styles.media_container_right].join(' ')}>
                <img  className={styles.bgmedia} src={`/images/${place[1].img}`}></img>
            </div>    
            <div className={styles.scroll_container}>

                <section ref={content2Ref} className={styles.step}>
                    <div className={styles.content1_step}>
                        <div className={styles.content_titles}>{place[1].title}</div>
                        <div className={styles.content_details}>{place[1].detail}</div>
                    </div>
                </section>
            </div>
        </div>



        <div className={styles.main_container}>
            <div  ref={img3ContainerRef} className={[styles.opacity, styles.media_container, styles.media_container_right].join(' ')}>
                <img  className={styles.bgmedia} src={`/images/${place[2].img}`}></img>
            </div>    
            <div className={styles.scroll_container}>

                <section ref={content3Ref} className={styles.step}>
                    <div className={styles.content1_step}>
                        <div className={styles.content_titles}>{place[2].title}</div>
                        <div className={styles.content_details}>{place[2].detail}</div>
                    </div>
                </section>
            </div>
        </div>


        <div className={styles.main_container}>
            <div  ref={img4ContainerRef} className={[styles.opacity, styles.media_container, styles.media_container_right].join(' ')}>
                <img  className={styles.bgmedia} src={`/images/${place[3].img}`}></img>
            </div>    
            <div className={styles.scroll_container}>

                <section ref={content4Ref} className={styles.step}>
                <div className={styles.content1_step}>
                        <div className={styles.content_titles}>{place[3].title}</div>
                        <div className={styles.content_details}>{place[3].detail}</div>
                    </div>
                </section>
            </div>
        </div>

        <div className={styles.main_container}>
            <div className={styles.scroll_container}>
                <section ref={linkSectionRef} className={styles.step}>
                    <div className={styles.content1_step}>
                        <div className={styles.content_titles}></div>
                    </div>
                </section>
            </div>
        </div>



        </>
    );
}

export default City;