import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing! You\'ll receive our latest updates soon.');
      setEmail('');
    }, 1500);
  };

  const resetStatus = () => {
    setStatus('idle');
    setMessage('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dawn-charcoal to-dawn-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 bg-dawn-gold/20 px-4 py-2 rounded-full mb-6">
              <Mail className="h-4 w-4 text-dawn-gold" />
              <span className="text-dawn-gold text-sm font-medium">Stay Connected</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get the Latest Updates
            </h2>
            
            <p className="text-dawn-light-gray text-lg leading-relaxed max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new programs, 
              success stories, digital transformation tips, and exclusive opportunities.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== 'idle') resetStatus();
                    }}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-dawn-light-gray/30 
                             bg-white/90 text-dawn-charcoal placeholder-dawn-taupe
                             focus:outline-none focus:ring-2 focus:ring-dawn-gold focus:border-transparent
                             transition-all duration-200"
                    disabled={status === 'loading'}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="px-8 py-3 bg-dawn-gold text-dawn-charcoal font-semibold rounded-lg
                           hover:bg-dawn-gold/90 focus:outline-none focus:ring-2 focus:ring-dawn-gold
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transform hover:scale-105 transition-all duration-200
                           flex items-center justify-center space-x-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-dawn-charcoal border-t-transparent"></div>
                      <span>Subscribing...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Message */}
              {message && (
                <div className={`flex items-center justify-center space-x-2 text-sm ${
                  status === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {status === 'success' ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <span>{message}</span>
                </div>
              )}
            </form>

            {/* Privacy Note */}
            <p className="text-dawn-light-gray text-xs mt-4">
              We respect your privacy. Unsubscribe at any time. 
              <br className="hidden sm:inline" />
              No spam, just valuable insights and updates.
            </p>
          </div>

          {/* What You'll Get */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <div className="bg-dawn-gold/20 p-3 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                <Mail className="h-6 w-6 text-dawn-gold" />
              </div>
              <h3 className="text-white font-semibold">Program Updates</h3>
              <p className="text-dawn-light-gray text-sm">
                Be first to know about new training programs and enrollment opportunities.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-dawn-gold/20 p-3 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-dawn-gold" />
              </div>
              <h3 className="text-white font-semibold">Success Stories</h3>
              <p className="text-dawn-light-gray text-sm">
                Read inspiring stories from our community members and their achievements.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-dawn-gold/20 p-3 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                <Send className="h-6 w-6 text-dawn-gold" />
              </div>
              <h3 className="text-white font-semibold">Digital Tips</h3>
              <p className="text-dawn-light-gray text-sm">
                Get practical tips and insights on digital transformation and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;