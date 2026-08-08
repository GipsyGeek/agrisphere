import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  getProductById,
  createOrder,
} from "@/features/marketplace/services/marketplace.service";

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderError, setOrderError] = useState("");
  const [isOrdering, setIsOrdering] = useState(false);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id!),
    enabled: Boolean(id),
  });

  if (isLoading) {
    return (
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border bg-white p-8">
          <p className="text-slate-500">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border bg-white p-8">
          <h1 className="text-2xl font-bold">Product not found</h1>

          <p className="mt-2 text-slate-500">
            This product may have been removed or is no longer available.
          </p>

          <Link to="/dashboard/marketplace">
            <Button className="mt-6">
              Back to Marketplace
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const availableQuantity = product.quantity ?? 0;
  const totalPrice = Number(product.price) * orderQuantity;

  function handleOrderClick() {
    setOrderError("");

    if (availableQuantity <= 0) {
      setOrderError("This product is currently out of stock.");
      return;
    }

    if (orderQuantity < 1) {
      setOrderError("Order quantity must be at least 1.");
      return;
    }

    if (orderQuantity > availableQuantity) {
      setOrderError(
        `Only ${availableQuantity} ${product.unit} available.`,
      );
      return;
    }

    setShowOrderForm(true);
  }

  async function handlePlaceOrder() {
    setOrderError("");

    if (orderQuantity < 1) {
      setOrderError("Order quantity must be at least 1.");
      return;
    }

    if (orderQuantity > availableQuantity) {
      setOrderError(
        `Only ${availableQuantity} ${product.unit} available.`,
      );
      return;
    }

    try {
      setIsOrdering(true);

      await createOrder({
  productId: product.id,
  quantity: orderQuantity,
});

      setShowOrderForm(false);
      setOrderQuantity(1);

      alert("Order placed successfully!");
    } catch (err) {
      console.error(err);

      setOrderError(
        err instanceof Error
          ? err.message
          : "Failed to place order.",
      );
    } finally {
      setIsOrdering(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/dashboard/marketplace"
          className="text-sm font-medium text-green-700 hover:underline"
        >
          ← Back to Marketplace
        </Link>

        <h1 className="mt-4 text-4xl font-bold">
          {product.title}
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          Product details
        </p>
      </div>

      {/* Product */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main information */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Category
                </p>

                <p className="mt-1 text-lg font-semibold">
                  {product.category}
                </p>
              </div>

              <div className="sm:text-right">
                <p className="text-sm font-medium text-slate-500">
                  Price
                </p>

                <p className="mt-1 text-4xl font-bold text-green-700">
                  KES {Number(product.price).toLocaleString()}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  per {product.unit}
                </p>
              </div>
            </div>

            <div className="my-8 border-t" />

            {/* Product information */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Quantity Available
                </p>

                <p className="mt-1 text-lg font-semibold">
                  {product.quantity} {product.unit}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  County
                </p>

                <p className="mt-1 text-lg font-semibold">
                  {product.county || "Not specified"}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Availability
                </p>

                <p className="mt-1 text-lg font-semibold capitalize">
                  {product.status || "Available"}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Listed
                </p>

                <p className="mt-1 text-lg font-semibold">
                  {product.created_at
                    ? new Date(
                        product.created_at,
                      ).toLocaleDateString()
                    : "Recently"}
                </p>
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <>
                <div className="my-8 border-t" />

                <div>
                  <h2 className="text-xl font-semibold">
                    Description
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {product.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Order panel */}
        <div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Interested in this product?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Choose how much you would like to order.
            </p>

            {!showOrderForm ? (
              <Button
                className="mt-6 w-full"
                disabled={availableQuantity <= 0}
                onClick={handleOrderClick}
              >
                {availableQuantity > 0
                  ? "Order Product"
                  : "Out of Stock"}
              </Button>
            ) : (
              <div className="mt-6 rounded-xl border bg-slate-50 p-5">
                <h3 className="text-lg font-semibold">
                  Place Order
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {product.title} — KES{" "}
                  {Number(product.price).toLocaleString()} per{" "}
                  {product.unit}
                </p>

                {/* Quantity */}
                <div className="mt-5">
                  <label
                    htmlFor="order-quantity"
                    className="mb-2 block text-sm font-medium"
                  >
                    Quantity
                  </label>

                  <input
                    id="order-quantity"
                    type="number"
                    min="1"
                    max={availableQuantity}
                    value={orderQuantity}
                    onChange={(event) => {
                      const value = Number(event.target.value);

                      setOrderQuantity(
                        Number.isNaN(value) ? 1 : value,
                      );

                      setOrderError("");
                    }}
                    className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-green-600"
                  />

                  <p className="mt-2 text-xs text-slate-500">
                    Maximum available: {availableQuantity}{" "}
                    {product.unit}
                  </p>
                </div>

                {/* Total */}
                <div className="mt-5 rounded-lg bg-white p-4">
                  <p className="text-sm text-slate-500">
                    Order Total
                  </p>

                  <p className="mt-1 text-2xl font-bold text-green-700">
                    KES {totalPrice.toLocaleString()}
                  </p>
                </div>

                {/* Error */}
                {orderError && (
                  <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                    {orderError}
                  </div>
                )}

                {/* Actions */}
                <div className="mt-5 flex gap-3">
                  <Button
                    type="button"
                    className="flex-1"
                    onClick={handlePlaceOrder}
                    disabled={isOrdering}
                  >
                    {isOrdering
                      ? "Placing Order..."
                      : "Place Order"}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowOrderForm(false);
                      setOrderError("");
                    }}
                    disabled={isOrdering}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            <Link
              to="/dashboard/marketplace"
              className="mt-3 block"
            >
              <Button
                type="button"
                variant="outline"
                className="w-full"
              >
                Back to Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}