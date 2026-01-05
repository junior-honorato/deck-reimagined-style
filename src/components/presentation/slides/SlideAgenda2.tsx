import { motion } from "framer-motion";
import { Zap, ClipboardList, PartyPopper } from "lucide-react";

const afternoonItems = [
  { 
    time: "14h00", 
    title: "Dinâmica para acordar", 
    description: "Dinâmica para promover o despertar das equipes pós almoço.",
    icon: Zap,
    color: "from-accent to-accent/80"
  },
  { 
    time: "14h15", 
    title: "Apresentação do Backlog de Projetos", 
    description: "Apresentar os projetos priorizados para 2026, classificados por trimestre.",
    icon: ClipboardList,
    color: "from-primary to-primary/80"
  },
  { 
    time: "18h00", 
    title: "Encerramento", 
    description: "Partiu Happy Hour!!!",
    icon: PartyPopper,
    color: "from-accent to-accent/80"
  },
];

export const SlideAgenda2 = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 pattern-dots opacity-20" />
      
      {/* Gradient accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent" />
      
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-16 lg:px-24 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm font-body uppercase tracking-widest text-primary font-medium">
            Programação
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-primary-foreground mb-16"
        >
          Agenda <span className="text-accent">Tarde</span>
        </motion.h2>

        {/* Cards */}
        <div className="space-y-6 max-w-4xl">
          {afternoonItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="glass-card bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-2xl font-display text-primary font-medium">{item.time}</span>
                    <span className="text-2xl font-display text-primary-foreground">{item.title}</span>
                  </div>
                  <p className="text-lg text-primary-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
