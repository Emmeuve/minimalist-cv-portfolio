import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProjectGrid />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
