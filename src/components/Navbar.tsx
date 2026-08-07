import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/tools", label: "Tools" },
  { to: "/blog", label: "Blog" },
  { to: "/videos", label: "Videos" },
];

const GoogleDots = () => (
  <div className="flex items-center gap-[3px]">
    <div className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
    <div className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
    <div className="h-2.5 w-2.5 rounded-full bg-[#FBBC04]" />
    <div className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-medium text-[15px] text-foreground">
          <GoogleDots />
          <span>CX Agent Studio Guide</span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                location.pathname === link.to
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="ml-3 rounded-full" size="sm">
            <a
              href="https://www.udemy.com/course/cx-agent-studio-build-multimodal-customer-experience-ai/?referralCode=1381ED44B07BDACC72D7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Learning
            </a>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <nav className="flex flex-col gap-1 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-secondary ${
                    location.pathname === link.to
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 rounded-full">
                <a
                  href="https://www.udemy.com/course/cx-agent-studio-build-multimodal-customer-experience-ai/?referralCode=1381ED44B07BDACC72D7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Learning
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
