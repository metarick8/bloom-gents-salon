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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.1234567890!2d54.3773!3d24.4539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI3JzE0LjAiTiA1NMKwMjInMjcuMiJF!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Luxe Barber Location"
                className="w-full h-full"
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
