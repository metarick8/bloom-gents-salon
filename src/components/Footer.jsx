import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Scissors, Instagram, Facebook, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const isRTL = useTranslation().i18n.language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#about', text: t('navbar.about') },
    { href: '#services', text: t('navbar.services') },
    { href: '#team', text: t('navbar.team') },
    { href: '#gallery', text: t('navbar.gallery') },
    { href: '#booking', text: t('navbar.booking') },
    { href: '#contact', text: t('navbar.contact') },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/luxebarberuae',
      label: 'Instagram',
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/LuxeBarberAbuDhabi',
      label: 'Facebook',
    },
    {
      icon: Mail,
      href: 'mailto:info@luxebarber.ae',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+97121234567',
      label: 'Phone',
    },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${isRTL ? 'md:text-right' : ''}`}
          >
            <div className="flex items-center mb-6">
              <Scissors className="text-white mr-3" size={28} />
              <span className="text-2xl font-playfair font-bold tracking-wider">
                {t('footer.brand')}
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <MapPin size={16} className="text-gray-400" />
              <span className="text-gray-400 text-sm">
                Al Maryah Island, Abu Dhabi
              </span>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${isRTL ? 'md:text-right' : ''}`}
          >
            <h3 className="text-xl font-playfair font-bold mb-6 uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${isRTL ? 'md:text-right' : ''}`}
          >
            <h3 className="text-xl font-playfair font-bold mb-6 uppercase tracking-wider">
              {t('footer.followUs')}
            </h3>
            <div className={`flex flex-wrap gap-4 ${isRTL ? 'md:justify-end' : ''}`}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                © 2024 All rights reserved.
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-200 z-40"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
