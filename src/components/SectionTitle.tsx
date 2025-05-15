import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const textColor = light ? 'text-white' : 'text-space-dark';
  const subtitleColor = light ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`max-w-3xl mb-10 ${alignClasses[align]}`}>
      <motion.h2
        className={`font-display font-bold text-3xl md:text-4xl ${textColor}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className={`mt-4 text-lg ${subtitleColor}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        className="h-1 w-20 bg-space-accent mt-6"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ marginLeft: align === 'center' ? 'auto' : align === 'right' ? 0 : '', marginRight: align === 'center' ? 'auto' : '' }}
      ></motion.div>
    </div>
  );
};

export default SectionTitle;