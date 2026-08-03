import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Mixes from "./components/Mixes";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <main className = "min-h-screen">
        <NavBar />
        <Hero />
        <Events />
        <Mixes />
        <About />
        <Footer />

        <section className = "py-16 flex items-center justify-center">
            <h1 className = "text-5xl font-bold text-gold"> KUZA SOUNDZ </h1>
        </section>
      </main>
  );
}