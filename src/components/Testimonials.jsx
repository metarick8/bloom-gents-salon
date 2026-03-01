import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: t('testimonials.testimonial1.text'),
      author: t('testimonials.testimonial1.author'),
    },
    {
      text: t('testimonials.testimonial2.text'),
      author: t('testimonials.testimonial2.author'),
    },
    {
      text: t('testimonials.testimonial3.text'),
      author: t('testimonials.testimonial3.author'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section id="testimonials" className="bg-white section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4 uppercase tracking-wider">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                <Quote size={32} />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="relative h-48 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
                >
                  <blockquote className="text-2xl md:text-3xl font-playfair text-gray-800 mb-8 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <cite className="text-lg font-semibold text-black not-italic">
                    {testimonials[currentIndex].author}
                  </cite>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-black w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
