import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeInAnimationvariants } from "../../utils/animationsVariants";
import Button from "../Button";
import "./SpeakerSmCard.scss";

const SpeakerSmCard = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="speakers-card"
      variants={fadeInAnimationvariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="speakers-card__image"></div>
      <div className="speakers-card__content">
        <h3 className="speakers-card__heading">ZX9 SPEAKER</h3>
        <p className="speakers-card__text">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button kind="dark" onClick={() => navigate("/product/6")}>
          See product
        </Button>
      </div>
    </motion.div>
  );
};

export default SpeakerSmCard;
