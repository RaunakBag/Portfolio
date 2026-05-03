import React, { useRef, useState } from 'react';

interface MagnetProps {
    children: React.ReactNode;
    padding?: number;
    strength?: number;
    activeTransition?: string;
    inactiveTransition?: string;
    className?: string;
}

const Magnet: React.FC<MagnetProps> = ({
    children,
    padding = 150,
    strength = 3,
    activeTransition = 'transform 0.3s ease-out',
    inactiveTransition = 'transform 0.6s ease-in-out',
    className = '',
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);
    const [transform, setTransform] = useState('');

    const handleMouseMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        if (
            e.clientX > rect.left - padding &&
            e.clientX < rect.right + padding &&
            e.clientY > rect.top - padding &&
            e.clientY < rect.bottom + padding
        ) {
            setIsActive(true);
            setTransform(`translate3d(${dx / strength}px, ${dy / strength}px, 0)`);
        } else {
            setIsActive(false);
            setTransform('');
        }
    };

    const handleMouseLeave = () => {
        setIsActive(false);
        setTransform('');
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                willChange: 'transform',
                transition: isActive ? activeTransition : inactiveTransition,
                transform,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

export default Magnet;
