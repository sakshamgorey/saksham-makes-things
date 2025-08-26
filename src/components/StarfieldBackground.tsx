'use client';

import { motion } from 'framer-motion';

export default function StarfieldBackground() {
  return (
    <>
      {/* Enhanced Starfield */}
      <div className="starfield" />
      
      {/* Geometric Elements */}
      <motion.div
        className="geometric-element geometric-1"
        animate={{
          y: [0, -30, -15, -25, 0],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="geometric-element geometric-2"
        animate={{
          y: [0, -25, -10, -20, 0],
          rotate: [0, -90, -180, -270, -360],
          scale: [1, 0.95, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
      
      <motion.div
        className="geometric-element geometric-3"
        animate={{
          y: [0, -20, -5, -15, 0],
          rotate: [0, 180, 360, 540, 720],
          scale: [1, 1.05, 0.95, 1.02, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 20,
        }}
      />
      
      <motion.div
        className="geometric-element geometric-4"
        animate={{
          y: [0, -35, -20, -30, 0],
          rotate: [0, -180, -360, -540, -720],
          scale: [1, 0.9, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 30,
        }}
      />
    </>
  );
}
