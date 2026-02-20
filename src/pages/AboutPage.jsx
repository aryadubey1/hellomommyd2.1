import { Link } from 'react-router-dom';

const qualityHighlights = [
    {
        icon: '🌸',
        title: 'Soft Fabrics',
        desc: "We source only the finest cotton blends – breathable, gentle, and kind to sensitive baby skin. Every fabric goes through rigorous softness testing before it reaches you.",
    },
    {
        icon: '🛡️',
        title: 'Skin-Safe Materials',
        desc: "All our dyes, threads, and materials are dermatologically tested. Certified free from harmful chemicals. Your baby's safety is our highest priority.",
    },
    {
        icon: '✨',
        title: 'Trendy Designs',
        desc: "Our in-house design team draws inspiration from global baby fashion trends to create prints and silhouettes that are always fresh, adorable, and Instagram-worthy.",
    },
    {
        icon: '🧵',
        title: 'Durable Stitching',
        desc: "Reinforced double-stitched seams mean our clothes withstand the toughest of toddler adventures. Quality that lasts, because babies grow fast – not our stitching.",
    },
];

const team = [
    { name: 'Sneha Mehta', role: 'Founder & Creative Head', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' },
    { name: 'Raj Patel', role: 'Head of Quality Assurance', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
    { name: 'Pooja Shah', role: 'Lead Designer', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80' },
];

export default function AboutPage() {
    return (
        <main className="pt-20">
            {/* Hero banner */}
            <section className="py-20 gradient-hero">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block bg-baby-pink text-brand-dark text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                        Our Story
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 leading-tight">
                        About <span className="text-brand-rose">HelloMommy</span>
                    </h1>
                    <p className="text-base md:text-lg text-brand-dark/65 max-w-2xl mx-auto leading-relaxed">
                        Born from a mother&apos;s love, built on quality, and driven by the joy in every baby&apos;s smile.
                    </p>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/5] max-w-md mx-auto lg:mx-0">
                                <img
                                    src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&q=80"
                                    alt="HelloMommy brand story"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 lg:right-0 bg-mint rounded-3xl p-5 shadow-card w-44">
                                <p className="text-3xl font-extrabold text-brand-dark">5+</p>
                                <p className="text-xs text-brand-dark/60 font-medium leading-snug mt-1">Years of crafting memories</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 leading-tight">
                                A Brand Born From <span className="text-brand-rose">a Mother&apos;s Heart</span>
                            </h2>
                            <div className="space-y-4 text-brand-dark/70 leading-relaxed">
                                <p>
                                    HelloMommy was founded in 2019 in the heart of Surat&apos;s textile district by Sneha Mehta, a new
                                    mother searching for baby clothes that were both beautiful and safe. Frustrated by the lack of premium
                                    yet affordable options in the market, she decided to create them herself.
                                </p>
                                <p>
                                    What started as a small operation supplying to local boutiques quickly grew into a beloved brand
                                    trusted by over 10,000 families across India. Our wholesale model allows retailers to offer premium
                                    baby wear at accessible price points.
                                </p>
                                <p>
                                    Every piece we create begins with a simple question: <em>&quot;Would I dress my own child in this?&quot;</em>{' '}
                                    That personal commitment to quality is what sets HelloMommy apart.
                                </p>
                            </div>
                            <div className="flex gap-6 mt-8">
                                {[['10K+', 'Happy Families'], ['50+', 'Collections'], ['200+', 'Retail Partners']].map(([v, l]) => (
                                    <div key={l} className="text-center">
                                        <p className="text-2xl font-extrabold text-brand-rose">{v}</p>
                                        <p className="text-xs text-brand-dark/50 font-medium mt-1">{l}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Highlights */}
            <section className="py-20 bg-beige">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">Our Quality Promise</h2>
                    <p className="section-subtitle">Every detail matters because your baby matters</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {qualityHighlights.map((h) => (
                            <div key={h.title} className="card p-6 text-center group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{h.icon}</div>
                                <h3 className="font-bold text-brand-dark text-base mb-3">{h.title}</h3>
                                <p className="text-sm text-brand-dark/60 leading-relaxed">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">Vision &amp; Mission</h2>
                    <p className="section-subtitle">The values that guide everything we create</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-baby-blue/20 rounded-3xl p-8 border border-baby-blue/40">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">🌟</span>
                                <h3 className="text-xl font-bold text-brand-dark">Our Vision</h3>
                            </div>
                            <p className="text-brand-dark/70 leading-relaxed">
                                To be India&apos;s most trusted premium baby clothing brand — where every parent can shop with
                                confidence, knowing their child will be wrapped in the very best. We envision a world where quality
                                baby clothing is accessible to every family.
                            </p>
                        </div>
                        <div className="bg-baby-pink/20 rounded-3xl p-8 border border-baby-pink/40">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">💝</span>
                                <h3 className="text-xl font-bold text-brand-dark">Our Mission</h3>
                            </div>
                            <p className="text-brand-dark/70 leading-relaxed">
                                To craft baby and kids clothing that seamlessly blends comfort, safety, and style — using only
                                skin-safe materials and premium fabrics. We&apos;re committed to making every mommy smile and every
                                baby feel loved in what they wear.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-beige">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">Meet the Team</h2>
                    <p className="section-subtitle">The passionate people behind every stitch</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        {team.map((member) => (
                            <div key={member.name} className="card p-6 text-center">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-4 ring-baby-pink"
                                />
                                <h3 className="font-bold text-brand-dark text-base">{member.name}</h3>
                                <p className="text-xs text-brand-rose font-semibold mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 gradient-cta text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4">Ready to Partner With Us?</h2>
                <p className="text-brand-dark/65 mb-8 max-w-md mx-auto">
                    Join our growing network of retail partners and offer your customers the HelloMommy difference.
                </p>
                <Link to="/contact" className="btn-primary">Get in Touch</Link>
            </section>
        </main>
    );
}
