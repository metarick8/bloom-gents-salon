import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const Hours = () => {
  const { t } = useTranslation();

  const openingHours = [
    { day: t('hours.saturday'), hours: '9:00 AM - 8:00 PM' },
    { day: t('hours.sunday'), hours: '9:00 AM - 8:00 PM' },
    { day: t('hours.monday'), hours: '9:00 AM - 8:00 PM' },
    { day: t('hours.tuesday'), hours: '9:00 AM - 8:00 PM' },
    { day: t('hours.wednesday'), hours: '9:00 AM - 8:00 PM' },
    { day: t('hours.thursday'), hours: '9:00 AM - 8:00 PM' },
    { day: t('hours.friday'), hours: t('hours.closed') },
  ];

  return (
    <section id="hours" className="bg-white section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                <Clock size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4 uppercase tracking-wider">
              {t('hours.title')}
            </h2>
          </div>

          {/* Hours Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black rounded-lg overflow-hidden"
          >
            <div className="divide-y divide-gray-800">
              {openingHours.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-6 hover:bg-gray-900 transition-colors duration-200"
                >
                  <span className="text-white font-medium text-lg">
                    {item.day}
                  </span>
                  <span className={`text-lg ${
                    item.hours === t('hours.closed') 
                      ? 'text-red-400 font-medium' 
                      : 'text-gray-300'
                  }`}>
                    {item.hours}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-gray-600 mt-8"
          >
            * {t('hours.friday')} - {t('hours.closed')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
