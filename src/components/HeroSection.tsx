import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Wrench, Phone, CheckCircle, Zap, Monitor, Star, Clock, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-[80px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-display tracking-wider uppercase text-muted-foreground">
                <Monitor className="w-3 h-3 inline mr-1" />
                Smartphone · Tablette · PC
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              Réparation
              <br />
              <span className="gradient-text">iPhone</span>
              <br />
              experte & rapide
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg mb-8 mx-auto lg:mx-0"
            >
              De l'iPhone X à l'iPhone 17 — diagnostics précis, pièces de qualité
              et réparations garanties. Votre iPhone entre de bonnes mains.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => navigate("/reparations")}
                className="group relative px-8 py-4 rounded-xl gradient-primary font-display font-semibold text-primary-foreground overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <Wrench className="w-5 h-5" />
                  Trouver ma réparation
                </span>
                <motion.div
                  className="absolute inset-0 bg-primary-foreground/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </button>
              <a
                href="tel:+32000000000"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass font-display font-semibold hover:box-glow-sm transition-all"
              >
                <Phone className="w-5 h-5" />
                Nous appeler
              </a>
            </motion.div>
          </div>

          {/* Right 3D phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="flex-1 flex justify-center perspective-1000 hidden sm:flex"
          >
            <motion.div
              className="relative"
              animate={{ rotateY: [0, 5, -5, 0], rotateX: [0, -3, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Phone mockup */}
              <div className="relative w-64 h-[520px] rounded-[3rem] border-2 border-border bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-background rounded-b-2xl" />
                <div className="absolute inset-4 top-10 rounded-2xl gradient-surface flex flex-col items-center justify-center gap-4 p-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Wrench className="w-12 h-12 text-primary" />
                  </motion.div>
                  <p className="text-sm font-display text-center text-muted-foreground">
                    Sélectionnez votre modèle pour voir les réparations disponibles
                  </p>
                  <div className="w-full space-y-2 mt-2">
                    {[
                      { name: "Écran", icon: Monitor },
                      { name: "Batterie", icon: Zap },
                      { name: "Caméra", icon: Star },
                    ].map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.15 }}
                        className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                      >
                        <span className="text-xs flex items-center gap-1.5">
                          <item.icon className="w-3 h-3 text-primary" />
                          {item.name}
                        </span>
                        <span className="text-xs text-primary font-semibold">dès 59€</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-[3rem] bg-primary/10 blur-xl -z-10" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-8 px-3 py-2 rounded-xl glass box-glow-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs font-display text-primary flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Garantie 1 an
                </span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-8 px-3 py-2 rounded-xl glass box-glow-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs font-display text-primary flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Réparation express
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: "10K+", label: "Réparations", icon: Wrench },
            { value: "4.8", label: "Satisfaction", icon: Star },
            { value: "30 min", label: "Délai moyen", icon: Clock },
            { value: "1 an", label: "Garantie", icon: ShieldCheck },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-center p-4 rounded-xl glass"
            >
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-xl sm:text-2xl font-display font-bold gradient-text">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
