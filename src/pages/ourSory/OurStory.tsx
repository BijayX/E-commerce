import React from 'react';
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import { Link } from 'react-router-dom';

const OurStory: React.FC = () => {
  const milestones = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'Started as a small online boutique with a curated collection of 50 products.'
    },
    {
      year: '2017',
      title: 'First Physical Store',
      description: 'Opened our first brick-and-mortar store in downtown New York.'
    },
    {
      year: '2019',
      title: 'Going National',
      description: 'Expanded our operations nationwide with next-day delivery service.'
    },
    {
      year: '2021',
      title: 'Sustainability Initiative',
      description: 'Launched our eco-friendly packaging and sustainable product lines.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Started international shipping to 50+ countries worldwide.'
    }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality, ensuring each product meets our high standards.'
    },
    {
      title: 'Sustainability',
      description: 'Committed to reducing our environmental impact through eco-friendly practices.'
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority, with exceptional service at every step.'
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving and adapting to bring you the latest trends and technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image5}
            alt="Store interior"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              A journey of passion, innovation, and dedication to bringing you the finest products
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Who We Are</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Founded in 2015, we started with a simple mission: to provide high-quality products 
                that enhance people's lives. What began as a small online boutique has grown into 
                a global brand, but our core values remain unchanged.
              </p>
              <p>
                We believe in creating more than just a shopping destination - we're building a 
                community where quality meets convenience, and where every customer is part of 
                our continuing story.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src={image4}
              alt="Our team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black text-center mb-12">Our Journey</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />
          
          {/* Milestone Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } md:justify-between`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <span className="text-black font-bold">{milestone.year}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals working together to bring you the best shopping experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <img
                    src={image4}
                    alt={`Team member ${member}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-1">John Doe</h3>
                  <p className="text-gray-600 mb-4">Co-founder & CEO</p>
                  <p className="text-gray-600">
                    Passionate about creating exceptional shopping experiences and building sustainable business practices.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community and discover the difference that quality makes
          </p>
          <Link to="/product-lists" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurStory;