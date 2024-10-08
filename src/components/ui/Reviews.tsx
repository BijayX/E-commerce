import React, { useState } from 'react';

interface Review {
  id: number;
  userName: string;
  userImage: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
}

interface ReviewsProps {
  reviews: Review[];
}

// Star icon component to avoid repetition
const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg 
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const StarRating: React.FC<{ 
  rating: number; 
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
}> = ({ 
  rating, 
  onRatingChange,
  interactive = false
}) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          onClick={() => interactive && onRatingChange?.(star)}
          className={interactive ? 'cursor-pointer' : undefined}
        >
          <StarIcon filled={star <= rating} />
        </div>
      ))}
    </div>
  );
};

const ReviewForm: React.FC = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Add your Review</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Your Rating</label>
          <StarRating rating={rating} onRatingChange={setRating} interactive />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <label htmlFor="review" className="block text-sm font-medium mb-2">Your Review</label>
          <textarea
            id="review"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Review"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="border-b pb-4 mb-4 last:border-b-0">
    <div className="flex items-center mb-2">
      <img 
        src={review.userImage} 
        alt={review.userName}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="ml-4">
        <h4 className="font-semibold">{review.userName}</h4>
        <StarRating rating={review.rating} />
      </div>
    </div>
    <h5 className="font-semibold mt-2">{review.title}</h5>
    <p className="text-gray-600 mt-1">{review.comment}</p>
    <div className="mt-2 text-sm text-gray-500">
      <span>Review by Krist</span>
      <span className="mx-2">•</span>
      <span>{review.date}</span>
    </div>
  </div>
);

const ProductReviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      
      <div className="space-y-6">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <ReviewForm />
    </div>
  );
};

// Example usage
const ExampleReviewSection: React.FC = () => {
  const sampleReviews: Review[] = [
    {
      id: 1,
      userName: "Mark Williams",
      userImage: "/api/placeholder/48/48", // Using placeholder for example
      rating: 5,
      title: "Excellent Product, I Love It 😍",
      comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      date: "June 05, 2023"
    },
    {
      id: 2,
      userName: "Alexa Johnson",
      userImage: "/api/placeholder/48/48", // Using placeholder for example
      rating: 5,
      title: "My Daughter is very much happy with this products",
      comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      date: "June 05, 2023"
    }
  ];

  return <ProductReviews reviews={sampleReviews} />;
};

export default ExampleReviewSection;