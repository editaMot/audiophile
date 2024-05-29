import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeInAnimationvariants } from "../../utils/animationsVariants";
import Button from "../Button";
import "./Hero.scss";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <motion.span
        className="hero__overline"
        variants={fadeInAnimationvariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        NEW PRODUCT
      </motion.span>
      <motion.h1
        className="hero__heading"
        variants={fadeInAnimationvariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        XX99 Mark II Headphones
      </motion.h1>
      <motion.p
        className="hero__text"
        variants={fadeInAnimationvariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </motion.p>
      <Button onClick={() => navigate("/product/4")}>See product</Button>
    </div>
  );
};

export default Hero;
