import { motion } from "framer-motion";
import { TrendingUp, BarChart3 } from "lucide-react";

const metrics = [
  { label: "Modernização do Portifólio", value: 57, color: "primary" },
  { label: "Experiência do Cooperado", value: 25, color: "accent" },
  { label: "Experiência da Cooperativa", value: 17, color: "muted" },
  { label: "Processos Chave", value: 46, color: "primary" },
  { label: "Regulação e Controles", value: 56, color: "primary" },
  { label: "Decisão Orientada a Dados", value: 92, color: "accent" },
  { label: "Seguros Integrados", value: 29, color: "muted" },
  { label: "Plataforma Tecnológica", value: 75, color: "primary" },
];

export const SlideRetrospectiva = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 pattern-lines opacity-30" />
      
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-16 lg:px-24 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm font-body uppercase tracking-widest text-primary font-medium">
            Resultados
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-foreground mb-4"
        >
          Retrospectiva <span className="text-primary">2025</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl"
        >
          Eixos temáticos e percentual de conclusão das demandas definidas no encontro anterior.
        </motion.p>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="bg-card rounded-xl p-5 border border-border/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <BarChart3 className="w-5 h-5 text-muted-foreground" />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className={`text-3xl font-display ${metric.value >= 70 ? 'text-primary' : metric.value >= 40 ? 'text-accent' : 'text-muted-foreground'}`}
                >
                  {metric.value}%
                </motion.span>
              </div>
              <p className="text-sm font-body text-foreground font-medium leading-tight">
                {metric.label}
              </p>
              {/* Progress bar */}
              <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full ${metric.value >= 70 ? 'bg-primary' : metric.value >= 40 ? 'bg-accent' : 'bg-muted-foreground/50'}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
