import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-white/80 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-full bg-hero-gradient flex items-center justify-center shadow-soft">
                            <span className="text-brand-dark font-bold text-sm">HM</span>
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-brand-dark group-hover:text-brand-rose transition-colors duration-200">
                            Hello<span className="text-brand-rose">Mommy</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === '/'}
                                className={({ isActive }) =>
                                    `text-sm font-semibold transition-colors duration-200 relative pb-1
                  ${isActive
                                        ? 'text-brand-rose after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-rose after:rounded-full'
                                        : 'text-brand-dark/70 hover:text-brand-rose'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link to="/contact" className="btn-primary text-sm py-2 px-5">
                            Wholesale Inquiry
                        </Link>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        id="hamburger-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-baby-pink/30 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-brand-dark rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-brand-dark rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-brand-dark rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } bg-white/95 backdrop-blur-md border-t border-baby-pink/30`}
            >
                <div className="px-6 py-4 flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === '/'}
                            className={({ isActive }) =>
                                `text-base font-semibold py-2 px-4 rounded-xl transition-all duration-200
                ${isActive ? 'bg-baby-pink text-brand-dark' : 'text-brand-dark/70 hover:bg-baby-pink/40 hover:text-brand-dark'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="btn-primary text-center mt-2">
                        Wholesale Inquiry
                    </Link>
                </div>
            </div>
        </header>
    );
}
