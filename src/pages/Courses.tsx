import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Clock,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
  FileText,
  FlaskConical,
  Video,
  Wrench,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { courses, roadmap, RoadmapTopic, TopicType } from "@/data/courses";

const typeConfig: Record<TopicType, { icon: React.ElementType; label: string; color: string }> = {
  docs: { icon: FileText, label: "Docs", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
  github: { icon: Github, label: "GitHub", color: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" },
  video: { icon: Video, label: "Video", color: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300" },
  lab: { icon: FlaskConical, label: "Lab", color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" },
  article: { icon: BookOpen, label: "Article", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300" },
  tool: { icon: Wrench, label: "Tool", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
};

const weekColors: Record<string, string> = {
  blue:   "from-blue-600 to-blue-700",
  green:  "from-green-600 to-emerald-700",
  purple: "from-purple-600 to-violet-700",
  orange: "from-orange-500 to-amber-600",
  red:    "from-red-500 to-rose-600",
  indigo: "from-indigo-600 to-blue-700",
  teal:   "from-teal-600 to-cyan-700",
  pink:   "from-pink-500 to-fuchsia-600",
};

const weekBorderColors: Record<string, string> = {
  blue:   "border-blue-200 dark:border-blue-800",
  green:  "border-green-200 dark:border-green-800",
  purple: "border-purple-200 dark:border-purple-800",
  orange: "border-orange-200 dark:border-orange-800",
  red:    "border-red-200 dark:border-red-800",
  indigo: "border-indigo-200 dark:border-indigo-800",
  teal:   "border-teal-200 dark:border-teal-800",
  pink:   "border-pink-200 dark:border-pink-800",
};

function TopicCard({ topic }: { topic: RoadmapTopic }) {
  const cfg = typeConfig[topic.type];
  const Icon = cfg.icon;
  return (
    <div className="flex gap-3 p-3 rounded-lg border border-border bg-card/60 hover:bg-card transition-colors">
      <div className="shrink-0 mt-0.5">
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${cfg.color}`}>
          <Icon className="h-3 w-3" />
          {cfg.label}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-foreground leading-snug">{topic.title}</p>
          {topic.url && (
            <a
              href={topic.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Open ${topic.title}`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{topic.description}</p>
        {topic.url && (
          <a
            href={topic.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-primary hover:underline"
          >
            View resource <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
}

function WeekCard({ week, index }: { week: (typeof roadmap)[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const gradient = weekColors[week.color] ?? weekColors.blue;
  const border = weekBorderColors[week.color] ?? weekBorderColors.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
    >
      <Card className={`overflow-hidden border ${border}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-expanded={open}
        >
          <CardHeader className="p-0">
            <div className={`bg-gradient-to-r ${gradient} p-4 md:p-5 flex items-center justify-between gap-4`}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <CalendarDays className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Week {week.week}</p>
                  <h3 className="text-base md:text-lg font-bold text-white leading-tight">{week.title}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="hidden md:inline-flex bg-white/20 text-white border-0 text-xs">
                  {week.topics.length} topics
                </Badge>
                {open ? (
                  <ChevronUp className="h-5 w-5 text-white shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-white shrink-0" />
                )}
              </div>
            </div>
          </CardHeader>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <CardContent className="p-4 md:p-5">
                <p className="text-sm text-muted-foreground mb-4 italic">{week.theme}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {week.topics.map((topic) => (
                    <TopicCard key={topic.title} topic={topic} />
                  ))}
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}

const Courses = () => {
  const course = courses[0];
  const totalTopics = roadmap.reduce((sum, w) => sum + w.topics.length, 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Courses &amp; Roadmap</h1>
            <p className="text-lg text-muted-foreground">
              Master CX Agent Studio from beginner to production-ready expert with our structured{" "}
              <span className="font-semibold text-foreground">{roadmap.length}-week curriculum</span> covering{" "}
              {totalTopics} curated topics — including Google's official docs, the CXAS SCRAPI library, and hands-on labs.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {[
              { label: "Weeks", value: roadmap.length, icon: CalendarDays },
              { label: "Total Topics", value: totalTopics, icon: CheckCircle2 },
              { label: "Course Hours", value: "12+", icon: Clock },
              { label: "Skill Level", value: "All", icon: BarChart3 },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center justify-center gap-1 rounded-xl border border-border bg-card p-4">
                <Icon className="h-5 w-5 text-primary mb-1" />
                <span className="text-2xl font-bold text-foreground">{value}</span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Featured course */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mb-14">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Featured Course</h2>
            <Card className="overflow-hidden border-border">
              <div className="md:flex">
                <div className="md:w-2/5 bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">⭐ Recommended</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{course.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm opacity-90 mb-6">
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                    <span className="flex items-center gap-1"><BarChart3 className="h-4 w-4" /> {course.level}</span>
                    <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {course.platform}</span>
                  </div>
                  <Button size="lg" variant="secondary" asChild className="w-fit">
                    <a href={course.url} target="_blank" rel="noopener noreferrer">
                      Start Learning <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">About This Course</h4>
                  <p className="text-muted-foreground mb-6">{course.longDescription}</p>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">What You'll Learn</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {course.modules.map((mod) => (
                      <div key={mod} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[hsl(var(--google-green))] mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Key resources callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mb-10 grid gap-4 sm:grid-cols-2"
          >
            <a
              href="https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  CX Agent Studio Official Docs
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Complete Google Cloud documentation for Customer Engagement AI conversational agents — the primary reference for all 8 weeks.
                </p>
              </div>
            </a>
            <a
              href="https://github.com/GoogleCloudPlatform/cxas-scrapi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  CXAS SCRAPI — Python Library
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Official GoogleCloudPlatform Python library for programmatically managing CX Agent Studio agents — used in Weeks 1, 4, 6, and 7.
                </p>
              </div>
            </a>
          </motion.div>

          {/* Week-wise roadmap */}
          <div className="mb-8">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-bold mb-2 text-foreground">8-Week Learning Roadmap</h2>
              <p className="text-muted-foreground mb-6">
                Click any week to expand its topics, resources, and labs. Week 1 is open by default.
              </p>
            </motion.div>
            <div className="flex flex-col gap-4">
              {roadmap.map((week, i) => (
                <WeekCard key={week.week} week={week} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
