import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-gradient-to-t from-[#0C0C0C] to-[#18181B] text-[#D7E2EA] py-12 px-6 flex flex-col items-center mt-[-2rem] z-20">
            <div className="text-2xl font-black tracking-tight mb-2">Jack</div>
            <div className="uppercase text-xs tracking-widest mb-4">3D Creator</div>
            <div className="flex gap-6 mb-4">
                <a href="mailto:jack@email.com" className="hover:opacity-70 transition-opacity" aria-label="Email">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 6-8.97 6.48a2 2 0 0 1-2.06 0L2 6" /></svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity" aria-label="GitHub">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V25" /></svg>
                </a>
            </div>
            <div className="text-xs opacity-60">&copy; {new Date().getFullYear()} Jack. Crafted with <span className="text-pink-500">♥</span> in 2026.</div>
        </footer>
    );
};

export default Footer;
