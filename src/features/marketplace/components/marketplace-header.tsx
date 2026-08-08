import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function MarketplaceHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Marketplace</h1>

        <p className="text-slate-500">
          Buy and sell agricultural products.
        </p>
      </div>

      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Sell Produce
      </Button>
    </div>
  );
}