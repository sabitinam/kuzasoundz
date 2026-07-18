const mixes = [

    {
        title: "Pino Lovers Vol.1",
        genre: "Amapiano",
        duration: "58:23",
        featured: false,
        },

    {
        title: "AfroHouse Journey EP.1",
        genre: "AfroHouse",
        duration: "58:23",
        featured: false,
        },

    {
        title: "Kuza Live @ Pwani",
        genre: "Live Set",
        duration: "01:08:19",
        featured: true,
        },

    ];


export default function Mixes () {

    return (

        <section id = "mixes" className = "max-w-6xl mx-auto px-6 py-24">

             <h2 className = "text-3xl font-bold text-cream mb-10"> Latest mixes </h2>

             <div className = "grid grid-cols-2 md:grid-cols-4 gap-6">
                {mixes.map( (mix) => (
                    <div
                        key = {mix.title}
                        className = "group cursor-pointer"
                    >

                        <div
                            className = {`aspect-square rounded-xl mb-3 items-end p-4 transition group-hover:scale-109 ${
                                mix.featured
                                ? "bg-gradient-to-br from burgundy to-midnight border border-gold"
                                : "bg-gradient-to-br from-navy to-midnight border border-navy"
                            }`}
                        >
                            {mix.featured && (
                                <span className = "text-xs font-semibold text-gold tracking-widest">
                                    LIVE SET
                                </span>
                            )}
                        </div>


                        <h3 className = "text-sm font-semibold text-cream"> {mix.title} </h3>

                        <p className = "text-xs text-cobalt-soft">
                            {mix.genre} · {mix.duration}
                        </p>

                    </div>
                    )
                )}
             </div>
        </section>
        );
    }