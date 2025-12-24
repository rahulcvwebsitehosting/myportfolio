
import React from 'react';

interface MarqueeProps {
  text: string;
  reverse?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, reverse = false, className = "" }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap border-y border-black py-4 select-none ${className}`}>
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-xl font-bold uppercase tracking-widest px-8">
            {text} •
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
