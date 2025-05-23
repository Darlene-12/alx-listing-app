import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';
import { ASSETS, APP_CONFIG } from '../../constants';
import Button from './Button';

const Card: React.FC<CardProps> = ({
  title = 'Property Title',
  description = 'Property description',
  image = ASSETS.PLACEHOLDER_IMAGE,
  price = 0,
  location = 'Location',
  rating = 0,
  onClick,
  className = '',
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < APP_CONFIG.MAX_RATING; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">★</span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">★</span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">★</span>
        );
      }
    }
    return stars;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Image Container */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Content Container */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate flex-1">
            {title}
          </h3>
          <div className="flex items-center ml-2">
            {renderStars(rating)}
            <span className="text-sm text-gray-600 ml-1">
              ({rating.toFixed(1)})
            </span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">{location}</p>
        
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-gray-900">
            {APP_CONFIG.DEFAULT_CURRENCY}{price}
            <span className="text-sm font-normal text-gray-600">/night</span>
          </div>
          
          <Button
            variant="primary"
            size="small"
            onClick={onClick}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;