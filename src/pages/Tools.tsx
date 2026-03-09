import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { tools, toolCategories } from "@/data/tools";

const Tools = () => {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? tools : tools.filter((t) => t.category === filter);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tools & Repos</h1>
            <p className="text-lg text-muted-foreground">
              Open-source tools and accelerators to build production-grade agents faster. Don't start from scratch.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-8">
            {toolCategories.map((cat) => (
              <Button
                key={cat.key}
                variant={filter === cat.key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(cat.key)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool, i) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-3xl">{tool.emoji}</span>
                        <Badge variant="secondary" className="text-xs capitalize">{tool.category}</Badge>
                      </div>
                      <h3 className="font-semibold font-mono text-sm mb-2 group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                      <div className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        <Github className="h-3.5 w-3.5" /> View on GitHub <ExternalLink className="h-3 w-3" />
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

export default Tools;
