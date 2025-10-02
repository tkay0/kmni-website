'use client';
import Image from "next/image";
import { useState } from "react";

export function ServiceCard({ title, image, time, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      onClick={handleClick}
      className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer transform transition-all duration-300 hover:scale-105"
    >
      {/* Background Image */}
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/30 transition-all duration-300" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 bg-green-700/95 p-4 transform translate-y-0 transition-transform duration-300">
          <h3 className="text-white text-lg font-bold text-center mb-1">
            {title}
          </h3>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-2"></div>
          
          {/* Shows on hover (desktop) OR click (mobile) */}
          <div className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-20' : 'max-h-0 group-hover:max-h-20'
          }`}>
            <p className="text-white/90 text-center text-sm mt-2">{time}</p>
            <p className="text-white/80 text-center text-xs mt-1">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}