import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-dawn-sky-blue/20 via-white to-dawn-light-gray/30 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23eebf83%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-dawn-gold/10 px-4 py-2 rounded-full">
                <Zap className="h-4 w-4 text-dawn-gold" />
                <span className="text-dawn-charcoal text-sm font-medium">Empowering Digital Transformation</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-dawn-charcoal leading-tight">
                Empowering the Next
                <span className="text-dawn-gold block">Digital Workforce</span>
              </h1>
              
              <p className="text-lg text-dawn-taupe leading-relaxed max-w-xl">
                Dawn Bridge Technologies delivers innovative IT solutions, digital transformation services, 
                and youth empowerment programs across Nigeria. We bridge the gap between traditional 
                practices and digital excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center px-8 py-4 bg-dawn-gold text-dawn-charcoal 
                         font-semibold rounded-lg hover:bg-dawn-gold/90 transform hover:scale-105 
                         transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-dawn-charcoal 
                         text-dawn-charcoal font-semibold rounded-lg hover:bg-dawn-charcoal hover:text-white 
                         transition-all duration-200"
              >
                Our Services
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-dawn-light-gray">
              <div className="text-center">
                <div className="text-2xl font-bold text-dawn-gold">500+</div>
                <div className="text-sm text-dawn-taupe">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-dawn-gold">50+</div>
                <div className="text-sm text-dawn-taupe">Schools Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-dawn-gold">25+</div>
                <div className="text-sm text-dawn-taupe">SMEs Digitalized</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-dawn-gold/20 to-dawn-sky-blue/30 rounded-2xl 
                            flex items-center justify-center shadow-2xl">
                <div className="grid grid-cols-2 gap-4 p-8">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Users className="h-8 w-8 text-dawn-gold mb-2" />
                    <div className="text-sm font-semibold text-dawn-charcoal">Youth Empowerment</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Target className="h-8 w-8 text-dawn-gold mb-2" />
                    <div className="text-sm font-semibold text-dawn-charcoal">Digital Training</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-dawn-gold mb-2" />
                    <div className="text-sm font-semibold text-dawn-charcoal">SME Solutions</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="w-8 h-8 bg-dawn-gold rounded-full mb-2"></div>
                    <div className="text-sm font-semibold text-dawn-charcoal">Innovation</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-dawn-gold/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-dawn-sky-blue/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;