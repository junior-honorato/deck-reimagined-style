import { motion } from "framer-motion";
import { Users, Lightbulb, Rocket } from "lucide-react";

const objectives = [
  {
    icon: Users,
    title: "Colaboração Aprimorada",
    description: "Promover troca de conhecimentos e experiências entre as equipes.",
    delay: 0.2,
  },
  {
    icon: Lightbulb,
    title: "Sinergia de Projetos",
    description: "Identificar oportunidades de colaboração e sinergia entre os projetos.",
    delay: 0.4,
  },
  {
    icon: Rocket,
    title: "Soluções Inovadoras",
    description: "Desenvolver soluções inovadoras nos desafios priorizados para 2026.",
    delay: 0.6,
  },
];

export const SlideObjetivo = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-lines opacity-50" />
      
      {/* Accent shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-16 lg:px-24 py-20">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm font-body uppercase tracking-widest text-primary font-medium">
            Propósito
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-foreground mb-16"
        >
          Objetivo do <span className="text-primary">Encontro</span>
        </motion.h2>

        {/* Objectives grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: obj.delay }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 border border-border/50 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <obj.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {obj.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {obj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
