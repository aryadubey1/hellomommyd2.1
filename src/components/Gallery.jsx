const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80', alt: 'Newborn in floral outfit' },
    { src: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=500&q=80', alt: 'Baby baba suit' },
    { src: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&q=80', alt: 'Denim co-ord set' },
    { src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&q=80', alt: 'Pink double top set' },
    { src: 'https://images.unsplash.com/photo-1542145748-60c5a50e9cf5?w=500&q=80', alt: 'Winter romper baby' },
    { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&q=80', alt: 'Knit sweater set' },
    { src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&q=80', alt: 'Rainbow baba suit' },
    { src: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=500&q=80', alt: 'Heritage gift box' },
    { src: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=500&q=80', alt: 'Baby dungaree' },
];

export default function Gallery({ limit }) {
    const images = limit ? galleryImages.slice(0, limit) : galleryImages;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {images.map((img, i) => (
                <div
                    key={i}
                    className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-card"
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-2xl">🔍</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
