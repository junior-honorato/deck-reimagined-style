import { motion } from "framer-motion";
import { AlertTriangle, Clock, Target, Calendar } from "lucide-react";

const quadrants = [
  {
    title: "Fazer Primeiro",
    subtitle: "Muito Urgente e Muito Importante",
    icon: AlertTriangle,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    position: "top-left",
  },
  {
    title: "Agendar",
    subtitle: "Pouco Urgente e Muito Importante",
    icon: Calendar,
    color: "from-primary to-primary/80",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/20",
    position: "top-right",
  },
  {
    title: "Delegar",
    subtitle: "Muito Urgente e Pouco Importante",
    icon: Clock,
    color: "from-accent to-accent/80",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    position: "bottom-left",
  },
  {
    title: "Eliminar",
    subtitle: "Pouco Urgente e Pouco Importante",
    icon: Target,
    color: "from-muted-foreground to-muted-foreground/80",
    bgColor: "bg-muted",
    borderColor: "border-border",
    position: "bottom-right",
  },
];

export const SlideMatriz = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 pattern-dots opacity-20" />
      
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-16 lg:px-24 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm font-body uppercase tracking-widest text-primary font-medium">
            Priorização
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-primary-foreground mb-12"
        >
          Matriz de <span className="text-accent">Eisenhower</span>
        </motion.h2>

        {/* Matrix grid */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl">
          {/* Axis labels */}
          <div className="col-span-2 flex justify-center mb-2">
            <span className="text-sm uppercase tracking-widest text-primary-foreground/50">Importante →</span>
          </div>
          
          {quadrants.map((quadrant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`${quadrant.bgColor} backdrop-blur-sm rounded-2xl p-6 ${quadrant.borderColor} border hover:scale-105 transition-transform duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${quadrant.color} flex items-center justify-center mb-4`}>
                <quadrant.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-1">{quadrant.title}</h3>
              <p className="text-sm text-muted-foreground">{quadrant.subtitle}</p>
            </motion.div>
          ))}

          {/* Axis label */}
          <div className="col-span-2 flex justify-start mt-2">
            <span className="text-sm uppercase tracking-widest text-primary-foreground/50">← Urgente</span>
          </div>
        </div>
      </div>
    </div>
  );
};
