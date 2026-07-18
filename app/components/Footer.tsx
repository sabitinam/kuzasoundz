export default function Footer () {

    return (

        <footer className = "border-t border-navy">

            <div className = "max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">

                <span className = "text-sm tracking-widest text-cream font-bold">
                    KUZA
                </span>

                <p className = "text-xs text-cobalt-soft">
                    © 2026 kuzasoundz · Keep Underground Alive
                </p>

                <div className = "flex gap-6 text-xs text-cobalt-soft">

                    <a href = "https://instagram.com/kuzasoundz" className = "hover: text-cream transition">
                        Instagram
                    </a>

                    <a href = "https://posh.vip/e/kuzasoundz" className = "hover: text-cream transition">
                        Tickets
                    </a>

                </div>
            </div>
        </footer>
        );
    }