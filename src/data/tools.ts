export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  emoji: string;
  category: "resources" | "templates" | "integrations" | "api" | "cli";
  stars?: string;
}

export const tools: Tool[] = [
  {
    id: "awesome-cx-agent-studio",
    name: "awesome-cx-agent-studio",
    description: "The curated \"god mode\" list of resources, tools, and updates for CX Agent Studio.",
    url: "https://github.com/Yash-Kavaiya/awesome-cx-agent-studio",
    emoji: "🚀",
    category: "resources",
  },
  {
    id: "cx-agent-studio-starter-templates",
    name: "cx-agent-studio-starter-templates",
    description: "Production-ready boilerplates to get your agent running in minutes.",
    url: "https://github.com/Yash-Kavaiya/cx-agent-studio-starter-templates",
    emoji: "📦",
    category: "templates",
  },
  {
    id: "cx-agent-studio-mcp",
    name: "cx-agent-studio-mcp",
    description: "Model Context Protocol (MCP) servers for your agents.",
    url: "https://github.com/Yash-Kavaiya/cx-agent-studio-mcp",
    emoji: "🔌",
    category: "integrations",
  },
  {
    id: "cx-agent-studio-api",
    name: "cx-agent-studio-api",
    description: "Python wrappers and utilities for the Agent Engine API.",
    url: "https://github.com/Yash-Kavaiya/cx-agent-studio-api",
    emoji: "📡",
    category: "api",
  },
  {
    id: "cx-agent-studio-channels",
    name: "cx-agent-studio-channels",
    description: "Connect your agent to WhatsApp, Telegram, Slack, and more.",
    url: "https://github.com/Yash-Kavaiya/cx-agent-studio-channels",
    emoji: "💬",
    category: "integrations",
  },
  {
    id: "cx-agent-studio-cli",
    name: "cx-agent-studio-cli",
    description: "Command-line interface for managing CX Agent Studio projects and deployments.",
    url: "https://github.com/Yash-Kavaiya/cx-agent-studio-cli",
    emoji: "⚡",
    category: "cli",
  },
  {
    id: "cx-agent-studio-skill",
    name: "cx-agent-studio-skill",
    description: "Ready-to-use skills and capabilities for your CX agents.",
    url: "https://github.com/Yash-Kavaiya/cx-agent-studio-skill",
    emoji: "🎯",
    category: "templates",
  },
  {
    id: "cx-callback-generator-skills",
    name: "cx-callback-generator-skills",
    description: "Skills for generating callbacks and webhooks in CX Agent Studio.",
    url: "https://github.com/Yash-Kavaiya/cx-callback-generator-skills",
    emoji: "🔄",
    category: "templates",
  },
];

export const toolCategories = [
  { key: "all", label: "All Tools" },
  { key: "resources", label: "Resources" },
  { key: "templates", label: "Templates" },
  { key: "integrations", label: "Integrations" },
  { key: "api", label: "API & Utilities" },
  { key: "cli", label: "CLI Tools" },
];
