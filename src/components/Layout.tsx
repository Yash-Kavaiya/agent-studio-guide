import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GoogleColorBar from "./GoogleColorBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <GoogleColorBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
