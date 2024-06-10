import EarphonesCard from "../../ui/EarphonesCard/EarphonesCard";
import GearCard from "../../ui/GearCard";
import Hero from "../../ui/Hero";
import ProductsCTA from "../../ui/ProductsCTA";
import ProductsSection from "../../ui/ProductsSection/ProductsSection";
import SpeakerCard from "../../ui/SpeakerCard";
import SpeakerSmCard from "../../ui/SpeakerSmCard/SpeakerSmCard";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsSection>
        <ProductsCTA />
        <SpeakerSmCard />
        <SpeakerCard />
        <EarphonesCard />
        <GearCard />
      </ProductsSection>
    </>
  );
};

export default Home;
