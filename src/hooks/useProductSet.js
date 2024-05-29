import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductSet } from "../redux/productSetSlicer";

const useProductSet = (id) => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.productSet);

  useEffect(() => {
    if (id) dispatch(fetchProductSet(id));
  }, [dispatch, id]);

  return { isLoading, data, error };
};

export default useProductSet;
