import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Adebayo Ogundimu',
      role: 'Small Business Owner',
      company: 'Ogundimu Enterprises',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Dawn Bridge Technologies transformed our business operations completely. Their SME digitalization program helped us automate our inventory management and increase our efficiency by 300%. The team is professional, knowledgeable, and truly committed to our success.',
      rating: 5,
      program: 'SME Digital Transformation'
    },
    {
      id: 2,
      name: 'Fatima Abdullahi',
      role: 'Computer Science Student',
      company: 'University of Lagos',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The Digital Efficiency Lab opened my eyes to so many possibilities in tech. I learned workflow automation, collaboration tools, and productivity techniques that have made me stand out among my peers. The instructors are amazing and the curriculum is very practical.',
      rating: 5,
      program: 'Digital Efficiency Lab'
    },
    {
      id: 3,
      name: 'Emmanuel Okoro',
      role: 'Tech Enthusiast',
      company: 'Techroots Club Member',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Being part of the Techroots Club has been life-changing. I went from knowing nothing about coding to building my first mobile app in just 6 months. The mentorship and peer support system is incredible. This program is preparing us for the future of work.',
      rating: 5,
      program: 'Techroots Club'
    },
    {
      id: 4,
      name: 'Mrs. Chioma Nwankwo',
      role: 'School Principal',
      company: 'Bright Future Secondary School',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Dawn Bridge Technologies helped us establish a tech club in our school and trained our teachers on digital tools. Our students are now more engaged in learning, and we\'ve seen a significant improvement in their digital literacy skills. Highly recommended!',
      rating: 5,
      program: 'ICT Training for Schools'
    },
    {
      id: 5,
      name: 'Yusuf Mohammed',
      role: 'Freelance Developer',
      company: 'Self-Employed',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The training I received from Dawn Bridge Technologies gave me the confidence and skills to start my own freelance business. Their focus on practical, real-world applications made all the difference. I now earn 5x more than I did before the program.',
      rating: 5,
      program: 'Digital Efficiency Lab'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dawn-light-gray/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-dawn-gold/10 px-4 py-2 rounded-full mb-4">
            <Quote className="h-4 w-4 text-dawn-gold" />
            <span className="text-dawn-charcoal text-sm font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-dawn-charcoal mb-4">
            What Our Community Says
          </h2>
          
          <p className="text-dawn-taupe text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from the individuals and organizations whose lives and businesses have been 
            transformed through our programs and services.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Stars */}
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-dawn-gold fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-dawn-charcoal text-lg lg:text-xl leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-1">
                  <div className="font-bold text-dawn-charcoal text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-dawn-taupe">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </div>
                  <div className="inline-block bg-dawn-gold/10 px-3 py-1 rounded-full text-sm text-dawn-gold font-medium">
                    {testimonials[currentIndex].program}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 
                     hover:bg-dawn-gold hover:text-dawn-charcoal transition-all duration-200 z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 
                     hover:bg-dawn-gold hover:text-dawn-charcoal transition-all duration-200 z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-dawn-gold scale-125' 
                  : 'bg-dawn-light-gray hover:bg-dawn-gold/50'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-dawn-gold">98%</div>
            <div className="text-dawn-taupe">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-dawn-gold">500+</div>
            <div className="text-dawn-taupe">Success Stories</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-dawn-gold">4.9/5</div>
            <div className="text-dawn-taupe">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;