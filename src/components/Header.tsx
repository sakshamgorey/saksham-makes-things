'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center px-6">
        <motion.div
          className="mr-8 flex"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="mr-6 flex items-center space-x-1">
            <span className="font-mono font-bold text-lg text-foreground tracking-wide">
              Saksham Makes Things
            </span>
            <span className="terminal-cursor"></span>
          </Link>
        </motion.div>
        
        <nav className="flex items-center space-x-8 text-sm font-mono">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/"
              className="transition-colors hover:text-primary text-foreground/70 font-medium tracking-wide"
            >
              /home
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/blog"
              className="transition-colors hover:text-primary text-foreground/70 font-medium tracking-wide"
            >
              /blog
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
