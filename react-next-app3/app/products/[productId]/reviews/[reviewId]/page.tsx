import Link from "next/link";
import { products } from "../../../productsData";
import { reviewsByProductId } from "../../../reviewsData";

type Props = {
	params: Promise<{ productId: string; reviewId: string }>;
};

const formatDate = (isoDate: string) =>
	new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(new Date(isoDate));

const stars = (rating: number) => "★".repeat(rating) + "☆".repeat(5 - rating);

export default async function ReviewDetailPage({ params }: Props) {
	const { productId, reviewId } = await params;
	const parsedProductId = Number(productId);
	const parsedReviewId = Number(reviewId);

	const product = products.find((item) => item.id === parsedProductId);
	const reviews = reviewsByProductId[parsedProductId] ?? [];
	const review = reviews.find((item) => item.id === parsedReviewId);

	if (!product || !review) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black flex items-center justify-center font-sans">
				<div className="text-center">
					<p className="text-7xl font-black text-zinc-300 dark:text-zinc-700">404</p>
					<h1 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100">Review not found</h1>
					<Link
						href={`/products/${Number.isNaN(parsedProductId) ? "" : parsedProductId}/reviews`}
						className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white transition-colors"
					>
						← Back to Reviews
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black font-sans">
			<main className="w-full max-w-3xl mx-auto px-6 py-20">
				<Link
					href={`/products/${parsedProductId}/reviews`}
					className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8"
				>
					← Back to Reviews
				</Link>

				<div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg border border-zinc-100 dark:border-zinc-800 overflow-hidden">
					<div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

					<article className="p-8 sm:p-10">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
							Review for {product.name}
						</p>

						<h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
							{review.title}
						</h1>

						<div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
							<span className="font-semibold">{stars(review.rating)}</span>
							<span>By {review.author}</span>
							<span>•</span>
							<span>{formatDate(review.createdAt)}</span>
						</div>

						<p className="mt-8 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 p-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
							{review.comment}
						</p>
					</article>
				</div>
			</main>
		</div>
	);
}
