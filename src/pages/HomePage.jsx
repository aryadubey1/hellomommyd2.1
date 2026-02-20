import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import ProductGrid from '../components/ProductGrid';
import AboutPreview from '../components/AboutPreview';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import CTASection from '../components/CTASection';
import products from '../data/products';
import { Link } from 'react-router-dom';

const bestSellers = products.filter((p) => p.badge === 'Best Seller' || p.badge === 'Trending' || p.badge === 'Premium');

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <CategorySection />
            <ProductGrid
                products={bestSellers}
                title="Best Selling Products"
                subtitle="Our most-loved styles, handpicked for your little one"
            />
            <AboutPreview />
            <Testimonials />

            {/* Instagram-style Gallery section */}
            <section className="py-20 bg-beige">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">Our Gallery</h2>
                    <p className="section-subtitle">
                        Real moments, real smiles — styled in HelloMommy
                    </p>
                    <Gallery limit={9} />
                    <div className="text-center mt-10">
                        <Link to="/gallery" className="btn-primary">
                            View Full Gallery
                        </Link>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
