import { supabase } from "@/services/supabase/client";

export type CreateProductInput = {
  title: string;
  category: string;
  description: string;
  price: number;
  unit: string;
  quantity: number;
  county: string;
};

export type CreateOrderInput = {
  productId: string;
  quantity: number;
};

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("status", "available")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function createProduct(input: CreateProductInput) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in to sell produce.");
  }

  const { data, error } = await supabase
    .from("products")
    .insert({
      seller_id: user.id,
      title: input.title,
      category: input.category,
      description: input.description || null,
      price: input.price,
      unit: input.unit,
      quantity: input.quantity,
      county: input.county,
      status: "available",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function createOrder(input: CreateOrderInput) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in to place an order.");
  }

  if (input.quantity <= 0) {
    throw new Error("Order quantity must be greater than zero.");
  }

  // Get the product
  const { data: product, error: productError } = await supabase
    .from("products")
    .select("id, seller_id, price, quantity, status")
    .eq("id", input.productId)
    .single();

  if (productError) {
    throw productError;
  }

  if (!product) {
    throw new Error("Product not found.");
  }

  // Check availability
  if (product.status !== "available") {
    throw new Error("This product is no longer available.");
  }

  // Check stock
  if (
    product.quantity === null ||
    product.quantity < input.quantity
  ) {
    throw new Error("There is not enough stock available.");
  }

  // Prevent seller from buying their own product
  if (product.seller_id === user.id) {
    throw new Error("You cannot order your own product.");
  }

  // Calculate total
  const totalPrice =
    Number(product.price) * input.quantity;

  // Create order
  const { data, error } = await supabase
    .from("orders")
    .insert({
      buyer_id: user.id,
      seller_id: product.seller_id,
      product_id: product.id,
      quantity: input.quantity,
      unit_price: product.price,
      total_price: totalPrice,
      status: "pending",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}