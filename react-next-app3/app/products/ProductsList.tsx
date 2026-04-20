import Link from "next/link";
import { products } from "./productsData";

export default function ProductsList() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-lg border border-zinc-100 dark:border-zinc-800 overflow-hidden transition-all duration-200 hover:-translate-y-1"
          >
            {/* Colour accent bar per category */}
            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

            <div className="flex flex-col flex-1 p-5 gap-3">
              <span className="inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 ring-1 ring-indigo-200 dark:ring-indigo-800">
                {product.category}
              </span>

              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {product.name}
              </h2>

              <p className="text-2xl font-extrabold text-zinc-800 dark:text-zinc-200">
                ${product.price.toFixed(2)}
              </p>

              <button
                className="mt-auto w-full py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
