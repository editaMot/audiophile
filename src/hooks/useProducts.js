import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlicer";

const useProducts = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return { isLoading, data, error };
};

export default useProducts;
