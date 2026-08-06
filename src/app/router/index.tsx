import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <main className="min-h-screen bg-green-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-green-700">
            🌿 AgriSphere
          </h1>

          <p className="mt-4 text-gray-600">
            The Digital Agricultural Ecosystem
          </p>
        </div>
      </main>
    ),
  },
]);