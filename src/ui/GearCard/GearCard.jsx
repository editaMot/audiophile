import { motion } from "framer-motion";
import { fadeInAnimationvariants } from "../../utils/animationsVariants";
import "./GearCard.scss";

const GearCard = () => {
  return (
    <motion.div
      className="gear-card"
      variants={fadeInAnimationvariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="gear-card__image"></div>
      <div className="gear-card__content">
        <h4 className="gear-card__heading">
          Bringing you the{" "}
          <span className="gear-card__heading--highlited">best</span> audio gear
        </h4>
        <p className="gear-card__text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </motion.div>
  );
};

export default GearCard;
