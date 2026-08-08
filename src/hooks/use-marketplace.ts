import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/api/marketplace";

export function useMarketplace() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}