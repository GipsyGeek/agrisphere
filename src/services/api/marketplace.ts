import { supabase } from "@/services/supabase/client";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("status", "available")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}