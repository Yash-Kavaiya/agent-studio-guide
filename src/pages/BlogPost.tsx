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
              {post.content.split("\n").map((line, i) => {
                if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-bold mt-8 mb-3 text-foreground">{line.replace("### ", "")}</h3>;
                if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-foreground">{line.replace("## ", "")}</h2>;
                if (line.startsWith("```")) return null;
                if (line.startsWith("- **")) {
                  const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
                  if (match) return <li key={i} className="ml-4 mb-1 text-muted-foreground"><strong className="text-foreground">{match[1]}</strong>: {match[2]}</li>;
                }
                if (line.startsWith("- ")) return <li key={i} className="ml-4 mb-1 text-muted-foreground">{line.replace("- ", "")}</li>;
                if (line.match(/^\d+\. /)) return <li key={i} className="ml-4 mb-1 list-decimal text-muted-foreground">{line.replace(/^\d+\. /, "")}</li>;
                if (line.trim() === "") return <br key={i} />;
                return <p key={i} className="text-muted-foreground leading-relaxed mb-3">{line}</p>;
              })}
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
