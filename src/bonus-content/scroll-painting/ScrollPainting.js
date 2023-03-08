import React, { useEffect, useMemo, useRef, useState } from 'react';
import './ScrollPainting.scss';
import { images } from './self-portrait-images';

export default function ScrollPainting() {
    // I tried refactoring these refs into an array with a single useRef declaration, but performance lagged.
    // When they're declared individually like this, the scrolling animation is buttery smooth.
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
    const targetRefs = [targetRef1, targetRef2, targetRef3, targetRef4, targetRef5, targetRef6, targetRef7, targetRef8, targetRef9, targetRef10,
        targetRef11, targetRef12, targetRef13, targetRef14, targetRef15, targetRef16, targetRef17, targetRef18, targetRef19,
        targetRef20, targetRef21, targetRef22, targetRef23];
    const scrollInitialized = useRef(false);
    const [count, setCount] = useState(0);
    const [fade, setFade] = useState(false);
    const [ended, endAnimation] = useState(false);


    const callbackFunction = entries => {
        const [entry] = entries;
        const val = parseInt(entry.target.id);
        if (entry.isIntersecting && val === 23) return endAnimation(true);
        if (!entry.isIntersecting && val === 23) endAnimation(false);
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
        const observers = Array(23).fill(new IntersectionObserver(callbackFunction, options));
        targetRefs.map((ref, idx) => {
            if (ref.current) observers[idx].observe(ref.current);
        })

        if (!scrollInitialized.current) {
            scrollInitialized.current = true;
            setTimeout(() => setCount(0), 50);
        }

        return
    }, [...targetRefs, options])


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
                {targetRefs.map((ref, idx) => {
                    return (
                        <div
                            ref={ref}
                            id={23 - idx}
                            className="scrollArea"
                            key={23 - idx}
                        ></div>
                    )
                })}
                <div id={'start'} className="scrollArea"></div>
            </div >
        </div>
    )
}