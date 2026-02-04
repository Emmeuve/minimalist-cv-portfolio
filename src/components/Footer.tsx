import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="w-full py-12 bg-primary text-primary-foreground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-caption opacity-70">© 2024 Emmeuve</p>
          </motion.div>

          <motion.nav
            className="flex flex-wrap gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { href: "#proyectos", label: "Proyectos" },
              { href: "#sobre-mi", label: "Sobre mí" },
              { href: "#contacto", label: "Contacto" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-caption hover:opacity-100 opacity-70 transition-opacity duration-300"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {["LinkedIn", "Dribbble", "Behance"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-caption hover:opacity-100 opacity-70 transition-opacity duration-300"
              >
                {social}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
