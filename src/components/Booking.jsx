import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Clock, MessageCircle, Send } from 'lucide-react';

const Booking = () => {
  const { t } = useTranslation();
  const isRTL = useTranslation().i18n.language === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const services = [
    t('services.classicCut.title'),
    t('services.skinFade.title'),
    t('services.beardSculpting.title'),
    t('services.royalShave.title'),
    t('services.hairTreatment.title'),
    t('services.groomingPackage.title'),
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = encodeURIComponent(
      `New Booking Request:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}`
    );
    
    const whatsappNumber = '97123456789'; // Replace with actual number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      'Hi, I would like to book an appointment at Luxe Barber.'
    );
    const whatsappNumber = '97123456789'; // Replace with actual number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

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

  return (
    <section id="booking" className="bg-black section-padding">
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
            {t('booking.title')}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('booking.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto"
        >
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className={`text-white ${isRTL ? 'lg:text-right' : ''}`}
          >
            <h3 className="text-3xl font-playfair font-bold mb-6">
              {t('booking.description')}
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Calendar className="text-white flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
                  <p className="text-gray-300">Book your appointment at a time that suits you best.</p>
                </div>
              </div>
              
              <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Clock className="text-white flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Quick Confirmation</h4>
                  <p className="text-gray-300">Receive immediate confirmation via WhatsApp.</p>
                </div>
              </div>
              
              <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <MessageCircle className="text-white flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Direct Communication</h4>
                  <p className="text-gray-300">Stay connected with our barbers for any special requests.</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppBooking}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <MessageCircle size={20} />
              <span>{t('booking.whatsapp')}</span>
            </button>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  {t('booking.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  placeholder={t('booking.form.name')}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  {t('booking.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  placeholder={t('booking.form.phone')}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                  {t('booking.form.service')}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                >
                  <option value="">{t('booking.form.service')}</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                    {t('booking.form.date')}
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                    {t('booking.form.time')}
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Send size={20} />
                <span>{t('booking.form.submit')}</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
