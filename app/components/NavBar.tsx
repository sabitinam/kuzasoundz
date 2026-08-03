'use client';
import {useState} from 'react';

export default function NavBar (){

    const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className = "fixed top-0 w-full z-50 bg-midnight/80 backdrop-blur-md border-b border-navy">
            <div className = "max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <span className = "text-xl font-bold tracking-widest text-cream">
                    KUZA
                </span>

                <div className = "hidden md:flex items-center gap-8 text-sm text-cobalt-soft">
                    <a href = "#events" className = "hover:text-cream transition"> Events </a>
                    <a href = "#mixes" className = "hover:text-cream transition"> Mixes </a>
                    <a href = "#about" className = "hover:text-cream transition"> About </a>

                    <a href = "#events" className = "bg-gold text-midnight font-semibold px-4 py-2 rounded-full hover:bg-cream transition"> Join the movement </a>
                </div>

                <button
                    className = "flex"
                    onClick = { () => setIsOpen (!isOpen)}
                    aria-label = "Toggle Menu"
                >

                {/* I copied the svg from heroicon.com */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            {/* IF isOpen IS TRUE, DRAW THIS BOX: */}
            {isOpen && (
              <div className="bg-midnight p-4 flex flex-col gap-4">
                <a href="#events" className="py-2 hover:text-gold transition">Events</a>
                <a href="#mixes" className="py-2 hover:text-gold transition">Mixes</a>
                <a href="#about" className="py-2 hover:text-gold transition">About</a>
              </div>
            )}

        </nav>
    );

}