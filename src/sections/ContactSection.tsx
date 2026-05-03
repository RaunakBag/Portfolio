import React, { useState } from 'react';
import FadeIn from '../components/shared/FadeIn';
import ContactButton from '../components/shared/ContactButton';

const ContactSection: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setError(null);
        // Simulate sending (replace with real API/emailjs integration)
        setTimeout(() => {
            setStatus('sent');
        }, 1200);
    };

    return (
        <section id="contact" className="relative min-h-[60vh] flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C]">
            <FadeIn as="h2" delay={0} y={40} className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,120px)] mb-10">
                Contact
            </FadeIn>
            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-6 bg-[#18181B] rounded-3xl p-8 shadow-lg">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-[#23232A] text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-accent text-base"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-[#23232A] text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-accent text-base"
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="bg-[#23232A] text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-accent text-base"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="bg-[#23232A] text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-accent text-base min-h-[120px] resize-none"
                    required
                />
                <div className="flex justify-end">
                    <ContactButton type="submit" disabled={status === 'sending'} />
                </div>
                {status === 'sent' && <div className="text-green-400 text-center">Message sent! Thank you.</div>}
                {error && <div className="text-red-400 text-center">{error}</div>}
            </form>
        </section>
    );
};

export default ContactSection;
