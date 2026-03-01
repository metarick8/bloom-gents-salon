import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Location = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="bg-black section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black">
                <MapPin size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4 uppercase tracking-wider">
              {t('location.title')}
            </h2>
          </div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Google Maps Embed */}
            <div className="relative h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/place/The+barber+shop+bloom+%D8%A8%D9%84%D9%88%D9%85+%D9%84%D9%84%D8%AD%D9%84%D8%A7%D9%82%D8%A9+%D8%A7%D9%84%D8%B1%D8%AC%D8%A7%D9%84%D9%8A%D8%A9%E2%80%AD/@33.3299425,44.3527291,13.65z/data=!4m6!3m5!1s0x15577f0045f523ef:0x2a8e8118bf036bbe!8m2!3d33.3093166!4d44.3672283!16s%2Fg%2F11ykqc5vt5?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-lg shadow-xl filter grayscale hover:grayscale-0 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center space-x-3 text-white">
              <MapPin size={20} />
              <address className="text-lg not-italic">
                {t('location.address')}
              </address>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-2">Parking</h3>
              <p className="text-gray-300 text-sm">Free parking available for all customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-300 text-sm">Wheelchair accessible entrance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-2">Public Transport</h3>
              <p className="text-gray-300 text-sm">5 minutes walk from nearest metro station</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
