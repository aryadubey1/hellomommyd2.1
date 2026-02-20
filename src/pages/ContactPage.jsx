import ContactForm from '../components/ContactForm';

const contactInfo = [
    { icon: '📍', label: 'Address', value: '123 Textile Market, Ring Road, Surat, Gujarat 395003, India' },
    { icon: '📞', label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: '✉️', label: 'Email', value: 'hello@hellomommy.in', href: 'mailto:hello@hellomommy.in' },
    { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM IST' },
];

export default function ContactPage() {
    return (
        <main className="pt-20">
            {/* Header */}
            <section className="py-14 gradient-hero text-center">
                <span className="inline-block bg-baby-pink text-brand-dark text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                    Get In Touch
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
                    Contact <span className="text-brand-rose">Us</span>
                </h1>
                <p className="text-brand-dark/60 max-w-lg mx-auto px-4">
                    Have questions about wholesale pricing, collections, or custom orders? We'd love to hear from you.
                </p>
            </section>

            {/* Main section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Form */}
                        <div>
                            <h2 className="text-2xl font-extrabold text-brand-dark mb-2">Send Us a Message</h2>
                            <p className="text-brand-dark/55 text-sm mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
                            <ContactForm />
                        </div>

                        {/* Info + Map */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <h2 className="text-2xl font-extrabold text-brand-dark mb-6">Contact Information</h2>
                                <div className="space-y-5">
                                    {contactInfo.map((info) => (
                                        <div key={info.label} className="flex items-start gap-4 p-4 bg-beige rounded-2xl">
                                            <span className="text-2xl shrink-0">{info.icon}</span>
                                            <div>
                                                <p className="text-xs text-brand-dark/50 font-semibold uppercase tracking-wide mb-0.5">{info.label}</p>
                                                {info.href ? (
                                                    <a href={info.href} className="text-sm font-medium text-brand-dark hover:text-brand-rose transition-colors duration-200">
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-sm font-medium text-brand-dark">{info.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Google Maps placeholder */}
                            <div className="rounded-3xl overflow-hidden shadow-card border border-baby-pink/30">
                                <iframe
                                    title="HelloMommy Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e8a2e5b1b1b%3A0x1!2sSurat%2C+Gujarat!5e0!3m2!1sen!2sin!4v1"
                                    width="100%"
                                    height="280"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            {/* Social links */}
                            <div className="bg-baby-pink/20 rounded-3xl p-6 border border-baby-pink/30">
                                <h3 className="font-bold text-brand-dark mb-4">Follow Us</h3>
                                <div className="flex gap-3">
                                    {[['📸 Instagram', '#'], ['👍 Facebook', '#'], ['💬 WhatsApp', '#']].map(([label, href]) => (
                                        <a
                                            key={label}
                                            href={href}
                                            className="flex-1 text-center text-xs font-semibold py-2.5 rounded-2xl bg-white border border-baby-pink
                                 hover:bg-brand-rose hover:text-white hover:border-brand-rose transition-all duration-200 text-brand-dark"
                                        >
                                            {label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
