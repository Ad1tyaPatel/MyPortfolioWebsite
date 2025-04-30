import { ThemeProvider } from "../components/theme-provider";
import ThemeToggle from "../components/theme-toggle";
import Navbar from "../components/navbar";
import NeuralNetworkBackground from "../components/neural-network";
import Footer from "../components/footer";

// Sections
import Header from "../sections/header";
import TerminalSection from "../sections/terminal-section";
import TimelineSection from "../sections/timeline-section";
import ProjectsSection from "../sections/projects-section";
import BlogSection from "../sections/blog-section";
import ContactSection from "../sections/contact-section";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark">
      <main className="relative">
        {/* Background */}
        <NeuralNetworkBackground />
        
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Navbar */}
        <Navbar />
        
        {/* Sections */}
        <Header />
        <TerminalSection />
        <TimelineSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        
        {/* Footer */}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
