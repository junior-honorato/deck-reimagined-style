import { motion } from "framer-motion";

const participants = [
  {
    logo: "SICOOB",
    subtitle: "Seguradora",
    description: "Representantes da Equipe Sicoob Seguradora nas áreas de projetos e operações.",
    color: "primary",
  },
  {
    logo: "SICOOB",
    subtitle: "TI",
    description: "Representantes da Equipe TI Sicoob das Squad's Vida/VGBL e Prestamista.",
    color: "primary",
  },
  {
    logo: "MAG",
    subtitle: "Seguros",
    description: "Representantes da Equipe MAG.",
    color: "accent",
  },
];

export const SlideParticipantes = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-16 lg:px-24 py-20">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm font-body uppercase tracking-widest text-primary font-medium">
            Equipes
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-primary-foreground mb-16"
        >
          Participantes do <span className="text-primary">Encontro</span>
        </motion.h2>

        {/* Participants list */}
        <div className="space-y-6 max-w-4xl">
          {participants.map((participant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="glass-card bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className={`flex-shrink-0 w-24 h-24 rounded-xl bg-gradient-to-br ${participant.color === 'accent' ? 'from-accent to-accent/80' : 'from-primary to-primary/80'} flex flex-col items-center justify-center`}>
                  <span className="text-lg font-bold text-primary-foreground">{participant.logo}</span>
                  <span className="text-xs text-primary-foreground/80">{participant.subtitle}</span>
                </div>
                <p className="font-body text-lg text-primary-foreground/80 leading-relaxed">
                  {participant.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative crosses pattern */}
        <div className="absolute right-16 bottom-1/3 grid grid-cols-6 gap-4 opacity-30">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.02 }}
              className="text-primary text-lg"
            >
              +
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};
