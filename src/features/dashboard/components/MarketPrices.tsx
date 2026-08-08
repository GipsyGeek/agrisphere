import { TrendingUp } from "lucide-react";

const prices = [
  {
    crop: "Maize",
    price: "KES 4,800 / bag",
    trend: "+4%",
  },
  {
    crop: "Beans",
    price: "KES 7,300 / bag",
    trend: "+2%",
  },
  {
    crop: "Tomatoes",
    price: "KES 120 / kg",
    trend: "-3%",
  },
  {
    crop: "Coffee",
    price: "KES 165 / kg",
    trend: "+7%",
  },
];

export function MarketPrices() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Market Prices
        </h2>

        <TrendingUp className="text-green-600" />
      </div>

      <div className="space-y-5">
        {prices.map((item) => (
          <div
            key={item.crop}
            className="flex items-center justify-between"
          >
            <div>
              <p className="font-semibold">
                {item.crop}
              </p>

              <p className="text-sm text-slate-500">
                {item.price}
              </p>
            </div>

            <span
              className={`font-semibold ${
                item.trend.startsWith("+")
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {item.trend}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}