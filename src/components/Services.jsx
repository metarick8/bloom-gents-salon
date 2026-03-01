import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Scissors, Users, Sparkles, Droplets, Heart, Package } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const services = [
    {
      key: 'classicCut',
      icon: Scissors,
      delay: 0,
    },
    {
      key: 'skinFade',
      icon: Users,
      delay: 0.1,
    },
    {
      key: 'beardSculpting',
      icon: Sparkles,
      delay: 0.2,
    },
    {
      key: 'royalShave',
      icon: Droplets,
      delay: 0.3,
    },
    {
      key: 'hairTreatment',
      icon: Heart,
      delay: 0.4,
    },
    {
      key: 'groomingPackage',
      icon: Package,
      delay: 0.5,
    },
  ];

  return (
    <section id="services" className="bg-black section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4 uppercase tracking-wider">
            {t('services.title')}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              variants={itemVariants}
              whileHover={{
                backgroundColor: '#ffffff',
                color: '#000000',
                transition: { duration: 0.3 },
              }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 cursor-pointer group"
            >
              <div className="flex flex-col h-full">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-black/20 transition-colors duration-300">
                  <service.icon size={24} className="text-white" />
                </div>

                <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-black transition-colors duration-300">
                  {t(`services.${service.key}.title`)}
                </h3>

                <p className="text-gray-300 mb-6 flex-grow group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white group-hover:text-black transition-colors duration-300">
                    {t(`services.${service.key}.price`)}
                  </span>
                  <div className="w-8 h-0.5 bg-white/50 group-hover:bg-black/50 transition-colors duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
