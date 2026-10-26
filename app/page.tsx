import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Coverage from "@/components/Coverage";
import Model from "@/components/Model";
import Pricing from "@/components/Pricing";
import Peace from "@/components/Peace";
import Premium from "@/components/Premium";
import Spv from "@/components/Spv";
import Steps from "@/components/Steps";
import Guard from "@/components/Guard";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import MobileBar from "@/components/MobileBar";
import GsapFx from "@/components/GsapFx";
import { Contact, FinalCta, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Coverage />
        <Model />
        <Pricing />
        <Peace />
        <Premium />
        <Spv />
        <Steps />
        <Guard />
        <Testimonials />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
      <GsapFx />
    </>
  );
}
