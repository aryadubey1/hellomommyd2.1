const allImages = [
    { src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80', alt: 'Newborn in floral outfit', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80', alt: 'Baby baba suit blue' },
    { src: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80', alt: 'Denim co-ord set' },
    { src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80', alt: 'Pink double top set', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1542145748-60c5a50e9cf5?w=600&q=80', alt: 'Winter romper' },
    { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80', alt: 'Knit sweater set' },
    { src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80', alt: 'Rainbow baba suit', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&q=80', alt: 'Heritage gift box' },
    { src: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=600&q=80', alt: 'Baby dungaree' },
    { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', alt: 'Puffed jacket', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80', alt: 'Striped double top set' },
    { src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80', alt: 'Snow suit bundle' },
];

export default function GalleryPage() {
    return (
        <main className="pt-20">
            {/* Header */}
            <section className="py-14 gradient-hero text-center">
                <span className="inline-block bg-baby-pink text-brand-dark text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                    Instagram Gallery
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
                    Our <span className="text-brand-rose">Gallery</span>
                </h1>
                <p className="text-brand-dark/60 max-w-lg mx-auto px-4">
                    Real moments, real smiles — a peek at our adorable collections in the wild.
                </p>
            </section>

            {/* Masonry Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* CSS columns masonry */}
                    <div
                        className="columns-2 sm:columns-3 lg:columns-4 gap-4"
                        style={{ columnGap: '1rem' }}
                    >
                        {allImages.map((img, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-2xl mb-4 shadow-card break-inside-avoid cursor-pointer"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    style={{ display: 'block' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white text-sm font-semibold">{img.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 gradient-cta text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4">
                    Love What You See?
                </h2>
                <p className="text-brand-dark/65 mb-8 max-w-md mx-auto">
                    Explore our full product range and dress your little one in HelloMommy magic.
                </p>
                <a href="/products" className="btn-primary">Shop the Collection</a>
            </section>
        </main>
    );
}
