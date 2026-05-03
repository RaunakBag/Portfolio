import React from 'react';

const ContactButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = '', ...props }) => (
    <button
        className={`rounded-full bg-gradient-to-r from-[#18011F] via-[#B600A8] via-60% to-[#BE4C00] shadow-inner outline outline-2 outline-white outline-offset-[-3px] px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base transition-all duration-200 ${className}`}
        {...props}
    >
        Contact Me
    </button>
);

export default ContactButton;
