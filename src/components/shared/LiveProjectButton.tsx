import React from 'react';

const LiveProjectButton: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className = '', ...props }) => (
    <a
        className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-all duration-200 ${className}`}
        {...props}
    >
        Live Project
    </a>
);

export default LiveProjectButton;
