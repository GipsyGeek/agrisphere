import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import type { Product } from "../types";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-2xl font-bold">
          KES {Number(product.price).toLocaleString()}
        </p>

        <p className="text-sm text-slate-500">
          {product.quantity}
          {product.unit} • {product.county}
        </p>

        <Button className="w-full">
          View Product
        </Button>
      </CardContent>
    </Card>
  );
}