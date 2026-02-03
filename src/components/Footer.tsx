// components/Footer.tsx
import { portfolioData } from "../data/portfolio-data";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Mail,
};

export const Footer = () => {
  const { personal, social } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {personal.name}
            </h3>
            <p className="text-slate-400 mb-4">
              {personal.title}
            </p>
            <p className="text-slate-500 text-sm">
              {personal.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              <a href="#projects" className="block hover:text-purple-400 transition-colors">
                Proyectos
              </a>
              <a href="#experience" className="block hover:text-purple-400 transition-colors">
                Experiencia
              </a>
              <a href="#skills" className="block hover:text-purple-400 transition-colors">
                Habilidades
              </a>
              <a href="#contact" className="block hover:text-purple-400 transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Conecta Conmigo</h4>
            <div className="flex gap-4">
              {social.map((link) => {
                const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-purple-600 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            © {currentYear} {personal.name}. Hecho con{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> y React
          </p>
        </div>
      </div>
    </footer>
  );
};