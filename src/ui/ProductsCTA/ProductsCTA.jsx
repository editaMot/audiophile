import { motion } from "framer-motion";
import EarphonesImg from "../../assets/desktop/image-category-thumbnail-earphones.png";
import HeadphonesImg from "../../assets/desktop/image-category-thumbnail-headphones.png";
import SpeakersImg from "../../assets/desktop/image-category-thumbnail-speakers.png";
import { fadeInAnimationvariants } from "../../utils/animationsVariants";
import Card from "../Card";
import "./ProductsCTA.scss";

const ProductsCTA = () => {
  return (
    <motion.section
      className="products-cta"
      variants={fadeInAnimationvariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Card heading="Headphones" image={HeadphonesImg} to={"/headphones"} />
      <Card heading="Speakers" image={SpeakersImg} to={"/speakers"} />
      <Card heading="Earphones" image={EarphonesImg} to={"/earphones"} />
    </motion.section>
  );
};

export default ProductsCTA;
