import { useState } from 'react';

const initialForm = { name: '', email: '', phone: '', message: '' };

function validate(fields) {
    const errors = {};
    if (!fields.name.trim()) errors.name = 'Name is required.';
    if (!fields.email.trim()) {
        errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
        errors.email = 'Please enter a valid email.';
    }
    if (fields.phone && !/^[6-9]\d{9}$/.test(fields.phone)) {
        errors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }
    if (!fields.message.trim()) errors.message = 'Message is required.';
    return errors;
}

export default function ContactForm() {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
        if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate(form);
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setSubmitted(true);
        setForm(initialForm);
        setErrors({});
    };

    const inputClass = (field) =>
        `w-full px-4 py-3 rounded-2xl border bg-white text-brand-dark text-sm font-medium
     placeholder-brand-dark/30 outline-none transition-all duration-200
     focus:ring-2 focus:ring-brand-rose/40 focus:border-brand-rose
     ${errors[field] ? 'border-red-400 bg-red-50' : 'border-baby-pink hover:border-brand-rose/50'}`;

    if (submitted) {
        return (
            <div className="text-center py-12 px-6 bg-mint/30 rounded-3xl">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Message Sent!</h3>
                <p className="text-brand-dark/60 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="name">
                    Full Name <span className="text-brand-rose">*</span>
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Priya Sharma"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass('name')}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="email">
                    Email Address <span className="text-brand-rose">*</span>
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="phone">
                    Phone Number <span className="text-brand-dark/40 font-normal text-xs">(optional)</span>
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="9876543210"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass('phone')}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5" htmlFor="message">
                    Message <span className="text-brand-rose">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your wholesale inquiry or any questions..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button type="submit" id="submit-btn" className="btn-primary w-full text-center text-base">
                Send Message 💌
            </button>
        </form>
    );
}
