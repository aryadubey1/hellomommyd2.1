import { Link } from 'react-router-dom';

export default function CTASection() {
    return (
        <section className="py-20 gradient-cta">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Decorative emoji ring */}
                <div className="flex justify-center gap-3 text-3xl mb-8">
                    {['🍼', '🌸', '🎀', '👶', '🌼'].map((e, i) => (
                        <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}>{e}</span>
                    ))}
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-4 leading-tight">
                    Dress Your Little One in <br />
                    <span className="text-brand-rose">Pure Comfort</span>
                </h2>
                <p className="text-base md:text-lg text-brand-dark/65 mb-10 max-w-xl mx-auto">
                    Join thousands of happy mommies who trust HelloMommy for premium, skin-safe, and stylish baby clothing.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/products" className="btn-primary text-base">
                        Shop Now
                    </Link>
                    <Link to="/contact" className="btn-outline text-base">
                        Wholesale Inquiry
                    </Link>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-6 mt-14 max-w-lg mx-auto">
                    {[
                        { value: '10K+', label: 'Happy Mommies' },
                        { value: '50+', label: 'Collections' },
                        { value: '6+', label: 'Categories' },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <p className="text-2xl md:text-3xl font-extrabold text-brand-dark">{stat.value}</p>
                            <p className="text-xs text-brand-dark/55 font-medium mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
