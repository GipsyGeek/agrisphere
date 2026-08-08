import { supabase } from "@/services/supabase/client";

export async function getMyOrders() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in to view your orders.");
  }

  const { data, error } = await supabase
    .from("orders")
    .select(`
      id,
      product_id,
      seller_id,
      quantity,
      unit_price,
      total_price,
      status,
      created_at,
      products (
        title,
        category,
        unit,
        county
      )
    `)
    .eq("buyer_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
}