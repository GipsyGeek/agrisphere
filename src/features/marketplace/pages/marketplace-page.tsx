import { useMarketplace } from "@/hooks/use-marketplace";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function MarketplacePage() {
  const { data, isLoading, error } = useMarketplace();

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border bg-white p-8">
          <p className="text-slate-500">
            Loading marketplace...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <p className="text-red-700">
            Failed to load products.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Marketplace
          </h1>

          <p className="mt-2 text-lg text-slate-500">
            Buy and sell agricultural products.
          </p>
        </div>

        <Link to="/dashboard/marketplace/new">
          <Button>
            Sell Produce
          </Button>
        </Link>
      </div>

      {/* Empty state */}
      {data?.length === 0 ? (
        <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold">
            No products available
          </h2>

          <p className="mt-2 text-slate-500">
            Be the first farmer to list produce on the marketplace.
          </p>

          <Link to="/dashboard/marketplace/new">
            <Button className="mt-6">
              Sell Produce
            </Button>
          </Link>
        </div>
      ) : (
        /* Product grid */
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data?.map((product: any) => (
            <div
              key={product.id}
              className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">
                {product.title}
              </h3>

              <p className="mt-3 text-3xl font-bold text-green-700">
                KES {Number(product.price).toLocaleString()}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Category: {product.category}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {product.quantity} {product.unit}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {product.county || "County not specified"}
              </p>

              {product.description && (
                <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                  {product.description}
                </p>
              )}

              <Link
                to={`/dashboard/marketplace/${product.id}`}
                className="block"
              >
                <Button className="mt-6 w-full">
                  View Product
                </Button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}