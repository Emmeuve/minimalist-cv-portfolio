import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-caption mb-6 text-muted-foreground">Sobre mí</h2>
            <p className="text-body text-lg md:text-xl leading-relaxed mb-6">
              Diseñador UX/UI con más de 5 años de experiencia creando 
              experiencias digitales memorables. Mi enfoque combina 
              funcionalidad con estética, siempre priorizando al usuario.
            </p>
            <p className="text-body text-muted-foreground">
              Especializado en diseño de interfaces, sistemas de diseño, 
              prototipado y dirección creativa para marcas que buscan 
              destacar en el espacio digital.
            </p>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-caption mb-4 text-muted-foreground">Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                {["UI Design", "UX Research", "Prototyping", "Design Systems", "Figma", "Adobe CC", "HTML/CSS", "React"].map((skill) => (
                  <span key={skill} className="text-body px-3 py-1 border border-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-caption mb-4 text-muted-foreground">Experiencia</h3>
              <ul className="space-y-3 text-body">
                <li className="flex justify-between">
                  <span>Senior UI Designer</span>
                  <span className="text-muted-foreground">2022 — Actual</span>
                </li>
                <li className="flex justify-between">
                  <span>UX Designer</span>
                  <span className="text-muted-foreground">2020 — 2022</span>
                </li>
                <li className="flex justify-between">
                  <span>Visual Designer</span>
                  <span className="text-muted-foreground">2018 — 2020</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
