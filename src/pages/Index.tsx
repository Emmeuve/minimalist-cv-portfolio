import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import { Contact } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProjectGrid />
  <About />
  <Contact />
      <Footer />
    </div>
  );
};

export default Index;
