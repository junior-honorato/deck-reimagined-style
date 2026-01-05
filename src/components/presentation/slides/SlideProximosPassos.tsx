import { motion } from "framer-motion";
import { CalendarCheck, Share2 } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Reuniões de Acompanhamento",
    description: "Agendar reuniões trimestrais para acompanhar o progresso das ações definidas.",
  },
  {
    icon: Share2,
    number: "02",
    title: "Compartilhamento de Resultados",
    description: "Compartilhar mensalmente os resultados das ações e avaliar o impacto da colaboração.",
  },
];

export const SlideProximosPassos = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 pattern-lines opacity-30" />
      
      {/* Decorative accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-16 lg:px-24 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm font-body uppercase tracking-widest text-primary font-medium">
            Continuidade
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-foreground mb-16"
        >
          Próximos <span className="text-primary">Passos</span>
        </motion.h2>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative bg-card rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-lg transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-display text-primary-foreground">{step.number}</span>
              </div>
              
              <div className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-2xl text-foreground">{step.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
