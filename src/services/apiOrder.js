import supabase from "./supabase";


export const createOrder = async (newOrder) => {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ ...newOrder }])
    .select();

  if (error) {
    throw new Error("Order could not be created");
  }
  return data;

  
};
