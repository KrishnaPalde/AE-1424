import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        type: "tween", 
        duration: 0.3 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;