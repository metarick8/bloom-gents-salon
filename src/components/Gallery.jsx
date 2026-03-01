import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye } from 'lucide-react';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2..jpg';
import gallery3 from '../assets/gallery3..jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpg';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: gallery1,
      alt: 'Classic haircut',
      category: 'haircut',
    },
    {
      id: 2,
      src: gallery2,
      alt: 'Beard styling',
      category: 'beard',
    },
    {
      id: 3,
      src: gallery3,
      alt: 'Modern style',
      category: 'haircut',
    },
    {
      id: 4,
      src: gallery4,
      alt: 'Professional cut',
      category: 'haircut',
    },
    {
      id: 5,
      src: gallery5,
      alt: 'Grooming session',
      category: 'grooming',
    },
    {
      id: 6,
      src: gallery6,
      alt: 'Luxury shave',
      category: 'shave',
    },
    {
      id: 7,
      src: gallery7,
      alt: 'Fade haircut',
      category: 'haircut',
    },
    {
      id: 8,
      src: gallery8,
      alt: 'Beard trim',
      category: 'beard',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="bg-black section-padding">
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
            {t('gallery.title')}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <Eye size={32} className="mx-auto mb-2" />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {t('gallery.viewLook')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full max-h-[85vh] object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
