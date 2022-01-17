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
                markers: true,
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
        const tlc1bye = gsap.timeline( { 
            scrollTrigger: {
                trigger: content2Ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: true,
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
                        <h3>과거와 현재가 공존하는 도시</h3>
                    </div>
                </section>
                <section ref={addToStepRefs} className={styles.step}>
                    <div className={styles.step_content}>
                        <h3>서울을 즐겨보세요</h3>
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
                <img className={styles.bgmedia} src='/images/gyeongbokgung.jpg'></img>
            </div>    
            <div className={styles.scroll_container}>

                <section ref={addToContentStepRefs} className={styles.step}>
                    <div className={styles.content1_step}>
                        <div className={styles.content_titles}>경복궁</div>
                        <div className={styles.content_details}>조선 왕조 제일의 법궁으로, 북으로는 북악산, 정문인 광화문 앞으로는 넓은 육조거리(지금의 세종로)가 펼쳐져, 왕도인 한양의 도시계획의 중심이 되었던 문화재입니다. 도심 속 펼쳐진 고궁의 분위기를 만끽해보세요.</div>
                    </div>
                </section>
            </div>
        </div>


        <div className={styles.main_container}>
            <div ref={img2ContainerRef} className={[styles.opacity, styles.media_container, styles.media_container_right].join(' ')}>
                <img  className={styles.bgmedia} src='/images/NSeoulTower.jpg'></img>
            </div>    
            <div className={styles.scroll_container}>

                <section ref={content2Ref} className={styles.step}>
                    <div className={styles.content1_step}>
                    <div className={styles.content_titles}>N서울타워</div>
                        <div className={styles.content_details}>도심 속 우뚝 솟아 있는 N서울타워입니다. 서울 시내 전 지역에서 바라보이는 타워에서 아름다운 서울의 전경을 감상하세요.  </div>
                    </div>
                </section>
            </div>
        </div>



        <div className={styles.main_container}>
            <div  ref={img3ContainerRef} className={[styles.opacity, styles.media_container, styles.media_container_right].join(' ')}>
                <img  className={styles.bgmedia} src='/images/banpohanriver.png'></img>
            </div>    
            <div className={styles.scroll_container}>

                <section ref={content3Ref} className={styles.step}>
                    <div className={styles.content1_step}>
                        <div className={styles.content_titles}>반포한강공원</div>
                        <div className={styles.content_details}>반포대교 남단 부근에 위치한 한강공원으로, 달빛무지개분수, 세빛둥둥섬 등 다양한 볼거리와 한강의 아름다운 풍경을 자랑합니다. 한강의 평화로운 분위기를 즐기고 싶다면 반포한강공원에 방문해보세요.</div>
                    </div>
                </section>
            </div>
        </div>


        <div className={styles.main_container}>
            <div  ref={img4ContainerRef} className={[styles.opacity, styles.media_container, styles.media_container_right].join(' ')}>
                <img  className={styles.bgmedia} src='/images/gwangjangmarket.jpg'></img>
            </div>    
            <div className={styles.scroll_container}>

                <section ref={content4Ref} className={styles.step}>
                    <div className={styles.content1_step}>
                        <div className={styles.content_titles}>광장시장</div>
                        <div className={styles.content_details}>광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장광장시장</div>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
}

export default City;