import { useState, useEffect, useCallback } from 'react';
import testimonials from '../data/testimonials';

function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < rating ? 'text-yellow-400' : 'text-brand-dark/20'}>★</span>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % testimonials.length);
    }, []);

    const prev = () => {
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const t = testimonials[current];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">What Mommies Say</h2>
                <p className="section-subtitle">
                    Real stories from real families who trust HelloMommy
                </p>

                {/* Slider */}
                <div className="relative max-w-3xl mx-auto">
                    <div className="bg-beige rounded-3xl p-8 md:p-12 shadow-card text-center transition-all duration-500">
                        <div className="mb-6 text-5xl text-brand-rose opacity-30 font-serif">"</div>
                        <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mb-8 italic">
                            {t.text}
                        </p>
                        <div className="flex flex-col items-center gap-3">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-14 h-14 rounded-full object-cover ring-4 ring-baby-pink"
                            />
                            <div>
                                <StarRating rating={t.rating} />
                                <p className="font-bold text-brand-dark mt-1">{t.name}</p>
                                <p className="text-sm text-brand-dark/50">{t.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            id="testimonial-prev"
                            className="w-10 h-10 rounded-full bg-baby-pink hover:bg-brand-rose hover:text-white text-brand-dark
                         flex items-center justify-center font-bold transition-colors duration-200 shadow-soft"
                            aria-label="Previous testimonial"
                        >
                            ‹
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    className={`rounded-full transition-all duration-300 ${i === current
                                            ? 'w-6 h-3 bg-brand-rose'
                                            : 'w-3 h-3 bg-baby-pink hover:bg-brand-rose/50'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            id="testimonial-next"
                            className="w-10 h-10 rounded-full bg-baby-pink hover:bg-brand-rose hover:text-white text-brand-dark
                         flex items-center justify-center font-bold transition-colors duration-200 shadow-soft"
                            aria-label="Next testimonial"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
