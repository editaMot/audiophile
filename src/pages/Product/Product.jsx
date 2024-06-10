import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import GearCard from "../../ui/GearCard";
import Loader from "../../ui/Loader";
import NotFound from "../../ui/NotFound";
import ProductCard from "../../ui/ProductCard";
import ProductsCTA from "../../ui/ProductsCTA";
import ProductsSection from "../../ui/ProductsSection/ProductsSection";

const Product = () => {
  const { productId } = useParams();
  const { isLoading, data, error } = useProduct(productId);

  if (isLoading) return <Loader />;

  return !Object.keys(data).length ? (
    <NotFound />
  ) : (
    <ProductsSection>
      <ProductCard product={data} productDetails={true} />
      <ProductsCTA />
      <GearCard />
    </ProductsSection>
  );
};

export default Product;
