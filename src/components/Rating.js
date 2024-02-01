import { defaults } from 'autoprefixer';
import React from 'react';

const StarRating = ({ rating,votes }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const stars = Array.from({ length: 5 }, (_, index) => {
    const isHalfStar = index + 0.5 === roundedRating;
    const isFilledStar = index + 1 <= roundedRating;

    return (
      <span
        key={index}
        className={`${
          isFilledStar ? 'text-yellow-500' : 'text-gray-300'
        } ${isHalfStar ? 'half-star' : ''}`}
      >
        ★
      </span>
    );
  });

  return <div className="flex items-center">
    <div className="mr-2">{stars}</div>
    <span className="text-gray-500">{votes || 0} votes</span>
</div>;
};
export default StarRating;