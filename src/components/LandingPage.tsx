import Features from "./Features";
import Hero from "./Hero";
import Simplify from "./Simplify";
// import Testimonials from "./Testimonials";
import Testimonials from "./TestimonialsCarousel";

export default function LandingPage() {
  return (
    <main className="">
      <Hero />
      <Features />
      <Testimonials />
      <Simplify />
    </main>
  );
}
