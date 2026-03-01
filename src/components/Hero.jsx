import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Scissors } from 'lucide-react';
import heroImage from '../assets/Hero.jpg';

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const handleScrollClick = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen bg-black overflow-hidden">
      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      </div>

      <div className="relative h-full container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`text-center lg:text-left ${useTranslation().i18n.language === 'ar' ? 'lg:text-right' : ''}`}
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Scissors className="text-white mr-3" size={32} />
                <span className="text-white text-lg tracking-widest uppercase font-light">
                  {t('navbar.brand')}
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight uppercase tracking-wider"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={(e) => handleNavClick(e, '#booking')}
                className="btn-primary"
              >
                {t('hero.bookAppointment')}
              </button>
              <button
                onClick={(e) => handleNavClick(e, '#services')}
                className="btn-secondary"
              >
                {t('hero.viewServices')}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img
                src={heroImage}
                alt="Luxury Barbershop"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
              />
              <div className="absolute inset-0 border border-white/20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScrollClick}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
