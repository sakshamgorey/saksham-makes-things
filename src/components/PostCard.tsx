'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PostMeta } from '@/lib/posts';

interface PostCardProps {
  post: PostMeta;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 bg-card/50 backdrop-blur-sm group">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-mono font-semibold text-foreground hover:text-primary transition-colors tracking-wide group-hover:tracking-wider">
              {post.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground font-mono text-sm tracking-wide">
              {format(new Date(post.date), 'yyyy-MM-dd')}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground leading-relaxed font-mono text-sm tracking-wide mb-4">
              {post.description}
            </p>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-xs bg-muted text-muted-foreground rounded-sm font-mono tracking-wide border border-border/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
