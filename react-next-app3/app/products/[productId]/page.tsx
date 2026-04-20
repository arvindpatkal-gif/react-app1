import Link from "next/link";
import { products } from "../productsData";

type Props = {
  params: Promise<{ productId: string }>;
};

export default async function ProductDetail({ params }: Props) {
  const { productId } = await params;
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black flex items-center justify-center font-sans">
        <div className="text-center">
          <p className="text-7xl font-black text-zinc-300 dark:text-zinc-700">404</p>
          <h1 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100">Product not found</h1>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white transition-colors"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black font-sans">
      <main className="w-full max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-10"
        >
          ← Back to Products
        </Link>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg border border-zinc-100 dark:border-zinc-800 overflow-hidden">
          <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

          <div className="p-8 sm:p-12 flex flex-col gap-6">
            <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 ring-1 ring-indigo-200 dark:ring-indigo-800">
              {product.category}
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              {product.name}
            </h1>

            <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              Premium quality product from our {product.category.toLowerCase()} collection. Built to last and designed for everyday use.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button className="flex-1 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white transition-colors">
                Add to Cart
              </button>
              <button className="flex-1 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Save for Later
              </button>
            </div>

            <Link
              href={`/products/${product.id}/reviews`}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors"
            >
              View Reviews
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}