import { ClosedCaptions, FullClose, Fullscreen, Mute, Pause, Play, TheaterClose, Theaterscreen, VolumeHigh, VolumeLow } from '../icons/video-icons';
import { useEffect, useState } from 'react';

export default function MainVideo({ screen, setScreen, project }) {

    const video = document.querySelector("video");

    const [paused, setPaused] = useState(true);
    const [volume, setVolume] = useState(1);
    const [prevVolume, setPrevVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    const [animating, setAnimating] = useState(false);

    // Play / Pause functionality
    function togglePlay() {
        const video = document.querySelector("video");
        if (paused) {
            setPaused(false);
            video.play()
        } else {
            setPaused(true);
            video.pause()
        }
    }

    document.addEventListener('keydown', e => {

        // In case I put a contact form on the website or something, don't execute when user is typing
        const tagName = document.activeElement.tagName.toLowerCase();
        if (tagName === "input") return

        switch (e.key.toLowerCase()) {
            case " ":
            case "k":
                togglePlay()
                break
            case "f":
                handleFullscreen();
                break
            case "t":
                toggleScreen('theater');
                break
            case "m":
                handleMute();
                break
            case 'c':
                toggleClosedCaptions();
        }
    })

    // Toggle Screen Size
    function toggleScreen(size) {
        screen === size ? setScreen('smalltheater') : setScreen(size);
    }

    function handleFullscreen() {
        const videoContainer = document.getElementsByClassName('video')[0];
        if (document.fullscreenElement !== null) {
            document.exitFullscreen();
        } else {
            videoContainer.requestFullscreen();
        }
    }

    function adjustFullscreen() {
        screen === 'fullscreen' ? setScreen('small') : setScreen('fullscreen');
    }

    document.addEventListener('fullscreenchange', adjustFullscreen)


    // Volume Controls

    useEffect(() => {
        const sliderTrack = document.querySelector('.volume__slider__track');
        sliderTrack.style.setProperty('--volume', volume)
    }, [volume])

    function handleMute() {
        video.muted = !video.muted;
        volume === 0 ? setVolume(prevVolume) : setVolume(0)
    }

    function handleInput(e) {
        setVolume(e.target.value);
        setPrevVolume(e.target.value);
        video.volume = e.target.value;
        video.muted = e.target.value === 0;
    }

    // Duration
    const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
        minimumIntegerDigits: 2
    })
    function formatTime(time) {
        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60) % 60;
        const hours = Math.floor(time / 3600);
        if (hours === 0) {
            return `${minutes}:${leadingZeroFormatter.format(seconds)}`
        } else {
            return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`
        }
    }

    useEffect(() => {
        const video = document.querySelector("video");
        const timeline = document.querySelector(".video__controls-timeline");

        video.addEventListener('loadeddata', () => {
            setDuration(formatTime(video.duration))
        })
        video.addEventListener('timeupdate', () => {
            setCurrentTime(formatTime(video.currentTime))
            const percent = video.currentTime / video.duration;
            timeline.style.setProperty('--progress-position', percent)
        })
    }, [])


    // Closed Captions

    useEffect(() => {
        const video = document.querySelector("video");

        video.textTracks[0].mode = 'hidden'
    }, [])

    function toggleClosedCaptions() {
        const video = document.querySelector('video');
        const visible = video.textTracks[0].mode === 'showing';
        if (visible) {
            video.textTracks[0].mode = 'hidden'
        } else {
            video.textTracks[0].mode = 'showing'
        }
    }

    // Playback Speed

    function changePlaybackSpeed(e) {
        let newPlaybackRate = video.playbackRate + 0.25;
        if (newPlaybackRate > 2) newPlaybackRate = 0.25;
        video.playbackRate = newPlaybackRate;
        e.target.innerText = `${newPlaybackRate}x`;
    }


    // Timeline

    useEffect(() => {
        setAnimating(true);
        setTimeout(() => setAnimating(false), 1000);
    }, [screen])

    useEffect(() => {
        if (animating) return
        const timeline = document.querySelector(".video__controls-timeline");
        const previewImg = document.querySelector('.preview-img');
        const thumbnail = document.querySelector('.video__thumbnail');
        const container = document.querySelector('.video');
        const video = document.querySelector("video");

        const rect = timeline.getBoundingClientRect();
        let isScrubbing = false;

        function handleTimelineUpdate(e) {
            const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
            // const previewImgNumber = Math.max(1, Math.floor((percent * duration) / 10));
            // previewImg.src = trailmap;
            timeline.style.setProperty('--preview-position', percent);

            if (isScrubbing) {
                e.preventDefault()
                // thumbnail.src = trailmap;
                timeline.style.setProperty('--progress-position', percent)
            }
        }

        function toggleScrubbing(e) {
            const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
            isScrubbing = (e.buttons & 1) === 1;
            container.classList.toggle('scrubbing', isScrubbing);
            if (isScrubbing) {
                setPaused(true)
                video.pause()
            } else {
                video.currentTime = percent * video.duration;
            }
            handleTimelineUpdate(e)
        }

        timeline.addEventListener('mousemove', handleTimelineUpdate)
        timeline.addEventListener('mousedown', toggleScrubbing)
        document.addEventListener('mouseup', e => isScrubbing ? toggleScrubbing(e) : '')
        document.addEventListener('mousemove', e => isScrubbing ? handleTimelineUpdate(e) : '')

    }, [animating])




    return (
        <div className='video' pause={paused.toString()} screen={screen}>

            <img className='video__thumbnail' />

            <div className='video__controls'>

                <div className='video__controls-timeline'>
                    <div className='timeline'>
                        {/* <img className='preview-img' /> */}
                        <div className='thumb-indicator' />
                    </div>
                </div>


                <div className='video__controls-controls'>
                    <button onClick={togglePlay} className='btn btn__play-pause'>
                        {paused ? <Play /> : <Pause />}
                    </button>

                    <div className='volume'>
                        <button className='btn btn__mute' onClick={handleMute}>
                            {volume >= .5
                                ? <VolumeHigh />
                                :
                                volume > 0
                                    ? <VolumeLow />
                                    : <Mute />
                            }
                        </button>
                        <div className='volume__slider'>
                            <div className='volume__slider__track' />
                            <input
                                type='range'
                                className='volume__slider__range'
                                min='0'
                                max='1'
                                step='any'
                                value={volume}
                                onInput={handleInput}
                            ></input>
                        </div>
                    </div>

                    <div className='duration'>
                        <div className='duration__current-time'>{currentTime}</div>
                        /
                        <div className='duration__total-time'>{duration}</div>
                    </div>


                    <button onClick={changePlaybackSpeed} className='btn btn__playback-speed'>
                        1x
                    </button>

                    <button onClick={toggleClosedCaptions} className='btn'>
                        <ClosedCaptions />
                    </button>

                    {screen === 'fullscreen' ? '' :
                        (
                            <button onClick={() => toggleScreen('theater')} className='btn btn__theater-screen'>
                                {screen === 'theater' ? <TheaterClose /> : <Theaterscreen />}
                            </button>
                        )
                    }
                    <button onClick={handleFullscreen} className='btn btn__full-screen'>
                        {screen === 'fullscreen' ? <FullClose /> : <Fullscreen />}
                    </button>
                </div>
            </div>
            <video src={project[0].video} onClick={togglePlay} >
                <track kind='captions' srcLang='en' src={project[0].subtitles} />
            </video>
        </div>
    )
}