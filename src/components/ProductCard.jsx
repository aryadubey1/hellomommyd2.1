import { Link } from 'react-router-dom';

const badgeColors = {
    'Best Seller': 'bg-brand-rose text-white',
    'New': 'bg-mint text-brand-dark',
    'Trending': 'bg-baby-blue text-brand-dark',
    'Premium': 'bg-baby-pink text-brand-dark',
    'Winter Pick': 'bg-baby-blue text-brand-dark',
};

export default function ProductCard({ product }) {
    const { name, category, description, price, badge, image } = product;

    return (
        <div className="card group flex flex-col">
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {badge && (
                    <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${badgeColors[badge] || 'bg-baby-pink text-brand-dark'}`}>
                        {badge}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-brand-rose font-semibold uppercase tracking-wide mb-1">{category}</p>
                <h3 className="text-base font-bold text-brand-dark mb-2 line-clamp-1">{name}</h3>
                <p className="text-sm text-brand-dark/60 mb-4 line-clamp-2 flex-1">{description}</p>

                <div className="flex items-center justify-between">
                    <span className="text-lg font-extrabold text-brand-dark">
                        ₹{price.toLocaleString('en-IN')}
                    </span>
                    <Link
                        to="/products"
                        className="text-sm font-semibold text-brand-rose border border-brand-rose rounded-full px-4 py-1.5
                       hover:bg-brand-rose hover:text-white transition-all duration-200"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
