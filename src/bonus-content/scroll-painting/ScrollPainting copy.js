import React, { useEffect, useMemo, useRef, useState } from 'react';
import './ScrollPainting.scss';
import { images } from './self-portrait-images';

export default function ScrollPainting() {
    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);
    const targetRef4 = useRef(null);
    const targetRef5 = useRef(null);
    const targetRef6 = useRef(null);
    const targetRef7 = useRef(null);
    const targetRef8 = useRef(null);
    const targetRef9 = useRef(null);
    const targetRef10 = useRef(null);
    const targetRef11 = useRef(null);
    const targetRef12 = useRef(null);
    const targetRef13 = useRef(null);
    const targetRef14 = useRef(null);
    const targetRef15 = useRef(null);
    const targetRef16 = useRef(null);
    const targetRef17 = useRef(null);
    const targetRef18 = useRef(null);
    const targetRef19 = useRef(null);
    const targetRef20 = useRef(null);
    const targetRef21 = useRef(null);
    const targetRef22 = useRef(null);
    const targetRef23 = useRef(null);
    const scrollInitialized = useRef(false);
    const [count, setCount] = useState(0);
    const [fade, setFade] = useState(false);
    const [ended, endAnimation] = useState(false);

    const callbackFunction = entries => {
        const [entry] = entries;
        const val = parseInt(entry.target.id);
        if (entry.isIntersecting && val === 23) return endAnimation(true);
        if (!entry.isIntersecting && val === 23) endAnimation(false)
        if (entry.isIntersecting && val > count) return setCount(val);
        if (!entry.isIntersecting && val === count) return setCount(val - 1);
    }

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }
    }, [count]);

    useEffect(() => {
        const observer1 = new IntersectionObserver(callbackFunction, options);
        const observer2 = new IntersectionObserver(callbackFunction, options);
        const observer3 = new IntersectionObserver(callbackFunction, options);
        const observer4 = new IntersectionObserver(callbackFunction, options);
        const observer5 = new IntersectionObserver(callbackFunction, options);
        const observer6 = new IntersectionObserver(callbackFunction, options);
        const observer7 = new IntersectionObserver(callbackFunction, options);
        const observer8 = new IntersectionObserver(callbackFunction, options);
        const observer9 = new IntersectionObserver(callbackFunction, options);
        const observer10 = new IntersectionObserver(callbackFunction, options);
        const observer11 = new IntersectionObserver(callbackFunction, options);
        const observer12 = new IntersectionObserver(callbackFunction, options);
        const observer13 = new IntersectionObserver(callbackFunction, options);
        const observer14 = new IntersectionObserver(callbackFunction, options);
        const observer15 = new IntersectionObserver(callbackFunction, options);
        const observer16 = new IntersectionObserver(callbackFunction, options);
        const observer17 = new IntersectionObserver(callbackFunction, options);
        const observer18 = new IntersectionObserver(callbackFunction, options);
        const observer19 = new IntersectionObserver(callbackFunction, options);
        const observer20 = new IntersectionObserver(callbackFunction, options);
        const observer21 = new IntersectionObserver(callbackFunction, options);
        const observer22 = new IntersectionObserver(callbackFunction, options);
        const observer23 = new IntersectionObserver(callbackFunction, options);
        if (targetRef1.current) observer1.observe(targetRef1.current);
        if (targetRef2.current) observer2.observe(targetRef2.current);
        if (targetRef3.current) observer3.observe(targetRef3.current);
        if (targetRef4.current) observer4.observe(targetRef4.current);
        if (targetRef5.current) observer5.observe(targetRef5.current);
        if (targetRef6.current) observer6.observe(targetRef6.current);
        if (targetRef7.current) observer7.observe(targetRef7.current);
        if (targetRef8.current) observer8.observe(targetRef8.current);
        if (targetRef9.current) observer9.observe(targetRef9.current);
        if (targetRef10.current) observer10.observe(targetRef10.current);
        if (targetRef11.current) observer11.observe(targetRef11.current);
        if (targetRef12.current) observer12.observe(targetRef12.current);
        if (targetRef13.current) observer13.observe(targetRef13.current);
        if (targetRef14.current) observer14.observe(targetRef14.current);
        if (targetRef15.current) observer15.observe(targetRef15.current);
        if (targetRef16.current) observer16.observe(targetRef16.current);
        if (targetRef17.current) observer17.observe(targetRef17.current);
        if (targetRef18.current) observer18.observe(targetRef18.current);
        if (targetRef19.current) observer19.observe(targetRef19.current);
        if (targetRef20.current) observer20.observe(targetRef20.current);
        if (targetRef21.current) observer21.observe(targetRef21.current);
        if (targetRef22.current) observer22.observe(targetRef22.current);
        if (targetRef23.current) observer23.observe(targetRef23.current);

        if (!scrollInitialized.current) {
            scrollInitialized.current = true;
            setTimeout(() => setCount(0), 50);
        }

        return
    }, [targetRef1, targetRef2, targetRef3, targetRef4, targetRef5, targetRef6, targetRef7, targetRef8, targetRef9, targetRef10,
        targetRef11, targetRef12, targetRef13, targetRef14, targetRef15, targetRef16, targetRef17, targetRef18, targetRef19,
        targetRef20, targetRef21, targetRef22, targetRef23, options])


    function enter(e) {
        e.preventDefault()
        setFade(true);
    }

    useEffect(() => {
        if (fade) {
            setTimeout(() => window.close(), 300);
        }
    }, [fade])

    useEffect(() => {
        const start = document.getElementById('start');
        start.scrollIntoView();
    }, [])

    const lookInText = (
        <div className="lookIn" style={count === 0 ? { opacity: '1', transition: 'all 1s 1s' } : { opacity: '0', animation: 'none' }}>
            look inward
        </div >
    )

    const scrollInText = (
        <div className="scrollIn" style={count === 0 ? { opacity: '1', transition: 'all 1s 1s' } : { opacity: '0', animation: 'none' }}>
            scroll inward
        </div >
    )

    console.log(count)

    return (
        <div className="index">
            {lookInText}
            {scrollInText}

            <div className="enter-button" style={{ zIndex: ended ? '1100' : '900' }}>
                <a href='/' onClick={enter}><button className={fade ? 'fade enter-button-btn' : 'enter-button-btn'}>Enter</button></a>
            </div >

            <div className="canvas">

                {images.map((img, idx) => {

                    const styles = {
                        background: `url(${img})`,
                        height: count === idx ? '100%' : '0%',
                        width: '100%',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'repeat'
                    }

                    return <div key={idx} style={styles} />
                })}

            </div>

            <div className="scrollContainer">
                <div ref={targetRef23} id={23} className="scrollArea"></div>
                <div ref={targetRef22} id={22} className="scrollArea"></div>
                <div ref={targetRef21} id={21} className="scrollArea"></div>
                <div ref={targetRef20} id={20} className="scrollArea"></div>
                <div ref={targetRef19} id={19} className="scrollArea"></div>
                <div ref={targetRef18} id={18} className="scrollArea"></div>
                <div ref={targetRef17} id={17} className="scrollArea"></div>
                <div ref={targetRef16} id={16} className="scrollArea"></div>
                <div ref={targetRef15} id={15} className="scrollArea"></div>
                <div ref={targetRef14} id={14} className="scrollArea"></div>
                <div ref={targetRef13} id={13} className="scrollArea"></div>
                <div ref={targetRef12} id={12} className="scrollArea"></div>
                <div ref={targetRef11} id={11} className="scrollArea"></div>
                <div ref={targetRef10} id={10} className="scrollArea"></div>
                <div ref={targetRef9} id={9} className="scrollArea"></div>
                <div ref={targetRef8} id={8} className="scrollArea"></div>
                <div ref={targetRef7} id={7} className="scrollArea"></div>
                <div ref={targetRef6} id={6} className="scrollArea"></div>
                <div ref={targetRef5} id={5} className="scrollArea"></div>
                <div ref={targetRef4} id={4} className="scrollArea"></div>
                <div ref={targetRef3} id={3} className="scrollArea"></div>
                <div ref={targetRef2} id={2} className="scrollArea"></div>
                <div ref={targetRef1} id={1} className="scrollArea"></div>
                <div id={'start'} className="scrollArea"></div>
            </div >
        </div>
    )
}