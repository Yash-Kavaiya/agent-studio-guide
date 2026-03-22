export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
  externalUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "what-if-cx-agent-could-actually",
    title: "What If Your CX Agent Could Actually See, Hear, and Understand?",
    excerpt: "Explore the possibilities of multimodal AI agents that can process visual and audio inputs for richer customer experiences.",
    date: "2025-03-15",
    readTime: "8 min read",
    tags: ["Multimodal", "Vision", "Audio"],
    author: "Yash Kavaiya",
    externalUrl: "https://yashkavaiya.substack.com/p/what-if-your-cx-agent-could-actually",
  },
  {
    id: "complete-guide-cx-agent-studio",
    title: "The Complete Guide to CX Agent Studio",
    excerpt: "A comprehensive guide covering everything you need to know about Google's CX Agent Studio platform.",
    date: "2025-03-10",
    readTime: "15 min read",
    tags: ["Guide", "Fundamentals", "Tutorial"],
    author: "Yash Kavaiya",
    externalUrl: "https://yashkavaiya.substack.com/p/the-complete-guide-to-cx-agent-studio",
  },
  {
    id: "ai-powered-qa-platform",
    title: "How I Built an AI-Powered QA Platform",
    excerpt: "A deep dive into building a question-answering platform powered by AI and modern agent technologies.",
    date: "2025-03-05",
    readTime: "12 min read",
    tags: ["Case Study", "QA", "AI"],
    author: "Yash Kavaiya",
    externalUrl: "https://yashkavaiya.substack.com/p/how-i-built-an-ai-powered-qa-platform",
  },
  {
    id: "build-agents-cx-agent-studio",
    title: "Build Agents with CX Agent Studio",
    excerpt: "Step-by-step tutorial on building your first agent using Google's CX Agent Studio.",
    date: "2025-02-28",
    readTime: "10 min read",
    tags: ["Tutorial", "Getting Started", "Agents"],
    author: "Yash Kavaiya",
    externalUrl: "https://yashkavaiya.substack.com/p/build-agents-with-cx-agent-studio",
  },
  {
    id: "deploy-google-cloud-next",
    title: "How to Deploy a Google Cloud Next",
    excerpt: "Learn the deployment process for Google Cloud applications and best practices for production.",
    date: "2025-02-20",
    readTime: "9 min read",
    tags: ["Deployment", "Google Cloud", "DevOps"],
    author: "Yash Kavaiya",
    externalUrl: "https://yashkavaiya.substack.com/p/how-to-deploy-a-google-cloud-next",
  },
  {
    id: "converting-business-requirements",
    title: "Converting Business Requirements to Agent Specs",
    excerpt: "How to translate business requirements into technical specifications for building effective AI agents.",
    date: "2025-02-15",
    readTime: "11 min read",
    tags: ["Business", "Requirements", "Planning"],
    author: "Yash Kavaiya",
    externalUrl: "https://yashkavaiya.substack.com/p/converting-business-requirements",
  },
];
