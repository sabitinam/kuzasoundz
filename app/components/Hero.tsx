'use client'; //Required in Next.js when using special hooks like useState

import {useState} from  'react'; //The useState hook gives component a piece of memory


const videos = [
    '/videos/v3.mp4'
    ];

export default function Hero () {

    const [videoIndex, setVideoIndex] = useState(0);

    const handleVideoEnded = () => {
        setVideoIndex( (prevIndex) => (prevIndex + 1) % videos.length);
    }

    return (
        <section className = "min-h-screen flex items-center justify-center px-6">

        {/* 1. Video goes here as a background layer */}
            <video
                src = {videos[videoIndex]}
                onEnded = {handleVideoEnded}
                autoPlay
                muted
                playsInline
                className = "absolute inset-0 w-full h-full object-cover -z-10"
            />

            <div className = "max-w-4xl text-center">
                <p className = "text-sm tracking-[0.3em] text-cobalt-soft mb-6">
                    KEEP UNDERGROUND ALIVE
                </p>

                <h1 className = "text-4xl md:text-5xl font-bold text-cream leading-tight mb-8">
                    SOUND. <br />CULTURE. <br />CONNECTION.
                </h1>

                <p className = "text-lg text-cobalt-soft max-w-xl mx-auto mb-10">
                    Chicago&apos;s home for African &amp; Diaspora music - events, mixes and moments
                </p>

                <p className = "text-lg text-cobalt-soft max-w-xl mx-auto mb-10">
                    Presented By DJ TEEZA
                </p>

                <div className = "flex items-center justify-center gap-4">
                    <a href = "#events" className = "bg-gold text-midnight font-semibold px-8 py-3 rounded-full hover:bg-cream transition">
                        Upcoming events
                    </a>

                    <a href = "#mixes" className = "border border-cobalt text-cobalt-soft px-8 py-3 rounded-full hover:text-cream hover:border-cobalt-soft transition">
                        Listen to mixes
                    </a>
                </div>
            </div>
        </section>
        );
    }