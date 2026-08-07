import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Layout from "@/components/Layout";
import { videos, videoCategories, PLAYLIST_URL, type Video } from "@/data/videos";

const Videos = () => {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Video | null>(null);
  const filtered = filter === "All" ? videos : videos.filter((v) => v.category === filter);


  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-8">
            <h1 className="text-3xl md:text-4xl font-medium mb-3 text-foreground">Videos</h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              {videos.length} tutorials from the CX Agent Studio YouTube playlist — course labs, 30-day series, SCRAPI deep dives, and production demos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-8"
          >
            <Card className="google-card border-primary/20 bg-[#f8f9fa]">
              <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="font-medium text-foreground mb-1">CX Agent Studio YouTube Playlist</h2>
                  <p className="text-sm text-muted-foreground">
                    Course labs, 30 Days of CX Agent Studio, SCRAPI tutorials, and platform demos.
                  </p>
                </div>
                <Button asChild className="rounded-full shrink-0">
                  <a href={PLAYLIST_URL} target="_blank" rel="noopener noreferrer">
                    Watch Playlist <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-8">
            {videoCategories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
              >
                <button
                  type="button"
                  onClick={() => setActive(video)}
                  aria-label={`Play ${video.title}`}
                  className="block h-full w-full text-left rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Card className="google-card h-full overflow-hidden cursor-pointer group">
                    <div className="relative aspect-video bg-secondary flex items-center justify-center">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-google group-hover:scale-105 transition-transform">
                        <Play className="h-5 w-5 ml-0.5" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="text-xs mb-2">{video.category}</Badge>
                      <h3 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors text-foreground leading-snug line-clamp-2">
                        {video.title}
                      </h3>
                    </CardContent>
                  </Card>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="text-base leading-snug pr-6">{active.title}</DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-secondary">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
                  title={active.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <Badge variant="secondary" className="text-xs">{active.category}</Badge>
                <Button variant="outline" size="sm" asChild className="rounded-full">
                  <a
                    href={`https://www.youtube.com/watch?v=${active.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};


export default Videos;
