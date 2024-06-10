import useProducts from "../../hooks/useProducts";
import GearCard from "../../ui/GearCard";
import Loader from "../../ui/Loader";
import ProductCard from "../../ui/ProductCard/ProductCard";
import ProductsCTA from "../../ui/ProductsCTA";
import ProductsSection from "../../ui/ProductsSection/ProductsSection";

const Speakers = () => {
  const { isLoading, data, error } = useProducts();

  if (isLoading) return <Loader />;
  return (
    <>
      <ProductsSection>
        {data
          .filter((item) => item.category === "speakers")
          .sort((a, b) => {
            return a.new === b.new ? 0 : a.new ? -1 : 1;
          })
          .map((speaker, index) => (
            <ProductCard
              key={speaker.name}
              product={speaker}
              reverseRow={index % 2 === 0}
            />
          ))}
        <ProductsCTA />
        <GearCard />
      </ProductsSection>
    </>
  );
};

export default Speakers;
