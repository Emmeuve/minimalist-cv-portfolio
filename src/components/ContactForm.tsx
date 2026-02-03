// components/Contact.tsx
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio-data";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes integrar con un servicio de email como EmailJS, Formspree, etc.
    const mailtoLink = `mailto:${personal.email}?subject=Contacto desde Portfolio - ${formData.name}&body=${formData.message}%0A%0ADe: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Trabajemos Juntos
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Información de Contacto
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Siempre estoy abierto a discutir nuevos proyectos, oportunidades creativas o asociaciones. No dudes en contactarme.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Email</p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Ubicación</p>
                      <p className="text-white">{personal.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Availability badge */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-block"
            >
              <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-lg px-6 py-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">
                  Disponible para nuevos proyectos
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};