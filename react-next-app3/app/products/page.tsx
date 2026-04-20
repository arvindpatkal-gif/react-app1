import ProductsList from "./ProductsList";

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black font-sans">
      <main className="w-full max-w-5xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Our Products
          </h1>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400 text-lg">
            Browse our curated collection of quality items.
          </p>
        </div>
        <ProductsList />
      </main>
    </div>
  );
}