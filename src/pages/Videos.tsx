import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { videos, videoCategories } from "@/data/videos";

const Videos = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? videos : videos.filter((v) => v.category === filter);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Videos</h1>
            <p className="text-lg text-muted-foreground">
              Video tutorials and walkthroughs to help you build multimodal agents step by step.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-8">
            {videoCategories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all group">
                  <div className="relative aspect-video bg-secondary flex items-center justify-center">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 ml-0.5" />
                    </div>
                    <Badge className="absolute top-3 right-3 bg-foreground/70 text-background text-xs">
                      {video.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="secondary" className="text-xs mb-2">{video.category}</Badge>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
