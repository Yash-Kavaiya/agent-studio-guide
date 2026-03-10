import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Wrench, FileText, Play, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { tools } from "@/data/tools";

const features = [
  { icon: BookOpen, title: "Courses", description: "Comprehensive Udemy course to master CX Agent Studio", to: "/courses", color: "bg-[hsl(var(--google-blue))]/10 text-[hsl(var(--google-blue))]", hoverBg: "group-hover:bg-[hsl(var(--google-blue))] group-hover:text-primary-foreground" },
  { icon: Wrench, title: "Tools & Repos", description: "Open-source templates, APIs, and accelerators", to: "/tools", color: "bg-[hsl(var(--google-red))]/10 text-[hsl(var(--google-red))]", hoverBg: "group-hover:bg-[hsl(var(--google-red))] group-hover:text-primary-foreground" },
  { icon: FileText, title: "Blog", description: "In-depth articles on building multimodal agents", to: "/blog", color: "bg-[hsl(var(--google-yellow))]/10 text-[hsl(var(--google-yellow))]", hoverBg: "group-hover:bg-[hsl(var(--google-yellow))] group-hover:text-primary-foreground" },
  { icon: Play, title: "Videos", description: "Tutorials and walkthroughs for every skill level", to: "/videos", color: "bg-[hsl(var(--google-green))]/10 text-[hsl(var(--google-green))]", hoverBg: "group-hover:bg-[hsl(var(--google-green))] group-hover:text-primary-foreground" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-36">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--google-green))]" />
              Open Source • Production Ready
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-foreground">
              The Guide to Google's{" "}
              <span className="inline">
                <span className="text-[hsl(var(--google-blue))]">C</span>
                <span className="text-[hsl(var(--google-red))]">X</span>
                <span className="text-[hsl(var(--google-yellow))]"> Agent</span>
                <span className="text-[hsl(var(--google-blue))]"> Stu</span>
                <span className="text-[hsl(var(--google-green))]">di</span>
                <span className="text-[hsl(var(--google-red))]">o</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Everything you need to build production-grade multimodal agents. From learning to deployment — courses, tools, and open-source accelerators.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" asChild>
                <a
                  href="https://www.udemy.com/course/cx-agent-studio-build-multimodal-customer-experience-ai/?referralCode=1381ED44B07BDACC72D7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start the Course <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/Yash-Kavaiya/awesome-cx-agent-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-1 h-4 w-4" /> Explore on GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link to={f.to}>
                  <Card className="h-full hover:shadow-md transition-all group cursor-pointer border-border">
                    <CardContent className="p-6">
                      <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full ${f.color} ${f.hoverBg} transition-colors`}>
                        <f.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold mb-1 text-foreground">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why CX Agent Studio?</h2>
            <p className="text-muted-foreground text-lg">
              The shift from "Chatbots" to "Agentic Apps" is happening now. These tools give you the infrastructure to build agents that can see, hear, and take action.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Multimodal", desc: "Agents that process text, images, audio, and video", dot: "--google-blue" },
              { title: "Production-Grade", desc: "Enterprise-ready with built-in scalability and security", dot: "--google-green" },
              { title: "Open Source", desc: "Free tools, templates, and accelerators to get started fast", dot: "--google-red" },
            ].map((item, i) => (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="text-center h-full border-border">
                  <CardContent className="p-8">
                    <div className={`mx-auto mb-4 h-3 w-3 rounded-full bg-[hsl(var(${item.dot}))]`} />
                    <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Tools */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Open Source Tools</h2>
            <Button variant="ghost" asChild>
              <Link to="/tools" className="text-primary">View all <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.slice(0, 3).map((tool, i) => (
              <motion.div key={tool.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full hover:shadow-md transition-all group border-border">
                    <CardContent className="p-6">
                      <div className="text-2xl mb-3">{tool.emoji}</div>
                      <h3 className="font-semibold mb-1 font-mono text-sm group-hover:text-primary transition-colors">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                      <div className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Github className="h-3 w-3" /> View on GitHub <ExternalLink className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Start mastering CX Agent Studio today with our comprehensive course and open-source toolkit.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://www.udemy.com/course/cx-agent-studio-build-multimodal-customer-experience-ai/?referralCode=1381ED44B07BDACC72D7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enroll Now <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/tools">Explore Tools</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
