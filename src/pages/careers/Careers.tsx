import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Coffee, 
  Trophy,
  ChevronDown, 
  ChevronUp,
  MapPin,
  Clock,
} from 'lucide-react';
import { FaMoneyCheck } from "react-icons/fa6";
interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  isExpanded: boolean;
  description: string[];
  requirements: string[];
}

const Careers: React.FC = () => {
  const [openPositions, setOpenPositions] = useState<JobPosition[]>([
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Kathmandu, Nepal",
      type: "Full-time",
      salary: "Competitive",
      isExpanded: false,
      description: [
        "Build and maintain our e-commerce platform",
        "Collaborate with design and backend teams",
        "Optimize application performance",
        "Implement new features and improvements"
      ],
      requirements: [
        "3+ years of React experience",
        "Strong TypeScript skills",
        "Experience with modern CSS frameworks",
        "Understanding of web performance optimization"
      ]
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Bhaktapur, Nepal",
      type: "Full-time",
      salary: "Competitive",
      isExpanded: false,
      description: [
        "Define product strategy and roadmap",
        "Work closely with engineering and design teams",
        "Analyze market trends and user feedback",
        "Drive product launches and iterations"
      ],
      requirements: [
        "3+ years of product management experience",
        "Strong analytical and communication skills",
        "Experience in e-commerce platforms",
        "Data-driven decision making"
      ]
    },
    {
      id: 3,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "Competitive",
      isExpanded: false,
      description: [
        "Develop and execute marketing campaigns",
        "Manage social media presence",
        "Create engaging content",
        "Track and analyze campaign performance"
      ],
      requirements: [
        "2+ years of digital marketing experience",
        "Experience with social media management",
        "Strong copywriting skills",
        "Analytics and reporting experience"
      ]
    }
  ]);

  const toggleJobExpansion = (id: number) => {
    setOpenPositions(positions =>
      positions.map(position =>
        position.id === id 
          ? { ...position, isExpanded: !position.isExpanded }
          : position
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Help us build the future of e-commerce in Nepal. We're looking for passionate 
          individuals who want to make a difference.
        </p>
      </div>

      {/* Company Culture */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="w-8 h-8 text-black" />,
              title: "Great Team",
              description: "Work with talented and passionate individuals"
            },
            {
              icon: <Heart className="w-8 h-8 text-black" />,
              title: "Work-Life Balance",
              description: "Flexible hours and remote work options"
            },
            {
              icon: <Coffee className="w-8 h-8 text-black" />,
              title: "Learning & Growth",
              description: "Regular workshops and learning opportunities"
            },
            {
              icon: <Trophy className="w-8 h-8 text-black" />,
              title: "Competitive Benefits",
              description: "Health insurance, annual bonus, and more"
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Open Positions</h2>
        <div className="space-y-4">
          {openPositions.map(position => (
            <div key={position.id} className="border rounded-lg overflow-hidden">
              <div 
                className="p-6 bg-white cursor-pointer"
                onClick={() => toggleJobExpansion(position.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMoneyCheck className="w-4 h-4" /> {position.salary}
                      </span>
                    </div>
                  </div>
                  {position.isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-black" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-black" />
                  )}
                </div>
                
                {position.isExpanded && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Job Description:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {position.description.map((item, index) => (
                          <li key={index} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {position.requirements.map((item, index) => (
                          <li key={index} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-black transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Hiring Process</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Application Review",
                description: "We review your application and match your skills with our requirements"
              },
              {
                step: "2",
                title: "Initial Interview",
                description: "A video call to discuss your experience and aspirations"
              },
              {
                step: "3",
                title: "Technical Assessment",
                description: "Role-specific evaluation of your skills and expertise"
              },
              {
                step: "4",
                title: "Final Interview",
                description: "Meet the team and discuss next steps"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h2>
        <p className="text-gray-600 mb-6">
          We're always looking for talented individuals to join our team. 
          Send your resume to careers@krist.com
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-black transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Careers;