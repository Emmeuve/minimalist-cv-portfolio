// App.tsx
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;