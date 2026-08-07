import { motion } from "framer-motion";
import { Clock, ExternalLink, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { blogPosts, MEDIUM_SERIES_URL } from "@/data/blog";

const Blog = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-8">
            <h1 className="text-3xl md:text-4xl font-medium mb-3 text-foreground">Blog</h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              In-depth articles on building production-grade CX Agent Studio agents — from the official Zero to Prod series on Google Cloud (Medium).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-10"
          >
            <Card className="google-card border-primary/20 bg-[#f8f9fa]">
              <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-medium text-foreground mb-1">CX Agent Studio: Zero to Prod Blog Series</h2>
                    <p className="text-sm text-muted-foreground max-w-xl">
                      Curated learning path on Google Cloud (Medium) — architecture, tools, orchestration, variables, and evaluations.
                    </p>
                  </div>
                </div>
                <Button asChild className="rounded-full shrink-0">
                  <a href={MEDIUM_SERIES_URL} target="_blank" rel="noopener noreferrer">
                    View on Medium <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="google-card h-full cursor-pointer group">
                    <CardContent className="p-5">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.series && (
                          <Badge className="text-xs bg-[#4285F4]/10 text-[#1a73e8] border-0 hover:bg-[#4285F4]/10">
                            {post.series}
                          </Badge>
                        )}
                        <Badge variant="secondary" className="text-xs capitalize">
                          {post.source}
                        </Badge>
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <h2 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors text-foreground leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span>{post.author}</span>
                          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </div>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
