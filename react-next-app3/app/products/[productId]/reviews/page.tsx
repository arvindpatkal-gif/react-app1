import Link from "next/link";
import { products } from "../../productsData";
import { reviewsByProductId } from "../../reviewsData";

type Props = {
	params: Promise<{ productId: string }>;
};

const formatDate = (isoDate: string) =>
	new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	}).format(new Date(isoDate));

const stars = (rating: number) => "★".repeat(rating) + "☆".repeat(5 - rating);

export default async function ProductReviewsPage({ params }: Props) {
	const { productId } = await params;
	const parsedProductId = Number(productId);
	const product = products.find((item) => item.id === parsedProductId);

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

	const reviews = reviewsByProductId[parsedProductId] ?? [];

	return (
		<div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black font-sans">
			<main className="w-full max-w-4xl mx-auto px-6 py-20">
				<Link
					href={`/products/${parsedProductId}`}
					className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8"
				>
					← Back to Product
				</Link>

				<div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg border border-zinc-100 dark:border-zinc-800 overflow-hidden">
					<div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

					<div className="p-8 sm:p-10">
						<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
							Reviews for {product.name}
						</h1>
						<p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
							{reviews.length} review{reviews.length === 1 ? "" : "s"}
						</p>

						{reviews.length === 0 ? (
							<p className="mt-8 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 px-5 py-8 text-center text-zinc-500 dark:text-zinc-400">
								No reviews yet for this product.
							</p>
						) : (
							<ul className="mt-8 space-y-4">
								{reviews.map((review) => (
									<li key={review.id}>
										<Link
											href={`/products/${parsedProductId}/reviews/${review.id}`}
											className="block rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-400 dark:hover:border-indigo-500"
										>
											<div className="flex flex-wrap items-center justify-between gap-3">
												<h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{review.title}</h2>
												<span className="text-amber-500 font-semibold tracking-wide">{stars(review.rating)}</span>
											</div>
											<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">{review.comment}</p>
											<p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
												By {review.author} • {formatDate(review.createdAt)}
											</p>
										</Link>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</main>
		</div>
	);
}
