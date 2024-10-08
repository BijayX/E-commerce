import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import testimonialsImage from '../assets/login.png'

interface TestimonialProps {
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, rating }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex mb-4">
      {[...Array(rating)].map((_, index) => (
        <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-6">{content}</p>
    <div className="flex items-center">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="ml-4">
        <h4 className="font-semibold">{author.name}</h4>
        <p className="text-sm text-gray-500">{author.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
      author: {
        name: "Leslie Alexander",
        role: "Model",
        avatar:testimonialsImage
      },
      rating: 5
    },
    {
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
      author: {
        name: "Jacob Jones",
        role: "Co-Founder",
        avatar: testimonialsImage
      },
      rating: 5
    },
    {
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
      author: {
        name: "Jenny Wilson",
        role: "Fashion Designer",
        avatar: testimonialsImage
      },
      rating: 5
    }
  ];

  return (
    <section className="py-12 px-12 md:py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What our Customer say's</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-white shadow hover:bg-gray-50">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;