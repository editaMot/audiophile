import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/productSlicer";

const useProduct = (id) => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (id) dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return { isLoading, data, error };
};

export default useProduct;
