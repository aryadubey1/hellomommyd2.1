import { Link } from 'react-router-dom';

const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/products', label: 'Products' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
];

const categories = [
    'Newborn Gift Sets',
    'Baba Suits',
    'Denim Sets',
    'Double Top & Pant Sets',
    'Winter Collection',
    'Sweaters & Jackets',
];

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-full bg-hero-gradient flex items-center justify-center">
                                <span className="text-brand-dark font-bold text-sm">HM</span>
                            </div>
                            <span className="text-xl font-bold">
                                Hello<span className="text-brand-rose">Mommy</span>
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Premium baby & kids wear crafted with love. Soft fabrics, safe materials, and adorable designs for your little ones.
                        </p>
                        <div className="flex gap-3">
                            {['IG', 'FB', 'WA'].map((s) => (
                                <a
                                    key={s}
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-rose flex items-center justify-center text-xs font-bold transition-colors duration-200"
                                >
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-base mb-4 text-baby-pink">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((l) => (
                                <li key={l.to}>
                                    <Link
                                        to={l.to}
                                        className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-bold text-base mb-4 text-baby-blue">Categories</h4>
                        <ul className="space-y-2">
                            {categories.map((c) => (
                                <li key={c}>
                                    <Link
                                        to="/products"
                                        className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                                    >
                                        {c}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-base mb-4 text-mint">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li className="flex items-start gap-2">
                                <span className="mt-0.5">📍</span>
                                <span>123 Textile Market, Surat, Gujarat 395003, India</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <a href="tel:+919876543210" className="hover:text-white transition-colors duration-200">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>✉️</span>
                                <a href="mailto:hello@hellomommy.in" className="hover:text-white transition-colors duration-200">
                                    hello@hellomommy.in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} HelloMommy. All rights reserved.</p>
                    <p className="flex items-center gap-1">Made with <span className="text-brand-rose">❤️</span> for little ones</p>
                </div>
            </div>
        </footer>
    );
}
