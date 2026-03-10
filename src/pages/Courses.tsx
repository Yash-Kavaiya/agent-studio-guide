import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { courses } from "@/data/courses";

const Courses = () => {
  const course = courses[0];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Courses</h1>
            <p className="text-lg text-muted-foreground">
              Master CX Agent Studio from beginner to advanced with our comprehensive curriculum.
            </p>
          </motion.div>

          {/* Featured course */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="overflow-hidden border-border">
              <div className="md:flex">
                <div className="md:w-2/5 bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">Featured Course</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{course.title}</h2>
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
                  <h3 className="font-semibold text-lg mb-2 text-foreground">About This Course</h3>
                  <p className="text-muted-foreground mb-6">{course.longDescription}</p>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">What You'll Learn</h3>
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
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
