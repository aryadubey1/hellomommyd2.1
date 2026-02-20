import { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import products from '../data/products';

const allCategories = ['All', 'Newborn Gift Sets', 'Baba Suits', 'Denim Sets', 'Double Top & Pant Sets', 'Winter Collection', 'Sweaters & Jackets'];

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? products
        : products.filter((p) => p.category === activeCategory);

    return (
        <main className="pt-20">
            {/* Page Header */}
            <section className="py-14 gradient-hero text-center">
                <span className="inline-block bg-baby-pink text-brand-dark text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                    Our Collection
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
                    All <span className="text-brand-rose">Products</span>
                </h1>
                <p className="text-brand-dark/60 max-w-lg mx-auto px-4">
                    Browse our full collection of premium baby & kids wear — filter by category to find the perfect outfit.
                </p>
            </section>

            {/* Category Filter Tabs */}
            <section className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-baby-pink/30 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                        {allCategories.map((cat) => (
                            <button
                                key={cat}
                                id={`filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                                onClick={() => setActiveCategory(cat)}
                                className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${activeCategory === cat
                                        ? 'bg-brand-rose text-white shadow-soft'
                                        : 'bg-baby-pink/40 text-brand-dark hover:bg-baby-pink'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <ProductGrid
                products={filtered}
                title={activeCategory === 'All' ? 'All Products' : activeCategory}
                subtitle={`${filtered.length} item${filtered.length !== 1 ? 's' : ''} found`}
            />
        </main>
    );
}
