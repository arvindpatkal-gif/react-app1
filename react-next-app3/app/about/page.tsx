import Link from "next/link";

const pillars = [
	{
		title: "Curated Quality",
		description:
			"Every product is selected for durability, thoughtful design, and practical value.",
	},
	{
		title: "Fast Delivery",
		description:
			"We keep inventory lean and logistics sharp so your essentials arrive quickly.",
	},
	{
		title: "Human Support",
		description:
			"Questions are answered by real people who understand the products and your needs.",
	},
];

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0_60%,_#cbd5e1)] text-zinc-900">
			<main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
				<section className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
					<p className="inline-flex rounded-full border border-zinc-300/70 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
						About Us
					</p>
					<h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
						We build a better shopping experience for everyday products.
					</h1>
					<p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
						Our store started with a simple idea: useful things should be easy to discover,
						easy to trust, and easy to love. From home essentials to personal tech, we focus
						on products that earn their place in your daily life.
					</p>
					<div className="mt-8 flex flex-wrap items-center gap-3">
						<Link
							href="/products"
							className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
						>
							Explore Products
						</Link>
						<Link
							href="/"
							className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
						>
							Back to Home
						</Link>
					</div>
				</section>

				<section className="mt-10 grid gap-4 sm:grid-cols-3">
					{pillars.map((pillar) => (
						<article
							key={pillar.title}
							className="rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
						>
							<h2 className="text-lg font-bold">{pillar.title}</h2>
							<p className="mt-3 text-sm leading-relaxed text-zinc-600">
								{pillar.description}
							</p>
						</article>
					))}
				</section>

				<section className="mt-10 rounded-3xl border border-zinc-200/80 bg-white p-8 sm:p-10">
					<h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
						What makes us different
					</h2>
					<div className="mt-6 grid gap-5 sm:grid-cols-2">
						<div className="rounded-2xl bg-zinc-50 p-5">
							<h3 className="text-sm font-bold uppercase tracking-wide text-zinc-500">
								Product-First Approach
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-zinc-700">
								We prioritize utility over trends and value over hype.
							</p>
						</div>
						<div className="rounded-2xl bg-zinc-50 p-5">
							<h3 className="text-sm font-bold uppercase tracking-wide text-zinc-500">
								Honest Pricing
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-zinc-700">
								Transparent, competitive prices with no hidden surprises.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
