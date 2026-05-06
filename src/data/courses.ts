export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  platform: string;
  image: string;
  modules: string[];
  level: string;
  duration: string;
  featured: boolean;
}

export type TopicType = 'docs' | 'github' | 'video' | 'lab' | 'article' | 'tool';

export interface RoadmapTopic {
  title: string;
  description: string;
  url?: string;
  type: TopicType;
}

export interface RoadmapWeek {
  week: number;
  title: string;
  theme: string;
  color: string;
  topics: RoadmapTopic[];
}

export const courses: Course[] = [
  {
    id: "cx-agent-studio-udemy",
    title: "CX Agent Studio: Build Multimodal Customer Experience AI",
    description: "Master the fundamentals of Google's CX Agent Studio. Learn to build production-grade multimodal agents from scratch.",
    longDescription: "Start here to master the fundamentals of building next-gen multimodal agents with Google's CX Agent Studio. This comprehensive course covers everything from setting up your first agent to deploying production-ready solutions that can see, hear, and take action.",
    url: "https://www.udemy.com/course/cx-agent-studio-build-multimodal-customer-experience-ai/?referralCode=1381ED44B07BDACC72D7",
    platform: "Udemy",
    image: "/placeholder.svg",
    modules: [
      "Introduction to CX Agent Studio",
      "Setting Up Your Development Environment",
      "Building Your First Agent",
      "Multimodal Capabilities: Vision & Audio",
      "Agent Engine Deep Dive",
      "Integrating External APIs",
      "Testing & Debugging Agents",
      "Production Deployment Strategies",
      "Advanced Agent Patterns",
      "Real-World Case Studies",
    ],
    level: "Beginner to Advanced",
    duration: "12+ hours",
    featured: true,
  },
];

export const roadmap: RoadmapWeek[] = [
  {
    week: 1,
    title: "Foundations & Environment Setup",
    theme: "Understand what CX Agent Studio is and configure your Google Cloud environment.",
    color: "blue",
    topics: [
      {
        title: "CX Agent Studio Overview",
        description: "Learn what CX Agent Studio is, its evolution from Dialogflow CX, and how it sits within Google Cloud's Customer Engagement AI ecosystem.",
        url: "https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps",
        type: "docs",
      },
      {
        title: "Google Cloud Project Setup & IAM",
        description: "Create a GCP project, enable required APIs (Dialogflow, CCAI), configure IAM roles, and set up billing for Agent Studio workloads.",
        url: "https://cloud.google.com/dialogflow/cx/docs/quick/setup",
        type: "docs",
      },
      {
        title: "Agent Development Kit (ADK) Primer",
        description: "Understand the Agent Development Kit that powers CX Agent Studio under the hood — its architecture, runtime model, and key abstractions.",
        url: "https://google.github.io/adk-docs/",
        type: "docs",
      },
      {
        title: "CXAS SCRAPI — Tooling Introduction",
        description: "Get acquainted with the official CX Agent Studio SCRAPI Python library from GoogleCloudPlatform — the programmatic interface for managing agents.",
        url: "https://github.com/GoogleCloudPlatform/cxas-scrapi",
        type: "github",
      },
    ],
  },
  {
    week: 2,
    title: "Building Your First Agent",
    theme: "Navigate the Agent Studio UI and create, configure, and test your first conversational agent.",
    color: "green",
    topics: [
      {
        title: "CX Agent Studio UI Walkthrough",
        description: "Tour the visual builder: agents panel, flow editor, simulator, and settings. Understand how Agent Studio simplifies agent creation vs. raw Dialogflow CX.",
        url: "https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps",
        type: "docs",
      },
      {
        title: "Creating an Agent with Gemini",
        description: "Use the AI-Augmented agent creation feature powered by Gemini to auto-generate agent details, instructions, and initial flows from a description.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/agent",
        type: "docs",
      },
      {
        title: "Writing Agent Instructions (XML Structure)",
        description: "Master the XML-structured instruction format that Agent Studio uses — covering persona, goals, policies, and how to use Restructure & Refine AI features.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/generative",
        type: "docs",
      },
      {
        title: "Simulator & Initial Testing",
        description: "Run conversations in the built-in simulator, inspect turn-by-turn state, and iterate on your agent instructions before connecting real channels.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/test-cases",
        type: "lab",
      },
    ],
  },
  {
    week: 3,
    title: "Flows, Intents & State Management",
    theme: "Design robust conversation flows with intents, entities, pages, and session parameters.",
    color: "purple",
    topics: [
      {
        title: "Pages, Flows & Route Groups",
        description: "Understand how CX Agent Studio uses pages and flows to model multi-turn conversations — including entry/exit fulfillments, route groups, and transient pages.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/flow",
        type: "docs",
      },
      {
        title: "Intent Design & Training Phrases",
        description: "Create high-quality intents with diverse training phrases, negative examples, and appropriate labeling to maximise NLU accuracy.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/intent",
        type: "docs",
      },
      {
        title: "System & Custom Entities",
        description: "Build custom entities for domain-specific slot-filling. Use system entities (dates, numbers, addresses) and composite entities for complex extraction.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/entity",
        type: "docs",
      },
      {
        title: "Session Parameters & State Handlers",
        description: "Manage conversational context using session parameters, preset parameters, and conditional routes. Handle no-match, no-input, and escalation gracefully.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/session",
        type: "docs",
      },
    ],
  },
  {
    week: 4,
    title: "Tools, Webhooks & External Integrations",
    theme: "Connect your agent to external systems via webhooks, Cloud Functions, and the CXAS SCRAPI library.",
    color: "orange",
    topics: [
      {
        title: "Webhook Setup with Cloud Functions",
        description: "Deploy webhook handlers on Cloud Functions (Node.js / Python), handle WebhookRequest/WebhookResponse payloads, and manage authentication.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/webhook",
        type: "lab",
      },
      {
        title: "Data Stores & Knowledge Bases",
        description: "Integrate unstructured knowledge (PDFs, websites, FAQs) using Vertex AI Search data stores. Configure generative fallback to ground answers in documents.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/data-store-handler",
        type: "docs",
      },
      {
        title: "CXAS SCRAPI: Programmatic Agent Management",
        description: "Use the cxas-scrapi Python library to create, update, export/import agents, manage intents and entities, and automate repetitive agent tasks at scale.",
        url: "https://github.com/GoogleCloudPlatform/cxas-scrapi",
        type: "github",
      },
      {
        title: "CXAS SCRAPI: Examples & Recipes",
        description: "Walk through the examples/ folder in cxas-scrapi to see real patterns: bulk intent import, agent cloning, diff/merge workflows, and test automation.",
        url: "https://github.com/GoogleCloudPlatform/cxas-scrapi/tree/main/examples",
        type: "github",
      },
    ],
  },
  {
    week: 5,
    title: "Multimodal & Voice Capabilities",
    theme: "Build agents that hear, speak, and handle telephony with ultra-low latency streaming.",
    color: "red",
    topics: [
      {
        title: "Voice & Telephony Integration",
        description: "Connect your agent to PSTN telephony through CCAI Platform. Configure TTS, DTMF, barge-in, and call transfer to human agents.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/integration/phone-gateway",
        type: "docs",
      },
      {
        title: "Bi-Directional Streaming Architecture",
        description: "Understand Agent Studio's bi-directional streaming model that enables ultra-low latency voice interactions and async tool calls without conversational pauses.",
        url: "https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps",
        type: "docs",
      },
      {
        title: "Rich Messaging & Visual Responses",
        description: "Design rich content for chat channels: custom cards, carousels, quick replies, and suggestion chips using response messages and channel-specific overrides.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/fulfill",
        type: "docs",
      },
      {
        title: "Udemy Course: Multimodal Capabilities Module",
        description: "Deep-dive video module covering Vision & Audio integration inside the Udemy course — see, hear, and take action with your CX Agent Studio agent.",
        url: "https://www.udemy.com/course/cx-agent-studio-build-multimodal-customer-experience-ai/?referralCode=1381ED44B07BDACC72D7",
        type: "video",
      },
    ],
  },
  {
    week: 6,
    title: "AI-Augmented Building & Evaluation",
    theme: "Use Gemini-powered features to accelerate development, refine quality, and build rigorous evaluations.",
    color: "indigo",
    topics: [
      {
        title: "Generative AI Features in Agent Studio",
        description: "Explore Gemini integration: auto-generate agents, restructure/refine instructions, generate training phrases, and use generative fallback for graceful handling.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/generative",
        type: "docs",
      },
      {
        title: "Test Case Design & Hill Climbing",
        description: "Build comprehensive test suites with diverse user utterances. Use the Test Case Hill Climbing feature to auto-improve test rigor and surface failure modes.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/test-cases",
        type: "lab",
      },
      {
        title: "CXAS SCRAPI: Automated Test Runs",
        description: "Leverage cxas-scrapi's test automation capabilities to run test cases programmatically as part of CI/CD pipelines and quality gates.",
        url: "https://github.com/GoogleCloudPlatform/cxas-scrapi",
        type: "github",
      },
      {
        title: "Agent Quality Metrics & Dashboards",
        description: "Instrument your agent with custom events, use CCAI Insights for conversation analytics, and build Looker dashboards for intent coverage and resolution rates.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/analytics",
        type: "docs",
      },
    ],
  },
  {
    week: 7,
    title: "DevOps, Versioning & Team Collaboration",
    theme: "Apply software engineering best practices: versioning, CI/CD, change management, and collaborative workflows.",
    color: "teal",
    topics: [
      {
        title: "Environments, Versions & Rollbacks",
        description: "Manage draft vs. published environments, create agent versions, use changelogs, and perform one-click rollbacks to recover from bad deployments.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/version",
        type: "docs",
      },
      {
        title: "CI/CD Pipeline with CXAS SCRAPI",
        description: "Build a complete CI/CD pipeline using cxas-scrapi: export agents to JSON, validate changes, run tests, and deploy to production environments automatically.",
        url: "https://github.com/GoogleCloudPlatform/cxas-scrapi",
        type: "github",
      },
      {
        title: "Git-Based Agent Version Control",
        description: "Store agent configurations in Git using cxas-scrapi export/import. Enable code review workflows, diff between versions, and rollback via git revert.",
        url: "https://github.com/GoogleCloudPlatform/cxas-scrapi/blob/main/docs",
        type: "github",
      },
      {
        title: "Multi-Developer Conflict Management",
        description: "Use Agent Studio's built-in collaboration features — granular changelogs, conflict warnings, and team access controls — for parallel development across large teams.",
        url: "https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps",
        type: "docs",
      },
    ],
  },
  {
    week: 8,
    title: "Production Deployment & Professional Services",
    theme: "Deploy production agents, apply enterprise patterns, monitor at scale, and leverage professional services.",
    color: "pink",
    topics: [
      {
        title: "Professional Services Framework (CCAI PS)",
        description: "Apply Google Cloud's Professional Services best practices for enterprise CX Agent Studio deployments — governance, security, architecture review, and support tiers.",
        url: "https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps",
        type: "docs",
      },
      {
        title: "Production Security & Compliance",
        description: "Implement CMEK, VPC Service Controls, audit logging, and data residency controls for regulated industry deployments (HIPAA, PCI, FedRAMP).",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/security",
        type: "docs",
      },
      {
        title: "Monitoring, Alerting & Observability",
        description: "Set up Cloud Monitoring alerts for agent health, query latency, webhook errors, and intent coverage drops. Build SLOs for conversational AI systems.",
        url: "https://cloud.google.com/dialogflow/cx/docs/concept/analytics",
        type: "docs",
      },
      {
        title: "Capstone: End-to-End Production Agent",
        description: "Complete the Udemy course capstone — build and deploy a full customer service agent using all concepts learned across 8 weeks, from NLU to production monitoring.",
        url: "https://www.udemy.com/course/cx-agent-studio-build-multimodal-customer-experience-ai/?referralCode=1381ED44B07BDACC72D7",
        type: "video",
      },
    ],
  },
];
