import { Link } from 'react-router-dom';
import categories from '../data/categories';

export default function CategorySection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">Shop by Category</h2>
                <p className="section-subtitle">
                    Discover our handpicked collections designed for every tiny occasion
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to="/products"
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-3 shadow-card group-hover:-translate-y-2 transition-transform duration-300">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h3 className="text-xs sm:text-sm font-bold text-brand-dark group-hover:text-brand-rose transition-colors duration-200 leading-tight">
                                {cat.name}
                            </h3>
                            <p className="text-xs text-brand-dark/50 mt-0.5 hidden sm:block">{cat.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
