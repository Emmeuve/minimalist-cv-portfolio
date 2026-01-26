import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      className="w-full bg-primary text-primary-foreground py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container px-4 md:px-8">
        <div className="flex flex-col gap-6">
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
            transition={{ delay: 0.5, duration: 0.8 }}
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
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
