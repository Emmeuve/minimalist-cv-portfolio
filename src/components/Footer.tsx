import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="w-full py-16 md:py-24 bg-primary text-primary-foreground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Contact */}
          <div className="md:col-span-2">
            <h2 className="text-caption mb-6 opacity-50">Contacto</h2>
            <a 
              href="mailto:hola@tunombre.com" 
              className="text-title text-2xl md:text-3xl hover-lift inline-block hover:opacity-70 transition-opacity"
            >
              hola@tunombre.com
            </a>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-caption mb-6 opacity-50">Social</h2>
            <ul className="space-y-3 text-body">
              {[
                { name: "LinkedIn", url: "#" },
                { name: "Behance", url: "#" },
                { name: "Dribbble", url: "#" },
                { name: "Instagram", url: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="hover:opacity-70 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-caption mb-6 opacity-50">Ubicación</h2>
            <address className="text-body not-italic space-y-1">
              <p>Madrid, España</p>
              <p className="opacity-50">Disponible remoto</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between gap-4 text-caption opacity-50">
          <p>© 2024 Tu Nombre. Todos los derechos reservados.</p>
          <p>Diseñado con pasión</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
