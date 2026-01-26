import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "El nombre es requerido" })
    .max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "El email es requerido" })
    .email({ message: "Email inválido" })
    .max(255, { message: "El email debe tener menos de 255 caracteres" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "El mensaje es requerido" })
    .max(1000, { message: "El mensaje debe tener menos de 1000 caracteres" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rightY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const validateField = (field: keyof ContactFormData, value: string) => {
    const fieldSchema = contactSchema.shape[field];
    const result = fieldSchema.safeParse(value);
    
    if (!result.success) {
      setErrors((prev) => ({
        ...prev,
        [field]: result.error.errors[0].message,
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    validateField(name as keyof ContactFormData, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof FormErrors;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por tu mensaje. Te responderé pronto.",
    });

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <section id="contacto" ref={sectionRef} className="w-full py-24 md:py-32 bg-background overflow-hidden">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div style={{ y: leftY }}>
            <motion.h2
              className="text-caption mb-6 text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contacto
            </motion.h2>
            <motion.p
              className="text-body text-lg md:text-xl lg:text-2xl leading-relaxed mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              ¿Tienes un proyecto en mente? Me encantaría escucharte 
              y explorar cómo puedo ayudarte a hacerlo realidad.
            </motion.p>
            
            <motion.div
              className="space-y-4 text-body text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>email@tudominio.com</p>
              <p>LinkedIn · Dribbble · Behance</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div style={{ y: rightY }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-2"
              >
                <label htmlFor="name" className="text-caption block text-muted-foreground">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-transparent border-b-2 py-3 text-body text-lg focus:outline-none transition-colors ${
                    errors.name
                      ? "border-destructive"
                      : "border-border focus:border-foreground"
                  }`}
                  placeholder="Tu nombre"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-destructive"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <label htmlFor="email" className="text-caption block text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-transparent border-b-2 py-3 text-body text-lg focus:outline-none transition-colors ${
                    errors.email
                      ? "border-destructive"
                      : "border-border focus:border-foreground"
                  }`}
                  placeholder="tu@email.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-destructive"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                <label htmlFor="message" className="text-caption block text-muted-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={`w-full bg-transparent border-b-2 py-3 text-body text-lg focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? "border-destructive"
                      : "border-border focus:border-foreground"
                  }`}
                  placeholder="Cuéntame sobre tu proyecto..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-destructive"
                  >
                    {errors.message}
                  </motion.p>
                )}
                <p className="text-xs text-muted-foreground text-right">
                  {formData.message.length}/1000
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full md:w-auto px-12 py-4 text-caption tracking-widest transition-all duration-300 ${
                    isSuccess
                      ? "bg-green-600 text-primary-foreground"
                      : "bg-foreground text-background hover:opacity-90"
                  } disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      ¡Enviado!
                    </span>
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
