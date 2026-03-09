export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-cx-agent-studio",
    title: "Getting Started with Google's CX Agent Studio",
    excerpt: "A complete beginner's guide to setting up your first multimodal agent using Google's new Agent Engine platform.",
    content: `## Introduction

Google's CX Agent Studio represents a paradigm shift in how we build conversational AI. Unlike traditional chatbot platforms, Agent Studio enables you to create truly multimodal agents that can see, hear, and take meaningful action.

## What is CX Agent Studio?

CX Agent Studio is Google's next-generation platform for building customer experience agents. It combines the power of large language models with multimodal capabilities, allowing agents to process text, images, audio, and video inputs.

### Key Features

- **Multimodal Processing**: Handle text, images, audio, and video
- **Agent Engine**: A powerful runtime for executing agent logic
- **Built-in Integrations**: Connect to Google Cloud services seamlessly
- **Production-Ready**: Enterprise-grade security and scalability

## Setting Up Your Environment

To get started, you'll need:

1. A Google Cloud account with billing enabled
2. The CX Agent Studio SDK installed
3. Basic knowledge of Python or Node.js

\`\`\`bash
pip install cx-agent-studio
\`\`\`

## Your First Agent

Creating your first agent is straightforward. Define your agent's capabilities, connect your data sources, and deploy.

## What's Next?

In the next article, we'll dive deeper into the Agent Engine and explore advanced patterns for building production-grade agents.`,
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["Getting Started", "Tutorial", "Fundamentals"],
    author: "Yash Kavaiya",
  },
  {
    id: "multimodal-agents-deep-dive",
    title: "Deep Dive: Building Multimodal Agents",
    excerpt: "Learn how to build agents that can process images, audio, and video alongside text for richer customer experiences.",
    content: `## The Multimodal Revolution

The shift from text-only chatbots to multimodal agents is one of the most exciting developments in AI. Let's explore how to leverage these capabilities.

## Understanding Multimodal Inputs

CX Agent Studio supports multiple input types:

### Vision
Agents can analyze images, read documents, and understand visual context. This opens up use cases like:
- Product identification from photos
- Document processing and extraction
- Visual quality inspection

### Audio
Voice processing enables:
- Natural voice conversations
- Sentiment analysis from tone
- Multi-language support with real-time translation

### Video
Video processing allows:
- Real-time video analysis
- Customer behavior understanding
- Live assistance with visual guidance

## Implementation Patterns

When building multimodal agents, consider these architectural patterns:

1. **Pipeline Pattern**: Process each modality sequentially
2. **Parallel Pattern**: Process modalities simultaneously and merge results
3. **Adaptive Pattern**: Choose processing strategy based on input type

## Best Practices

- Always validate input types before processing
- Implement fallbacks for unsupported modalities
- Cache frequently accessed multimodal assets
- Monitor latency across different processing paths`,
    date: "2025-02-01",
    readTime: "12 min read",
    tags: ["Multimodal", "Advanced", "Architecture"],
    author: "Yash Kavaiya",
  },
  {
    id: "agent-engine-production",
    title: "Taking Your Agent to Production",
    excerpt: "Best practices for deploying, monitoring, and scaling your CX Agent Studio agents in production environments.",
    content: `## Production Readiness

Moving from development to production requires careful planning. This guide covers everything you need to know.

## Deployment Strategies

### Blue-Green Deployment
Maintain two identical production environments. Route traffic to the new version once validated.

### Canary Deployment
Gradually shift traffic from the old version to the new version, monitoring for issues.

### Rolling Updates
Update instances one at a time, ensuring zero downtime.

## Monitoring & Observability

Key metrics to track:
- **Response Latency**: P50, P95, P99 response times
- **Error Rate**: Track failures by type and severity
- **Token Usage**: Monitor LLM token consumption
- **User Satisfaction**: Track CSAT and resolution rates

## Scaling Considerations

- Use auto-scaling based on request volume
- Implement request queuing for traffic spikes
- Cache common responses to reduce LLM calls
- Consider regional deployment for latency optimization

## Security

- Encrypt all data in transit and at rest
- Implement proper authentication and authorization
- Regularly audit agent responses for safety
- Set up content filtering and moderation`,
    date: "2025-02-20",
    readTime: "10 min read",
    tags: ["Production", "DevOps", "Scaling"],
    author: "Yash Kavaiya",
  },
  {
    id: "mcp-protocol-explained",
    title: "Model Context Protocol (MCP): A Complete Guide",
    excerpt: "Understanding MCP and how it enables your agents to interact with external tools and data sources effectively.",
    content: `## What is MCP?

The Model Context Protocol (MCP) is an open standard for connecting AI agents to external tools and data sources. It provides a unified interface for agents to discover, authenticate, and interact with services.

## Why MCP Matters

Traditional tool integration requires custom code for each service. MCP standardizes this:

- **Discovery**: Agents can automatically discover available tools
- **Authentication**: Unified auth flow across all integrations
- **Execution**: Consistent interface for tool invocation
- **Error Handling**: Standardized error responses

## Building an MCP Server

An MCP server exposes capabilities to agents:

\`\`\`python
from mcp import Server, Tool

server = Server("my-tools")

@server.tool("search_database")
async def search(query: str) -> list:
    # Your implementation here
    return results
\`\`\`

## Available MCP Servers

The cx-agent-studio-mcp repository provides pre-built servers for:
- Database queries
- API integrations
- File system operations
- Web scraping

## Best Practices

- Keep tool descriptions clear and concise
- Implement proper error handling in all tools
- Use typed parameters for better agent understanding
- Test tools thoroughly before deployment`,
    date: "2025-03-05",
    readTime: "9 min read",
    tags: ["MCP", "Tools", "Integration"],
    author: "Yash Kavaiya",
  },
];
