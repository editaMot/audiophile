import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeInAnimationvariants } from "../../utils/animationsVariants";
import AddToCart from "../AddToCart";
import Button from "../Button";
import ProductDetails from "../ProductDetails";
import "./ProductCard.scss";

const ProductCard = ({ product, reverseRow, productDetails = false }) => {
  const { id, new: newProduct, name, description, image, features } = product;
  const navigate = useNavigate();

  return (
    <motion.div
      className={`product-card-wrapper ${
        productDetails && "product-card-wrapper--details"
      }`}
      variants={fadeInAnimationvariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      {productDetails && (
        <Button kind="text-lower" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      )}
      <div
        className={`product-card ${reverseRow && "product-card--reverse"} ${
          productDetails && "product-card--details"
        }`}
      >
        <img src={image} alt="product" className="product-card__img" />
        <div
          className={`product-card__content ${
            productDetails && "product-card__content--details"
          }`}
        >
          {newProduct && <span className="product-card__new">new product</span>}
          <h2 className="product-card__headline">{name}</h2>
          <p className="product-card__description">{description}</p>
          {productDetails ? (
            <AddToCart product={product} />
          ) : (
            <Button onClick={() => navigate(`/product/${id}`)}>
              See product
            </Button>
          )}
        </div>
      </div>
      {productDetails && <ProductDetails features={features} />}
    </motion.div>
  );
};

export default ProductCard;
