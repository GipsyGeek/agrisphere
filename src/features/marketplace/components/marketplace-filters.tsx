import { Input } from "@/components/ui/input";

export function MarketplaceFilters() {
  return (
    <div className="flex gap-4">
      <Input placeholder="Search products..." />

      <Input placeholder="Category" />

      <Input placeholder="County" />
    </div>
  );
}