'use client';

import { motion } from 'framer-motion';
import Header from './Header';
import StarfieldBackground from './StarfieldBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Header />
      <motion.main
        className="container mx-auto px-6 py-12 max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.main>
    </div>
  );
}
