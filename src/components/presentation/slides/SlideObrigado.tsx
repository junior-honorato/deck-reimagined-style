import { motion } from "framer-motion";

export const SlideObrigado = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-400" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-display text-7xl md:text-9xl text-primary-foreground mb-8 leading-tight">
            Muito
            <br />
            <span className="gradient-text">Obrigado!</span>
          </h1>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-8 mt-12"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display text-lg">S</span>
            </div>
            <div>
              <span className="text-lg font-bold text-primary-foreground">SICOOB</span>
              <span className="block text-xs text-primary -mt-0.5">Seguradora</span>
            </div>
          </div>

          <span className="text-2xl text-accent font-display">&</span>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-display text-lg">M</span>
            </div>
            <div>
              <span className="text-lg font-bold text-primary-foreground">MAG</span>
              <span className="block text-xs text-accent -mt-0.5">Seguros</span>
            </div>
          </div>
        </motion.div>

        {/* Year */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <span className="text-6xl font-display gradient-gold-text">2026</span>
        </motion.div>
      </div>
    </div>
  );
};
