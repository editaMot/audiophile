import { motion } from "framer-motion";
import { fadeInAnimationvariants } from "../../utils/animationsVariants";
import BoxContent from "../BoxContent/BoxContent";
import "./ProductDetails.scss";

const ProductDetails = ({ features }) => {
  const paragraphs =
    features?.split("\n").map((string) => string.replace(/\\n/g, "")) || [];

  return (
    <motion.div
      className="product-details"
      variants={fadeInAnimationvariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="product-details__features">
        <h3>Features</h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="product-details__content">
        <h3>In the box</h3>
        <BoxContent />
      </div>
    </motion.div>
  );
};

export default ProductDetails;
