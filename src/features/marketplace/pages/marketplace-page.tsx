export function MarketplacePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-white p-6">
        <h1 className="text-3xl font-bold">Marketplace</h1>
        <p className="mt-2 text-slate-600">
          Buy and sell agricultural products.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="font-semibold">Products</h2>
          <p className="mt-2 text-sm text-slate-500">
            Browse produce from verified farmers.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h2 className="font-semibold">Categories</h2>
          <p className="mt-2 text-sm text-slate-500">
            Seeds, crops, livestock, fertilizers and more.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h2 className="font-semibold">Featured</h2>
          <p className="mt-2 text-sm text-slate-500">
            Recommended listings for you.
          </p>
        </div>
      </div>
    </div>
  );
}