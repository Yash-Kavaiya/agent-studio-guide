export const MEDIUM_SERIES_URL =
  "https://medium.com/@yashkavaiya/list/cx-agent-studio-zero-to-prod-blog-series-fab5fd825601";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
  externalUrl: string;
  source: "medium" | "substack";
  series?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "what-is-google-cx-agent-studio",
    title: "What is Google CX Agent Studio?",
    excerpt:
      "Customer experience leaders have long faced a painful tradeoff: simple chatbots that disappoint customers or months-long engineering projects. CX Agent Studio changes that equation.",
    date: "2026-05-19",
    readTime: "12 min read",
    tags: ["Fundamentals", "Overview", "Google Cloud"],
    author: "Yash Kavaiya",
    externalUrl: "https://medium.com/google-cloud/what-is-google-cx-agent-studio-2a689c99c650",
    source: "medium",
    series: "Zero to Prod",
  },
  {
    id: "getting-started-first-agent",
    title: "Getting Started with CX Agent Studio: Setting Up and Building Your First Agent",
    excerpt:
      "Go from zero to a working multimodal agent in minutes using the CX Agent Studio console, AI bootstrapping, and the built-in simulator.",
    date: "2026-05-20",
    readTime: "14 min read",
    tags: ["Tutorial", "Getting Started", "Console"],
    author: "Yash Kavaiya",
    externalUrl:
      "https://medium.com/google-cloud/getting-started-with-cx-agent-studio-setting-up-and-building-your-first-agent-step-by-step-849d2a0aa5c5",
    source: "medium",
    series: "Zero to Prod",
  },
  {
    id: "architecture-deep-dive",
    title: "CX Agent Studio Architecture Deep Dive: Root Agents, Sub-Agents, Tools, and the Agentic Paradigm",
    excerpt:
      "Understand the root orchestrator model, hierarchical sub-agents, the tool ecosystem, and how CX Agent Studio flips the intent/flow paradigm.",
    date: "2026-05-21",
    readTime: "16 min read",
    tags: ["Architecture", "Multi-Agent", "ADK"],
    author: "Yash Kavaiya",
    externalUrl:
      "https://medium.com/google-cloud/cx-agent-studio-architecture-deep-dive-root-agents-sub-agents-tools-and-the-agentic-paradigm-1203ca2ddafe",
    source: "medium",
    series: "Zero to Prod",
  },
  {
    id: "xml-instructions",
    title: "Structuring Agent Instructions with XML for Dramatically Better LLM Performance",
    excerpt:
      "Use CX Agent Studio's recommended XML instruction format and Restructure instructions feature to improve reliability and reduce hallucinations.",
    date: "2026-05-22",
    readTime: "11 min read",
    tags: ["Instructions", "XML", "Best Practices"],
    author: "Yash Kavaiya",
    externalUrl:
      "https://medium.com/google-cloud/structuring-agent-instructions-with-xml-for-dramatically-better-llm-performance-8582c472c21b",
    source: "medium",
    series: "Zero to Prod",
  },
  {
    id: "sub-agent-orchestration",
    title: "Mastering Sub-Agent Orchestration and Hierarchical Design in CX Agent Studio",
    excerpt:
      "Design production-grade multi-agent systems with root orchestrators, handoff rules, escalation agents, and evaluation strategies.",
    date: "2026-05-23",
    readTime: "13 min read",
    tags: ["Multi-Agent", "Orchestration", "Handoffs"],
    author: "Yash Kavaiya",
    externalUrl:
      "https://medium.com/google-cloud/mastering-sub-agent-orchestration-and-hierarchical-design-in-cx-agent-studio-143796163877",
    source: "medium",
    series: "Zero to Prod",
  },
  {
    id: "tool-design-best-practices",
    title: "CX Agent Studio Tool Design Best Practices That Make Agents Actually Do Things Reliably",
    excerpt:
      "From vague tools to production-grade Python wrappers — the tool design patterns that separate demos from reliable agents.",
    date: "2026-05-24",
    readTime: "12 min read",
    tags: ["Tools", "Python", "Voice"],
    author: "Yash Kavaiya",
    externalUrl:
      "https://medium.com/google-cloud/cx-agent-studio-tool-design-best-practices-that-make-agents-actually-do-things-reliably-f51a4486288b",
    source: "medium",
    series: "Zero to Prod",
  },
  {
    id: "variables-state-management",
    title: "Mastering Variables and State Management in AI Agents: CX Agent Studio",
    excerpt:
      "Static vs dynamic variables, JSON custom objects, semantic naming, and deterministic steering with callbacks — the patterns that keep agents maintainable.",
    date: "2026-05-26",
    readTime: "11 min read",
    tags: ["Variables", "State", "Callbacks"],
    author: "Yash Kavaiya",
    externalUrl:
      "https://medium.com/google-cloud/mastering-variables-and-state-management-in-ai-agents-cx-agent-studio-2c48ec4edadc",
    source: "medium",
    series: "Zero to Prod",
  },
  {
    id: "complete-guide-architecture",
    title: "The Complete Guide to CX Agent Studio Architecture — Multi-Agent Design Patterns, Tools, Callbacks",
    excerpt:
      "Published on Google Cloud (Medium) — a comprehensive deep dive into architecture, multi-agent design patterns, tools, and callbacks.",
    date: "2026-04-01",
    readTime: "20 min read",
    tags: ["Guide", "Architecture", "Google Cloud"],
    author: "Yash Kavaiya",
    externalUrl:
      "https://medium.com/google-cloud/the-complete-guide-to-cx-agent-studio-architecture-multi-agent-design-patterns-tools-callbacks-9ab81d7eddab",
    source: "medium",
    series: "Zero to Prod",
  },
  {
    id: "eval-cli",
    title: "I Built a CLI That Covers Every CX Agent Studio Evaluation API Endpoint",
    excerpt:
      "A single Bash script with 31 menu items covering every CES v1beta evaluation endpoint — automate runs, schedule cron jobs, and export CSV results.",
    date: "2026-04-13",
    readTime: "10 min read",
    tags: ["CLI", "Evaluations", "Automation"],
    author: "Yash Kavaiya",
    externalUrl:
      "https://medium.com/google-cloud/i-built-a-cli-that-covers-every-cx-agent-studio-evaluation-api-endpoint-heres-how-it-works-5208ab9c0560",
    source: "medium",
    series: "Zero to Prod",
  },
  {
    id: "converting-business-requirements",
    title: "Converting Business Requirements into a Live AI Agent Using Google's CX Agent Studio",
    excerpt: "A step-by-step guide to building agents from scratch — from business requirements to a live deployment.",
    date: "2025-02-15",
    readTime: "11 min read",
    tags: ["Business", "Requirements", "Tutorial"],
    author: "Yash Kavaiya",
    externalUrl: "https://yashkavaiya.substack.com/p/converting-business-requirements",
    source: "substack",
  },
  {
    id: "deploy-telegram",
    title: "How to Deploy a CX Agent Studio Agent to Telegram",
    excerpt:
      "Bridging 900 million Telegram users with enterprise-grade conversational AI using production-ready channel integrations.",
    date: "2025-02-20",
    readTime: "9 min read",
    tags: ["Deployment", "Telegram", "Channels"],
    author: "Yash Kavaiya",
    externalUrl:
      "https://yashkavaiya.substack.com/p/how-to-deploy-a-google-cloud-next?r=nvsax&utm_campaign=post&utm_medium=web&triedRedirect=true",
    source: "substack",
  },
];
