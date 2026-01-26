import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProjectGrid />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
