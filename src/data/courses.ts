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
