import Masthead   from "@/components/Masthead";
import Hero       from "@/components/Hero";
import MarqueeSection from "@/components/Marquee";
import Mission    from "@/components/Mission";
import Services   from "@/components/Services";
import Packages   from "@/components/Packages";
import Process    from "@/components/Process";
import Portfolio  from "@/components/Portfolio";
import Gallery    from "@/components/Gallery";
import Lookbook   from "@/components/Lookbook";
import Newsletter from "@/components/Newsletter";
import Footer     from "@/components/Footer";
export const revalidate = 0;
export default function Home() {


  return (
    <>
      <Masthead />
      <main id="main">
        <Hero />
        <MarqueeSection />
        <Mission />
        <Services />
        <Packages />
        <Process />
        <Portfolio />
        <Gallery />
        <Lookbook />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
