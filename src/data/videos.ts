export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  category: string;
  date: string;
}

export const videos: Video[] = [
  {
    id: "video-0lKsU1iRyBc",
    title: "Agent Studio Tutorial",
    description: "Learn the fundamentals of building agents with CX Agent Studio.",
    youtubeId: "0lKsU1iRyBc",
    duration: "15:00",
    category: "Getting Started",
    date: "2025-03-15",
  },
  {
    id: "video-dfvBNr4uLjk",
    title: "Advanced Agent Features",
    description: "Explore advanced features and capabilities in CX Agent Studio.",
    youtubeId: "dfvBNr4uLjk",
    duration: "20:00",
    category: "Advanced",
    date: "2025-03-16",
  },
  {
    id: "video-kX-DkvaHCiE",
    title: "Agent Integration Guide",
    description: "Step-by-step guide to integrating your agents with external services.",
    youtubeId: "kX-DkvaHCiE",
    duration: "18:00",
    category: "Integrations",
    date: "2025-03-17",
  },
];

export const videoCategories = ["All", "Getting Started", "Advanced", "Integrations", "DevOps"];
