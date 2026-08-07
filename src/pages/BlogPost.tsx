import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blog";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Post not found</h1>
          <Button asChild><Link to="/blog">Back to Blog</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/blog"><ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog</Link>
            </Button>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{post.title}</h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
              <span>{post.author}</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
            </div>

            <div className="prose prose-neutral max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>
            </div>

            <Button asChild className="rounded-full">
              <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                Read the full article on {post.source === "medium" ? "Medium" : "Substack"}
              </a>
            </Button>

          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
