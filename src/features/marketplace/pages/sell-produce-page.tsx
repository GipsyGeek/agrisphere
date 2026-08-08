import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  createProduct,
  type CreateProductInput,
} from "@/features/marketplace/services/marketplace.service";

const KENYAN_COUNTIES = [
  "Mombasa",
  "Kwale",
  "Kilifi",
  "Tana River",
  "Lamu",
  "Taita-Taveta",
  "Garissa",
  "Wajir",
  "Mandera",
  "Marsabit",
  "Isiolo",
  "Meru",
  "Tharaka-Nithi",
  "Embu",
  "Kitui",
  "Machakos",
  "Makueni",
  "Nyandarua",
  "Nyeri",
  "Kirinyaga",
  "Murang'a",
  "Kiambu",
  "Turkana",
  "West Pokot",
  "Samburu",
  "Trans Nzoia",
  "Uasin Gishu",
  "Elgeyo-Marakwet",
  "Nandi",
  "Baringo",
  "Laikipia",
  "Nakuru",
  "Narok",
  "Kajiado",
  "Kericho",
  "Bomet",
  "Kakamega",
  "Vihiga",
  "Bungoma",
  "Busia",
  "Siaya",
  "Kisumu",
  "Homa Bay",
  "Migori",
  "Kisii",
  "Nyamira",
  "Nairobi",
] as const;

export function SellProducePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState<CreateProductInput>({
    title: "",
    category: "",
    description: "",
    price: 0,
    unit: "",
    quantity: 1,
    county: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]:
        name === "price" || name === "quantity"
          ? Number(value)
          : value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.title.trim()) {
      setError("Please enter a product name.");
      return;
    }

    if (!form.category) {
      setError("Please select a category.");
      return;
    }

    if (!form.price || form.price <= 0) {
      setError("Please enter a valid price.");
      return;
    }

    if (!form.unit) {
      setError("Please select a unit.");
      return;
    }

    if (!form.quantity || form.quantity <= 0) {
      setError("Please enter a valid quantity.");
      return;
    }

    if (!form.county) {
      setError("Please select a county.");
      return;
    }

    try {
      setIsSaving(true);

      await createProduct(form);

      navigate("/dashboard/marketplace");
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to create product.",
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Sell Produce</h1>

        <p className="mt-2 text-lg text-slate-500">
          Create a new marketplace listing.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border bg-white p-8 shadow-sm"
      >
        <div className="grid gap-6 md:grid-cols-2">

          {/* Product Name */}
          <div>
            <label className="mb-2 block font-medium">
              Product Name
            </label>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Maize"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block font-medium">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-green-600"
            >
              <option value="">Select category</option>
              <option value="Cereals">Cereals</option>
              <option value="Legumes">Legumes</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Tubers">Tubers</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block font-medium">
              Price (KES)
            </label>

            <input
              name="price"
              type="number"
              min="0"
              value={form.price || ""}
              onChange={handleChange}
              placeholder="4800"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          {/* Unit */}
          <div>
            <label className="mb-2 block font-medium">
              Unit
            </label>

            <select
              name="unit"
              value={form.unit}
              onChange={handleChange}
              className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-green-600"
            >
              <option value="">Select unit</option>
              <option value="50kg Bag">50kg Bag</option>
              <option value="90kg Bag">90kg Bag</option>
              <option value="kg">kg</option>
              <option value="Crate">Crate</option>
              <option value="Box">Box</option>
              <option value="Bunch">Bunch</option>
              <option value="Piece">Piece</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="mb-2 block font-medium">
              Quantity
            </label>

            <input
              name="quantity"
              type="number"
              min="1"
              value={form.quantity}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          {/* County */}
          <div>
            <label className="mb-2 block font-medium">
              County
            </label>

            <select
              name="county"
              value={form.county}
              onChange={handleChange}
              className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-green-600"
            >
              <option value="">Select county</option>

              {KENYAN_COUNTIES.map((county) => (
                <option key={county} value={county}>
                  {county}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={5}
              placeholder="Describe your produce..."
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
            />
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/dashboard/marketplace")}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Product"}
          </Button>
        </div>
      </form>
    </div>
  );
}