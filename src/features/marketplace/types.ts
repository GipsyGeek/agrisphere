export interface Product {
  id: string;
  seller_id: string;

  title: string;
  category: string;
  description: string | null;

  price: number;

  unit: string;

  quantity: number;

  county: string | null;

  image_url: string | null;

  status: string;

  created_at: string;
}