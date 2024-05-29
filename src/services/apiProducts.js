import supabase from "./supabase";

export const getProducts = async () => {
  let query = supabase.from("products").select("*");

  const { data, error } = await query;

  if (error) throw new Error("Products could not be loaded");

  return { data };
};

export const getProductById = async (id) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Product could not be loaded");

  return data;
};

export const getProductSet = async (id) => {
  const { data, error } = await supabase
    .from("product-set")
    .select("*")
    .eq("product_id", id);

  if (error) throw new Error("Product set could not be loaded");

  return data;
};
