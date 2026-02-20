import { Link } from 'react-router-dom';

const highlights = [
    { icon: '🌸', title: 'Soft Fabrics', desc: 'Gentle on baby skin, made from premium cotton blends' },
    { icon: '🛡️', title: 'Skin-Safe', desc: 'Dermatologically tested, free from harmful chemicals' },
    { icon: '✨', title: 'Trendy Designs', desc: 'Stylish prints that keep your little one always adorable' },
    { icon: '🧵', title: 'Durable Stitching', desc: 'Reinforced seams that withstand active little explorers' },
];

export default function AboutPreview() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-soft aspect-[4/5] max-w-md mx-auto lg:mx-0">
                            <img
                                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80"
                                alt="HelloMommy craftsmanship"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative card */}
                        <div className="absolute -bottom-6 -right-6 lg:right-0 bg-baby-pink rounded-3xl p-5 shadow-card z-20 w-44">
                            <p className="text-3xl font-extrabold text-brand-dark">5+</p>
                            <p className="text-xs text-brand-dark/60 font-medium leading-snug mt-1">Years crafting premium baby wear</p>
                        </div>
                        {/* Blob decoration */}
                        <div className="absolute -top-8 -left-8 w-48 h-48 bg-mint/40 rounded-full blur-3xl" />
                    </div>

                    {/* Content side */}
                    <div className="order-1 lg:order-2">
                        <span className="inline-block bg-baby-pink text-brand-dark text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                            Our Story
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 leading-tight">
                            Made with Love, <br />
                            <span className="text-brand-rose">Worn with Pride</span>
                        </h2>
                        <p className="text-brand-dark/65 leading-relaxed mb-4">
                            HelloMommy was born from a mother's dream — to dress every baby in clothing as soft as a hug. We source only the finest fabrics and work with skilled artisans to bring you baby wear that's beautiful, safe, and built to last.
                        </p>
                        <p className="text-brand-dark/65 leading-relaxed mb-8">
                            From newborns to toddlers, every stitch we make carries our promise: your child's comfort and happiness above all else.
                        </p>

                        {/* Highlights grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {highlights.map((h) => (
                                <div key={h.title} className="flex items-start gap-3 p-4 bg-beige rounded-2xl">
                                    <span className="text-xl shrink-0">{h.icon}</span>
                                    <div>
                                        <p className="text-sm font-bold text-brand-dark">{h.title}</p>
                                        <p className="text-xs text-brand-dark/55 mt-0.5">{h.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className="btn-primary">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
