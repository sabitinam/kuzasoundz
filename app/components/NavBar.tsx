export default function NavBar (){
    return (

        <nav className = "fixed top-0 w-full z-50 bg-midnight/80 backdrop-blur-md border-b border-navy">
            <div className = "max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <span className = "text-xl font-bold tracking-widest text-cream">
                    KUZA
                </span>

                <div className = "flex items-center gap-8 text-sm text-cobalt-soft">
                    <a href = "#events" className = "hover:text-cream transition"> Events </a>
                    <a href = "#mixes" className = "hover:text-cream transition"> Mixes </a>
                    <a href = "#about" className = "hover:text-cream transition"> About </a>

                    <a href = "#events" className = "bg-gold text-midnight font-semibold px-4 py-2 rounded-full hover:bg-cream transition"> Join the movement </a>
                </div>
            </div>
        </nav>
    );
}