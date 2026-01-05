import { motion } from "framer-motion";

export const SlideCover = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-400" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Logo area */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-display text-2xl">S</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-primary-foreground tracking-wide">SICOOB</span>
              <span className="block text-sm text-accent font-medium -mt-1">Seguradora</span>
            </div>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="font-display text-6xl md:text-8xl text-primary-foreground mb-4 leading-tight">
            ENCONTRO
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl md:text-5xl font-display text-primary">SICOOB</span>
            <span className="text-3xl md:text-5xl font-display text-accent">&</span>
            <span className="text-3xl md:text-5xl font-display text-primary">MAG</span>
          </div>
        </motion.div>

        {/* Year badge */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <div className="glass-card px-12 py-4 rounded-full border border-primary/30 animate-pulse-glow">
            <span className="text-5xl md:text-7xl font-display gradient-gold-text">2026</span>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground/50"
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <span className="text-xs uppercase tracking-widest">Deslize para continuar</span>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};
