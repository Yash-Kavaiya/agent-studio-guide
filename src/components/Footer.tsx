import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-[#f8f9fa]">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2 font-medium text-base">
              <div className="flex items-center gap-[2px]">
                <div className="h-2 w-2 rounded-full bg-[#4285F4]" />
                <div className="h-2 w-2 rounded-full bg-[#EA4335]" />
                <div className="h-2 w-2 rounded-full bg-[#FBBC04]" />
                <div className="h-2 w-2 rounded-full bg-[#34A853]" />
              </div>
              CX Agent Studio Guide
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The hub for CX Agent Studio learning — courses, blogs, videos, and open-source tools.
            </p>
            <a
              href="https://cxagentstudio.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
            >
              cxagentstudio.lovable.app <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-foreground text-sm">Learn</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/courses" className="hover:text-primary transition-colors">Courses & Roadmap</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/videos" className="hover:text-primary transition-colors">Videos</Link></li>
              <li>
                <a
                  href="https://medium.com/@yashkavaiya/list/cx-agent-studio-zero-to-prod-blog-series-fab5fd825601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Zero to Prod Series <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-foreground text-sm">Build</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/tools" className="hover:text-primary transition-colors">Tools & Repos</Link></li>
              <li>
                <a href="https://github.com/Yash-Kavaiya/awesome-cx-agent-studio" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                  Awesome List <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                  Official Docs <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://ces.cloud.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                  CX Agent Studio Console <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-foreground text-sm">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://github.com/Yash-Kavaiya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.reddit.com/r/CXAgentStudio/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Reddit Community
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/groups/8701599/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                  LinkedIn Group <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://topmate.io/yash_kavaiya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                  Book Consultation <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com/playlist?list=PLOAciEalMV3GGRZD2RJ7mjOEcI4DXQs0j" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                  YouTube Playlist <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CX Agent Studio Guide. Built by Yash Kavaiya.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
