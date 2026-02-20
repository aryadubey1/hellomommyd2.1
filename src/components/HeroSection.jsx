import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero pt-20">
            {/* Decorative blobs */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-baby-pink/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute bottom-20 left-10 w-56 h-56 bg-baby-blue/40 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-mint/30 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <span className="inline-block bg-baby-pink text-brand-dark text-xs font-semibold px-4 py-1.5 rounded-full mb-6 animate-bounce">
                            ✨ New Collection Arrived
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-brand-dark leading-tight mb-6">
                            Comfort Meets
                            <span className="block text-brand-rose">Cuteness</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-brand-dark/65 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Premium baby & kids wear crafted with love — soft fabrics, skin-safe materials, and irresistible designs for your little star. ⭐
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/products" className="btn-primary text-center text-base">
                                Explore Collection
                            </Link>
                            <Link to="/contact" className="btn-outline text-center text-base">
                                Wholesale Inquiry
                            </Link>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
                            {['100% Skin Safe', 'Soft Fabrics', 'Premium Quality'].map((b) => (
                                <div key={b} className="flex items-center gap-2 text-sm text-brand-dark/60">
                                    <span className="w-5 h-5 bg-mint rounded-full flex items-center justify-center text-xs">✓</span>
                                    {b}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]">
                            <div className="absolute inset-0 bg-baby-pink/30 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] animate-[spin_20s_linear_infinite]" />
                            <img
                                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80"
                                alt="Adorable baby in HelloMommy outfit"
                                className="relative z-10 w-full h-full object-cover rounded-[40%_60%_60%_40%/40%_40%_60%_60%] shadow-soft"
                            />
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-card z-20">
                                <p className="text-xs text-brand-dark/50 font-medium">Happy Mommies</p>
                                <p className="text-lg font-bold text-brand-dark">10,000+</p>
                            </div>
                            <div className="absolute -top-4 -right-4 bg-baby-pink rounded-2xl px-4 py-3 shadow-card z-20">
                                <p className="text-xs text-brand-dark/50 font-medium">Collections</p>
                                <p className="text-lg font-bold text-brand-dark">50+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs text-brand-dark/40 font-medium tracking-widest uppercase">Scroll</span>
                <div className="w-px h-8 bg-brand-dark/20" />
            </div>
        </section>
    );
}
