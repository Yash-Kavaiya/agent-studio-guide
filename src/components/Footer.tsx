import { Link } from "react-router-dom";
import { Zap, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="h-3.5 w-3.5" />
              </div>
              CX-Agent Studio
            </Link>
            <p className="text-sm text-muted-foreground">
              The complete guide to building next-gen multimodal agents with Google's CX Agent Studio.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Learn</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/courses" className="hover:text-foreground transition-colors">Courses</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/videos" className="hover:text-foreground transition-colors">Videos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Build</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/tools" className="hover:text-foreground transition-colors">Tools & Repos</Link></li>
              <li>
                <a href="https://github.com/Yash-Kavaiya/awesome-cx-agent-studio" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Awesome List <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://github.com/Yash-Kavaiya" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CX-Agent Studio. Built by Yash Kavaiya.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
