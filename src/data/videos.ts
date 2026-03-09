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
    id: "intro-cx-agent-studio",
    title: "Introduction to CX Agent Studio",
    description: "Get started with Google's CX Agent Studio. Learn the basics and build your first agent in under 30 minutes.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "28:15",
    category: "Getting Started",
    date: "2025-01-10",
  },
  {
    id: "multimodal-agents",
    title: "Building Multimodal Agents",
    description: "Learn how to create agents that can process text, images, and audio simultaneously.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "42:30",
    category: "Advanced",
    date: "2025-01-25",
  },
  {
    id: "mcp-servers-tutorial",
    title: "MCP Servers: Complete Tutorial",
    description: "Build and deploy Model Context Protocol servers to extend your agent's capabilities.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "35:20",
    category: "Integrations",
    date: "2025-02-08",
  },
  {
    id: "production-deployment",
    title: "Deploying Agents to Production",
    description: "Best practices for deploying, monitoring, and scaling your agents in production.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "38:45",
    category: "DevOps",
    date: "2025-02-22",
  },
  {
    id: "whatsapp-integration",
    title: "WhatsApp Integration Guide",
    description: "Connect your CX Agent to WhatsApp for seamless customer communication.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "24:10",
    category: "Integrations",
    date: "2025-03-01",
  },
  {
    id: "agent-testing",
    title: "Testing Your Agents Like a Pro",
    description: "Comprehensive testing strategies for CX agents including unit, integration, and end-to-end tests.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "31:00",
    category: "Advanced",
    date: "2025-03-08",
  },
];

export const videoCategories = ["All", "Getting Started", "Advanced", "Integrations", "DevOps"];
