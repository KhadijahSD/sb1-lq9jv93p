import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dawn-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-dawn-gold p-2 rounded-lg">
                <Zap className="h-6 w-6 text-dawn-charcoal" />
              </div>
              <div>
                <span className="text-white font-bold text-lg">Dawn Bridge</span>
                <span className="text-dawn-light-gray text-sm block -mt-1">Technologies</span>
              </div>
            </div>
            <p className="text-dawn-light-gray text-sm leading-relaxed">
              Empowering the next digital workforce through innovative IT solutions, 
              digital transformation, and youth empowerment programs across Nigeria.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dawn-light-gray hover:text-dawn-gold transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-dawn-light-gray hover:text-dawn-gold transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-dawn-light-gray hover:text-dawn-gold transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-dawn-light-gray hover:text-dawn-gold transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-dawn-light-gray hover:text-dawn-gold transition-colors duration-200">About Us</Link></li>
              <li><Link to="/programs" className="text-dawn-light-gray hover:text-dawn-gold transition-colors duration-200">Programs</Link></li>
              <li><Link to="/services" className="text-dawn-light-gray hover:text-dawn-gold transition-colors duration-200">Services</Link></li>
              <li><Link to="/get-involved" className="text-dawn-light-gray hover:text-dawn-gold transition-colors duration-200">Get Involved</Link></li>
              <li><Link to="/contact" className="text-dawn-light-gray hover:text-dawn-gold transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-dawn-light-gray">Digital Efficiency Training</li>
              <li className="text-dawn-light-gray">SME Digitalisation</li>
              <li className="text-dawn-light-gray">ICT Training for Youth</li>
              <li className="text-dawn-light-gray">Tech Club Establishment</li>
              <li className="text-dawn-light-gray">Research & Analysis</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-dawn-gold flex-shrink-0" />
                <span className="text-dawn-light-gray text-sm">info@dawnbridgetech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-dawn-gold flex-shrink-0" />
                <span className="text-dawn-light-gray text-sm">+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-dawn-gold flex-shrink-0 mt-0.5" />
                <span className="text-dawn-light-gray text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dawn-taupe mt-12 pt-8 text-center">
          <p className="text-dawn-light-gray text-sm">
            © 2024 Dawn Bridge Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;