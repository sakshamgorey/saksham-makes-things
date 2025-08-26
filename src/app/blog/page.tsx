import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Layout from '@/components/Layout';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-foreground tracking-tight">
            $ ls /blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl font-mono tracking-wide">
            Thoughts, tutorials, and explorations in technology and creativity.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg font-mono">
              $ echo &quot;No posts found. Check back soon!&quot;
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
