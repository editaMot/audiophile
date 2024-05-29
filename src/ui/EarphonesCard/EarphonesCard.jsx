import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeInAnimationvariants } from "../../utils/animationsVariants";
import Button from "../Button";
import "./EarphonesCard.scss";

const EarphonesCard = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="earphones-card"
      variants={fadeInAnimationvariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="earphones-card__image"></div>
      <div className="earphones-card__content">
        <h3 className="earphones-card__heading">YX1 EARPHONES</h3>
        <Button kind="secondary" onClick={() => navigate("/product/1")}>
          See product
        </Button>
      </div>
    </motion.div>
  );
};

export default EarphonesCard;
