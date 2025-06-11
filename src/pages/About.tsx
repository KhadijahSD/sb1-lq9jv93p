import React from 'react';
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dawn-sky-blue/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-dawn-charcoal mb-6">
              About Dawn Bridge Technologies
            </h1>
            <p className="text-xl text-dawn-taupe max-w-3xl mx-auto leading-relaxed">
              We are a youth-focused Nigerian technology company dedicated to bridging the digital divide 
              through innovative solutions, comprehensive training, and sustainable empowerment programs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center space-y-6">
              <div className="bg-dawn-gold/10 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                <Target className="h-10 w-10 text-dawn-gold" />
              </div>
              <h3 className="text-2xl font-bold text-dawn-charcoal">Our Mission</h3>
              <p className="text-dawn-taupe leading-relaxed">
                To empower the next generation of digital leaders by providing accessible, 
                high-quality technology education and innovative solutions that drive sustainable 
                economic growth across Nigeria.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center space-y-6">
              <div className="bg-dawn-sky-blue/20 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                <Eye className="h-10 w-10 text-dawn-sky-blue" />
              </div>
              <h3 className="text-2xl font-bold text-dawn-charcoal">Our Vision</h3>
              <p className="text-dawn-taupe leading-relaxed">
                To become Nigeria's leading catalyst for digital transformation, creating a 
                future where every individual and organization has the tools and knowledge 
                to thrive in the digital economy.
              </p>
            </div>

            {/* Values */}
            <div className="text-center space-y-6">
              <div className="bg-dawn-taupe/20 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                <Heart className="h-10 w-10 text-dawn-taupe" />
              </div>
              <h3 className="text-2xl font-bold text-dawn-charcoal">Our Values</h3>
              <p className="text-dawn-taupe leading-relaxed">
                Excellence, Innovation, Integrity, and Empowerment guide everything we do. 
                We believe in creating lasting impact through ethical practices and 
                community-centered solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-dawn-light-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-dawn-charcoal">
                Our Story
              </h2>
              <div className="space-y-4 text-dawn-taupe leading-relaxed">
                <p>
                  Dawn Bridge Technologies was founded with a simple yet powerful vision: 
                  to bridge the gap between Nigeria's youth and the digital opportunities 
                  that define our modern world.
                </p>
                <p>
                  Recognizing the immense potential of Nigeria's young population and the 
                  growing demand for digital skills, we set out to create comprehensive 
                  programs that not only teach technology but also foster innovation, 
                  entrepreneurship, and sustainable development.
                </p>
                <p>
                  Today, we've grown into a trusted partner for individuals, schools, and 
                  businesses seeking to navigate the digital transformation journey. Our 
                  impact spans across multiple states, touching hundreds of lives and 
                  transforming countless organizations.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-dawn-gold/20 to-dawn-sky-blue/30 rounded-2xl 
                            flex items-center justify-center shadow-xl">
                <div className="grid grid-cols-2 gap-6 p-8">
                  <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center">
                    <Users className="h-8 w-8 text-dawn-gold mx-auto mb-2" />
                    <div className="text-2xl font-bold text-dawn-charcoal">500+</div>
                    <div className="text-sm text-dawn-taupe">Lives Impacted</div>
                  </div>
                  <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center">
                    <Award className="h-8 w-8 text-dawn-sky-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-dawn-charcoal">50+</div>
                    <div className="text-sm text-dawn-taupe">Schools Reached</div>
                  </div>
                  <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center">
                    <Zap className="h-8 w-8 text-dawn-gold mx-auto mb-2" />
                    <div className="text-2xl font-bold text-dawn-charcoal">25+</div>
                    <div className="text-sm text-dawn-taupe">SMEs Transformed</div>
                  </div>
                  <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center">
                    <Target className="h-8 w-8 text-dawn-sky-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-dawn-charcoal">8</div>
                    <div className="text-sm text-dawn-taupe">Active Programs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dawn-charcoal mb-4">
              Meet Our Team
            </h2>
            <p className="text-dawn-taupe text-lg max-w-2xl mx-auto">
              Our diverse team of passionate professionals brings together expertise in technology, 
              education, and community development to drive meaningful change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-dawn-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-dawn-charcoal mb-2">Adebayo Johnson</h3>
              <p className="text-dawn-gold font-medium mb-2">Founder & CEO</p>
              <p className="text-dawn-taupe text-sm">
                Passionate about youth empowerment and digital transformation with over 10 years of experience in tech education.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-dawn-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-dawn-charcoal mb-2">Fatima Abdullahi</h3>
              <p className="text-dawn-gold font-medium mb-2">Head of Programs</p>
              <p className="text-dawn-taupe text-sm">
                Expert in curriculum development and program management, dedicated to creating impactful learning experiences.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-dawn-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-dawn-charcoal mb-2">Emmanuel Okoro</h3>
              <p className="text-dawn-gold font-medium mb-2">Technical Director</p>
              <p className="text-dawn-taupe text-sm">
                Software engineer and tech mentor with expertise in automation tools and digital solutions for SMEs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;