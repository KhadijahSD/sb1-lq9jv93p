import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Users, Laptop, ArrowRight, Clock, MapPin } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    {
      id: 1,
      title: 'Digital Efficiency Lab',
      description: 'Comprehensive training program designed to enhance digital literacy and efficiency skills for students and professionals.',
      icon: Zap,
      duration: '12 weeks',
      location: 'Lagos & Online',
      participants: '50+ per cohort',
      highlights: [
        'Workflow automation training',
        'Digital collaboration tools',
        'Productivity optimization',
        'Certificate upon completion'
      ],
      color: 'from-dawn-gold/20 to-dawn-gold/5',
      iconColor: 'text-dawn-gold',
      borderColor: 'border-dawn-gold/20'
    },
    {
      id: 2,
      title: 'Techroots Club',
      description: 'Youth-focused technology club fostering innovation, coding skills, and digital entrepreneurship among young Nigerians.',
      icon: Users,
      duration: 'Ongoing',
      location: 'Multiple Schools',
      participants: '200+ members',
      highlights: [
        'Coding bootcamps',
        'Tech project mentorship',
        'Innovation challenges',
        'Peer learning network'
      ],
      color: 'from-dawn-sky-blue/20 to-dawn-sky-blue/5',
      iconColor: 'text-dawn-sky-blue',
      borderColor: 'border-dawn-sky-blue/20'
    },
    {
      id: 3,
      title: 'SME Digital Transformation',
      description: 'Tailored digitalization programs helping small and medium enterprises leverage technology for growth and efficiency.',
      icon: Laptop,
      duration: '8-16 weeks',
      location: 'On-site & Remote',
      participants: '5-20 per program',
      highlights: [
        'Business process automation',
        'Digital marketing setup',
        'E-commerce integration',
        'Ongoing support'
      ],
      color: 'from-dawn-taupe/20 to-dawn-taupe/5',
      iconColor: 'text-dawn-taupe',
      borderColor: 'border-dawn-taupe/20'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-dawn-gold/10 px-4 py-2 rounded-full mb-4">
            <Zap className="h-4 w-4 text-dawn-gold" />
            <span className="text-dawn-charcoal text-sm font-medium">Featured Programs</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-dawn-charcoal mb-4">
            Transformative Learning Experiences
          </h2>
          
          <p className="text-dawn-taupe text-lg max-w-3xl mx-auto leading-relaxed">
            Our flagship programs are designed to equip individuals and organizations with the digital skills 
            and knowledge needed to succeed in today's technology-driven world.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`relative bg-gradient-to-br ${program.color} border ${program.borderColor} 
                         rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group 
                         hover:transform hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="bg-white p-4 rounded-xl shadow-lg inline-flex group-hover:scale-110 transition-transform duration-300">
                  <program.icon className={`h-8 w-8 ${program.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-dawn-charcoal group-hover:text-dawn-gold transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-dawn-taupe leading-relaxed">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-dawn-taupe">
                    <Clock className="h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-dawn-taupe">
                    <MapPin className="h-4 w-4" />
                    <span>{program.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-dawn-taupe">
                    <Users className="h-4 w-4" />
                    <span>{program.participants}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-dawn-charcoal text-sm">Program Highlights:</h4>
                  <ul className="space-y-1">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-dawn-taupe flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-dawn-gold rounded-full flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t border-dawn-light-gray">
                <Link
                  to="/programs"
                  className="inline-flex items-center text-dawn-charcoal font-medium hover:text-dawn-gold transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-dawn-gold/10 to-dawn-sky-blue/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-dawn-charcoal mb-4">
            Ready to Transform Your Digital Journey?
          </h3>
          <p className="text-dawn-taupe mb-6 max-w-2xl mx-auto">
            Join thousands of individuals and organizations who have already benefited from our comprehensive programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-3 bg-dawn-gold text-dawn-charcoal 
                       font-semibold rounded-lg hover:bg-dawn-gold/90 transform hover:scale-105 
                       transition-all duration-200"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-dawn-charcoal 
                       text-dawn-charcoal font-semibold rounded-lg hover:bg-dawn-charcoal hover:text-white 
                       transition-all duration-200"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;