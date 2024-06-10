import ProductCard from "../../ui/ProductCard/ProductCard";
import ProductsCTA from "../../ui/ProductsCTA";
import ProductsSection from "../../ui/ProductsSection/ProductsSection";
import GearCard from "../../ui/GearCard";
import useProducts from "../../hooks/useProducts";
import Loader from "../../ui/Loader";

const Headphones = () => {
  const { isLoading, data, error } = useProducts();

  if (isLoading) return <Loader />;

  return (
    <>
      <ProductsSection>
        {data
          .filter((item) => item.category === "headphones")
          .sort((a, b) => {
            return a.new === b.new ? 0 : a.new ? -1 : 1;
          })
          .map((headphones, index) => (
            <ProductCard
              key={headphones.name}
              product={headphones}
              reverseRow={index % 2 === 0}
            />
          ))}

        <ProductsCTA />
        <GearCard />
      </ProductsSection>
    </>
  );
};

export default Headphones;
