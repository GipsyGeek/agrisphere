import { ProductCard } from "./product-card";
import { useProducts } from "../hooks/use-products";

export function ProductGrid() {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (!data?.length) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        No products found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}