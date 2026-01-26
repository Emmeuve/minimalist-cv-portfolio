import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rightY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="sobre-mi" ref={sectionRef} className="w-full py-24 md:py-32 bg-card overflow-hidden">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column */}
          <motion.div style={{ y: leftY, opacity }}>
            <motion.h2
              className="text-caption mb-6 text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Sobre mí
            </motion.h2>
            <motion.p
              className="text-body text-lg md:text-xl lg:text-2xl leading-relaxed mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Diseñador UX/UI con más de 5 años de experiencia creando 
              experiencias digitales memorables. Mi enfoque combina 
              funcionalidad con estética, siempre priorizando al usuario.
            </motion.p>
            <motion.p
              className="text-body text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Especializado en diseño de interfaces, sistemas de diseño, 
              prototipado y dirección creativa para marcas que buscan 
              destacar en el espacio digital.
            </motion.p>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div style={{ y: rightY }} className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-caption mb-4 text-muted-foreground">Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                {["UI Design", "UX Research", "Prototyping", "Design Systems", "Figma", "Adobe CC", "HTML/CSS", "React"].map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="text-body px-3 py-1.5 border border-border hover:bg-foreground hover:text-background transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-caption mb-4 text-muted-foreground">Experiencia</h3>
              <ul className="space-y-3 text-body">
                {[
                  { role: "Senior UI Designer", period: "2022 — Actual" },
                  { role: "UX Designer", period: "2020 — 2022" },
                  { role: "Visual Designer", period: "2018 — 2020" },
                ].map((exp, i) => (
                  <motion.li
                    key={exp.role}
                    className="flex justify-between items-center py-2 border-b border-border/50"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    <span className="font-medium">{exp.role}</span>
                    <span className="text-muted-foreground text-sm">{exp.period}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
