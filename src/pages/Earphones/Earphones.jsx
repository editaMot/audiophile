import useProducts from "../../hooks/useProducts";
import GearCard from "../../ui/GearCard";
import Loader from "../../ui/Loader";
import ProductCard from "../../ui/ProductCard/ProductCard";
import ProductsCTA from "../../ui/ProductsCTA";
import ProductsSection from "../../ui/ProductsSection/ProductsSection";

const Earphones = () => {
  const { isLoading, data, error } = useProducts();

  if (isLoading) return <Loader />;

  return (
    <>
      <ProductsSection>
        {data
          .filter((item) => item.category === "earphones")
          .sort((a, b) => {
            return a.new === b.new ? 0 : a.new ? -1 : 1;
          })
          .map((earphones, index) => (
            <ProductCard
              key={earphones.name}
              product={earphones}
              reverseRow={index % 2 === 0}
            />
          ))}
      </ProductsSection>
      <ProductsCTA />
      <GearCard />
    </>
  );
};

export default Earphones;
