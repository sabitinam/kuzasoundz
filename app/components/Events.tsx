const events = [

    {
        title: "Pwani, Rum & Riddim",
        date: "JUL 11, 2026",
        location: "Bronzville Winery, Chicago",
        genre: "East African and Caribbean Music",
        featured: true,
        },

    {
        title: "NGOMALAND",
        date: "Coming Soon",
        location: "Chicago, IL",
        genre: "Amapiano, Afrobeats, Gqom, AfroTech, 3-Step, Ndombolo, Coupé Décalé",
        featured: false,
        },


    {
        title: "ZIZIVILLE",
        date: "Coming Soon",
        location: "Chicago, IL",
        genre: "Chicago House, AfroHouse, Chicago House & Deep House, Jersey Club & Baltimore Club, Ghetto House & Footwork, Funk, Disco & Neo-Soul",
        featured: false,

        },
    ];

export default function Events () {
    return(
        <section id = "events" className = "max-w-6xl mx-auto px-6 py-24">
            <h2 className = "text-3xl font-bold text-cream mb-10"> Upcoming events </h2>
            <div className = "grid grid-cols-1 md:grid-cols-3 gap-6">

                {events.map((event) => (
                    <div
                        key = {event.title}
                        className = {`rounded-xl p-6 border transition hover:-translate-y-1
                            ${ event.featured ? "bg-burgundy border-burgundy" : "bg-navy border-navy"}`}
                    >

                        <p className = "text-xs tracking-widest text-gold mb-3">
                            {event.date} · {event.genre.toUpperCase()}
                        </p>

                        <h3 className = "text-xl font-semibold text-cream mb-2">
                            {event.title}
                        </h3>

                        <p className = "text-sm text-cobalt-soft">
                            {event.location}
                        </p>
                    </div>))}
            </div>
        </section>
        );
    }