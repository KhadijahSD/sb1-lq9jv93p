import React, { useState, useEffect, useRef } from 'react';
import { Users, School, Building2, Award } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    schools: 0,
    smes: 0,
    programs: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    students: 500,
    schools: 50,
    smes: 25,
    programs: 8
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          students: Math.floor(finalCounts.students * progress),
          schools: Math.floor(finalCounts.schools * progress),
          smes: Math.floor(finalCounts.smes * progress),
          programs: Math.floor(finalCounts.programs * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      count: counts.students,
      label: 'Students Trained',
      suffix: '+',
      color: 'text-dawn-gold'
    },
    {
      icon: School,
      count: counts.schools,
      label: 'Schools Reached',
      suffix: '+',
      color: 'text-dawn-sky-blue'
    },
    {
      icon: Building2,
      count: counts.smes,
      label: 'SMEs Digitalized',
      suffix: '+',
      color: 'text-dawn-gold'
    },
    {
      icon: Award,
      count: counts.programs,
      label: 'Active Programs',
      suffix: '',
      color: 'text-dawn-sky-blue'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-dawn-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-dawn-light-gray text-lg max-w-2xl mx-auto">
            Transforming lives and businesses across Nigeria through innovative digital solutions and empowerment programs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="bg-dawn-gold/10 p-4 rounded-full group-hover:bg-dawn-gold/20 transition-colors duration-300">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2 animate-counter`}>
                {stat.count}{stat.suffix}
              </div>
              
              <div className="text-dawn-light-gray font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center">
          <div className="bg-dawn-taupe/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Building Nigeria's Digital Future
            </h3>
            <p className="text-dawn-light-gray leading-relaxed">
              Since our inception, we've been committed to bridging the digital divide by providing 
              comprehensive training, innovative solutions, and sustainable programs that empower 
              individuals and organizations to thrive in the digital economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;