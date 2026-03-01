import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import aboutImage from '../assets/About.jpg';

const About = () => {
  const { t } = useTranslation();
  const isRTL = useTranslation().i18n.language === 'ar';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const features = [
    {
      icon: CheckCircle,
      title: t('about.features.precision'),
      description: t('about.features.precisionDesc'),
    },
    {
      icon: Award,
      title: t('about.features.premium'),
      description: t('about.features.premiumDesc'),
    },
    {
      icon: Users,
      title: t('about.features.personalized'),
      description: t('about.features.personalizedDesc'),
    },
  ];

  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Image */}
          <motion.div
            variants={itemVariants}
            className={`order-2 ${isRTL ? 'lg:order-1' : 'lg:order-1'}`}
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="About Luxe Barber"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold font-playfair">10+</div>
                <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={itemVariants}
            className={`order-1 ${isRTL ? 'lg:order-2 lg:text-right' : 'lg:order-2'}`}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4 uppercase tracking-wider">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('about.subtitle')}
            </p>
            <p className="text-gray-700 mb-12 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                      <feature.icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
