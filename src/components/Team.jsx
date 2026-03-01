import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Team = () => {
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

  const teamMembers = [
    {
      key: 'member1',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      key: 'member2',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      key: 'member3',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section id="team" className="bg-white section-padding">
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
            {t('team.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.key}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-black rounded-lg overflow-hidden shadow-xl">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={t(`team.${member.key}.name`)}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4">
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors duration-200"
                      >
                        <Instagram size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-playfair font-bold mb-2">
                    {t(`team.${member.key}.name`)}
                  </h3>
                  <p className="text-gray-400 mb-3 uppercase tracking-wider text-sm">
                    {t(`team.${member.key}.position`)}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {t(`team.${member.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
