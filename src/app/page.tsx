import Header from "./components/Header";
import Hero from "./components/Hero";
import MeuVideoPlayer from "./components/Video";
import ProductCarousel from "./components/ProductCarousel";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white">
      <Header />
      <Hero />
      <MeuVideoPlayer />
      <ProductCarousel />
      <About />
      <Footer />
    </main>
  );
}