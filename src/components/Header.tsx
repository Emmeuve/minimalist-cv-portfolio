import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Header = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.header
      ref={ref}
      className="w-full bg-primary text-primary-foreground py-12 md:py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="container px-4 md:px-8" style={{ y, opacity }}>
        <div className="flex flex-col gap-8">
          {/* ASCII Art Pattern */}
          <motion.div
            className="font-mono text-[6px] md:text-[8px] leading-[1.1] tracking-tighter opacity-80 select-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <pre className="whitespace-pre">
{`██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝`}
            </pre>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-display"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            tu.nombre
          </motion.h1>

          {/* Info Bar */}
          <motion.div
            className="flex flex-wrap gap-6 md:gap-12 text-caption opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span>Diseñador UX/UI</span>
            <span>Madrid, España</span>
            <span>Disponible para proyectos</span>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            className="flex gap-8 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {[
              { href: "#proyectos", label: "Proyectos" },
              { href: "#sobre-mi", label: "Sobre mí" },
              { href: "#contacto", label: "Contacto" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-caption hover:opacity-100 opacity-70 transition-opacity duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
