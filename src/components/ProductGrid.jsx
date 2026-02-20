import ProductCard from './ProductCard';

export default function ProductGrid({ products, title, subtitle }) {
    return (
        <section className="py-20 bg-beige">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {title && <h2 className="section-title">{title}</h2>}
                {subtitle && <p className="section-subtitle">{subtitle}</p>}

                {products.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-4xl mb-4">🧸</p>
                        <p className="text-brand-dark/50 font-medium">No products found in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
