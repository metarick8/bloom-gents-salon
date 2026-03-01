import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const isRTL = useTranslation().i18n.language === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: t('contact.info.phone'),
      href: `tel:${t('contact.info.phone')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: t('contact.info.email'),
      href: `mailto:${t('contact.info.email')}`,
    },
    {
      icon: MapPin,
      label: 'Address',
      value: t('contact.info.address'),
      href: '#location',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      value: t('contact.info.instagram'),
      href: 'https://instagram.com/luxebarberuae',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: t('contact.info.facebook'),
      href: 'https://facebook.com/LuxeBarberAbuDhabi',
    },
  ];

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
    <section id="contact" className="bg-white section-padding">
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
            {t('contact.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto"
        >
          {/* Left Contact Info */}
          <motion.div
            variants={itemVariants}
            className={`${isRTL ? 'lg:text-right' : ''}`}
          >
            <h3 className="text-2xl font-playfair font-bold text-black mb-8">
              Get in Touch
            </h3>

            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className={`flex items-center space-x-4 text-gray-700 hover:text-black transition-colors duration-200 ${
                    isRTL ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{info.label}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-black mb-4">Follow Us</h4>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 text-gray-700 hover:text-black transition-colors duration-200 ${
                    isRTL ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-200 flex-shrink-0">
                    <social.icon size={18} />
                  </div>
                  <span>{social.value}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-black rounded-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                  placeholder={t('contact.form.name')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                  placeholder={t('contact.form.email')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 resize-none"
                  placeholder={t('contact.form.message')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-gray-100 text-black font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Send size={20} />
                <span>{t('contact.form.submit')}</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
