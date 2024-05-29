import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeInAnimationvariants } from "../../utils/animationsVariants";
import Button from "../Button";
import "./SpeakerCard.scss";

const SpeakerCard = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="speaker-card"
      variants={fadeInAnimationvariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h3 className="speaker-card__heading">ZX7 SPEAKER</h3>
      <Button kind="secondary" onClick={() => navigate("/product/5")}>
        See product
      </Button>
    </motion.div>
  );
};

export default SpeakerCard;
