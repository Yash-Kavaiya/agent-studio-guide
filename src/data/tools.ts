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
    description: "The curated list of resources, tools, skills, and updates for CX Agent Studio.",
    url: "https://github.com/Yash-Kavaiya/awesome-cx-agent-studio",
    emoji: "🚀",
    category: "resources",
  },
  {
    id: "cxas-scrapi",
    name: "cxas-scrapi",
    description: "Official GoogleCloudPlatform Python library for programmatic CX Agent Studio management.",
    url: "https://github.com/GoogleCloudPlatform/cxas-scrapi",
    emoji: "🐍",
    category: "api",
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
    description: "Model Context Protocol (MCP) server for CX Agent Studio.",
    url: "https://github.com/Yash-Kavaiya/cx-agent-studio-mcp",
    emoji: "🔌",
    category: "integrations",
  },
  {
    id: "conversation-agents-mcp",
    name: "conversation_agents_mcp",
    description: "MCP server for bidirectional communication with Dialogflow CX conversational agents.",
    url: "https://github.com/Yash-Kavaiya/conversation_agents_mcp",
    emoji: "💬",
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
    description: "Connect your agent to WhatsApp, Telegram, Slack, Discord, Google Chat, and Zoom.",
    url: "https://github.com/Yash-Kavaiya/cx-agent-studio-channels",
    emoji: "📱",
    category: "integrations",
  },
  {
    id: "cx-agent-studio-cli",
    name: "cx-agent-studio-cli",
    description: "Full-featured CLI for the CES v1beta API — apps, agents, tools, sessions, evaluations, and more.",
    url: "https://github.com/Yash-Kavaiya/cx-agent-studio-cli",
    emoji: "⚡",
    category: "cli",
  },
  {
    id: "cx-agent-studio-evaluations-shell-script",
    name: "cx-agent-studio-evaluations-shell-script",
    description: "Interactive Bash CLI covering every CX Agent Studio evaluation API endpoint with CSV export.",
    url: "https://github.com/Yash-Kavaiya/cx-agent-studio-evaluations-shell-script",
    emoji: "📋",
    category: "cli",
  },
  {
    id: "dialogflow-intents-bundle",
    name: "dialogflow-intents-bundle",
    description: "Bulk create and update Dialogflow CX intents from CSV with async processing and run reports.",
    url: "https://github.com/Yash-Kavaiya/dialogflow-intents-bundle",
    emoji: "📑",
    category: "api",
  },
  {
    id: "agent-buddy",
    name: "agent-buddy",
    description: "Platform for building, managing, and optimizing Dialogflow agents with AI-powered tools.",
    url: "https://github.com/Yash-Kavaiya/agent-buddy",
    emoji: "🤝",
    category: "templates",
  },
  {
    id: "cx-agent-studio-skill",
    name: "cx-agent-studio-skill",
    description: "Installable AI agent skill — agents, instructions, tools, variables, callbacks, guardrails, and REST API.",
    url: "https://github.com/Yash-Kavaiya/cx-agent-studio-skill",
    emoji: "🎯",
    category: "templates",
  },
  {
    id: "cx-callback-generator-skills",
    name: "cx-callback-generator-skills",
    description: "Interactive generator for all 6 callback types with production-ready Python code.",
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
