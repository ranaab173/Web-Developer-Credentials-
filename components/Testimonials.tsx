import React from 'react';
import { ImageAssets } from './ImageAssets';

const testimonialsData = [
  {
    name: 'Aisha Khan',
    title: 'CEO, TechCorp',
    quote: 'Working with them was a game-changer for our business. The final product exceeded all our expectations, and the process was incredibly smooth. Highly recommended!',
    rating: 5,
    imgSrc: ImageAssets.testimonials.janeDoe
  },
  {
    name: 'David Chen',
    title: 'Marketing Director, Innovate Ltd.',
    quote: 'An absolute professional. Their attention to detail and creative solutions helped elevate our brand online. The website they built is both beautiful and highly functional.',
    rating: 5,
    imgSrc: ImageAssets.testimonials.johnSmith
  },
  {
    name: 'Fatima Al-Jamil',
    title: 'Founder, Creative Solutions',
    quote: 'I was impressed by their technical expertise and ability to understand my vision. They delivered a top-quality application on time and on budget. A pleasure to work with.',
    rating: 5,
    imgSrc: ImageAssets.testimonials.emilyWhite
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex justify-center text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < rating ? 'fill-current' : 'text-gray-600'}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#081b29]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Client <span className="text-[#00abf0]">Testimonials</span></h2>
        <p className="text-center text-lg text-gray-300 mb-12">What My Clients Say</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#0b293e] p-8 rounded-lg border border-gray-700/50 shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
              data-animate="fade-in-up"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img 
                src={testimonial.imgSrc} 
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#00abf0] mb-4"
              />
              <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <StarRating rating={testimonial.rating} />
                <h3 className="text-xl font-bold mt-4 text-white">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
