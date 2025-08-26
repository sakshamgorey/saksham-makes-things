'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-7xl font-mono font-bold text-foreground leading-tight tracking-tight">
              Welcome to{''}<br/>
              <span className="text-primary">saksham-makes-things</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-mono tracking-wide">
              A digital space where I explore the intersection of technology, creativity, and the art of making things.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl font-mono tracking-wide">
            Here you&apos;ll find thoughts on web development, creative coding experiments, 
            tutorials, and reflections on the ever-evolving digital landscape. 
            Join me on this journey of discovery and creation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-start items-start pt-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="text-lg px-8 py-6 font-mono tracking-wide bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/blog">
                  $ explore /blog
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-20 space-y-12"
        >
          <h2 className="text-3xl font-mono font-semibold text-foreground tracking-wide">
            $ cat /topics
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <motion.div 
              className="space-y-4 p-6 border border-border/30 rounded-lg bg-card/30 backdrop-blur-sm"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h3 className="text-lg font-mono font-medium text-primary tracking-wide">Technology</h3>
              <p className="text-muted-foreground font-mono text-sm tracking-wide leading-relaxed">
                Web development, modern frameworks, and the tools that shape our digital world.
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-4 p-6 border border-border/30 rounded-lg bg-card/30 backdrop-blur-sm"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h3 className="text-lg font-mono font-medium text-primary tracking-wide">Creativity</h3>
              <p className="text-muted-foreground font-mono text-sm tracking-wide leading-relaxed">
                Experiments with code, design, and the creative process of building digital experiences.
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-4 p-6 border border-border/30 rounded-lg bg-card/30 backdrop-blur-sm"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h3 className="text-lg font-mono font-medium text-primary tracking-wide">Learning</h3>
              <p className="text-muted-foreground font-mono text-sm tracking-wide leading-relaxed">
                Tutorials, guides, and insights from my journey of continuous learning and growth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
