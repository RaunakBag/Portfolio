// src/components/Contact.js
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    };

    // Simple validation
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address.';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult(null);
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                publicKey
            );
            setResult({ success: true, message: 'Message sent successfully!' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setResult({ success: false, message: 'Failed to send message. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header">
                    <p className="section-kicker">Contact</p>
                    <h2 className="section-title">Let’s build something exceptional together.</h2>
                    <p className="section-subtitle">
                        Open to collaboration, consulting, and full-time opportunities.
                    </p>
                </div>
                <div className="contact-grid">
                    <div className="contact-card contact-card--highlight">
                        <div className="contact-card-header">
                            <h3>Let’s connect</h3>
                            <span className="contact-pill">Available</span>
                        </div>
                        <p>Reach out for backend consulting, platform architecture, or full-time roles.</p>
                        <div className="contact-list">
                            <a className="contact-item" href="mailto:raunakbag97@gmail.com">
                                <span className="contact-icon">
                                    <FiMail />
                                </span>
                                <span>
                                    <strong>Email</strong>
                                    <span className="contact-muted">raunakbag97@gmail.com</span>
                                </span>
                            </a>
                            <a className="contact-item" href="tel:+918902159102">
                                <span className="contact-icon">
                                    <FiPhone />
                                </span>
                                <span>
                                    <strong>Phone</strong>
                                    <span className="contact-muted">+91 89021 59102</span>
                                </span>
                            </a>
                            <a className="contact-item" href="https://www.linkedin.com/in/raunakbag/" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon">
                                    <FiLinkedin />
                                </span>
                                <span>
                                    <strong>LinkedIn</strong>
                                    <span className="contact-muted">linkedin.com/in/raunakbag</span>
                                </span>
                            </a>
                            <a className="contact-item" href="https://github.com/raunakbag" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon">
                                    <FiGithub />
                                </span>
                                <span>
                                    <strong>GitHub</strong>
                                    <span className="contact-muted">github.com/raunakbag</span>
                                </span>
                            </a>
                        </div>
                        <div className="contact-cta">
                            <a className="btn btn-primary btn-sm" href="mailto:raunakbag97@gmail.com">
                                Send an Email
                            </a>
                            <a className="btn btn-ghost btn-sm" href="https://www.linkedin.com/in/raunakbag/" target="_blank" rel="noopener noreferrer">
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                    <form className="contact-form contact-form--glass" onSubmit={handleSubmit}>
                        {result && (
                            <div className={`form-result ${result.success ? 'success' : 'error'}`}>{result.message}</div>
                        )}
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <span className="form-error">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                            {errors.subject && <span className="form-error">{errors.subject}</span>}
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {errors.message && <span className="form-error">{errors.message}</span>}
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
