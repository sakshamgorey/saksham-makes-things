import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getPostBySlug, getAllSlugs } from '@/lib/posts';
import Layout from '@/components/Layout';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto prose prose-invert prose-lg">
        <header className="mb-12 text-left">
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-foreground mb-6 tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 text-muted-foreground mb-8">
            <time dateTime={post.date} className="font-mono text-sm tracking-wide">
              $ date: {format(new Date(post.date), 'yyyy-MM-dd')}
            </time>
            
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
          </div>
          
          {post.description && (
            <p className="text-xl text-muted-foreground leading-relaxed font-mono tracking-wide border-l-2 border-primary pl-4">
              {post.description}
            </p>
          )}
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </Layout>
  );
}
