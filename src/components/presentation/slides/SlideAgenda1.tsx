import { motion } from "framer-motion";
import { Clock, Coffee, Users, Utensils } from "lucide-react";

const agendaItems = [
  { time: "08h30", title: "Chegada", description: "Horário para chegada e acomodação", icon: Clock },
  { time: "09h00", title: "Abertura", description: "Apresentação da agenda", icon: Users },
  { time: "09h15", title: "Retrospectiva", description: "Marcelo Carneiro", icon: Users },
  { time: "10h00", title: "Retrospectiva", description: "Carlos Lial", icon: Users },
  { time: "10h45", title: "Coffee Break", description: "Pausa para o pão de queijo!", icon: Coffee },
  { time: "11h00", title: "Retrospectiva MAG", description: "Apresentação MAG", icon: Users },
  { time: "11h45", title: "Retrospectiva TI", description: "TI Sicoob", icon: Users },
  { time: "12h30", title: "Almoço", description: "Intervalo para almoço", icon: Utensils },
];

export const SlideAgenda1 = () => {
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
            Programação
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-foreground mb-12"
        >
          Agenda <span className="text-primary">Manhã</span>
        </motion.h2>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <span className="text-lg font-display text-primary font-medium">{item.time}</span>
                  <span className="text-lg font-display text-foreground">{item.title}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
