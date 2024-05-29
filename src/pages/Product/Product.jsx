import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import GearCard from "../../ui/GearCard";
import Loader from "../../ui/Loader";
import NotFound from "../../ui/NotFound";
import ProductCard from "../../ui/ProductCard";
import ProductsCTA from "../../ui/ProductsCTA";

const Product = () => {
  const { productId } = useParams();
  const { isLoading, data, error } = useProduct(productId);

  if (isLoading) return <Loader />;

  return !Object.keys(data).length ? (
    <NotFound />
  ) : (
    <>
      <ProductCard product={data} productDetails={true} />
      <ProductsCTA />
      <GearCard />
    </>
  );
};

export default Product;
