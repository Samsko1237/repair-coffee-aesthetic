import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, DollarSign, ShieldCheck, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RepairTable from "@/components/RepairTable";
import { iphoneModels } from "@/data/repairData";

const RepairDetail = () => {
  const { modelId } = useParams();
  const navigate = useNavigate();
  const model = iphoneModels.find((m) => m.id === modelId);

  if (!model) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">😔</p>
          <p className="text-xl font-display mb-4">Modèle non trouvé</p>
          <button
            onClick={() => navigate("/reparations")}
            className="px-6 py-3 rounded-xl gradient-primary font-display text-primary-foreground"
          >
            Retour aux modèles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 pt-28 pb-12">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/reparations")}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-display"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux modèles
        </motion.button>

        {/* Model header */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="perspective-1000"
          >
            <motion.div
              animate={{ rotateY: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="preserve-3d"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl glass p-4 sm:p-6 box-glow">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-ultramarine-select-202409?wid=400";
                  }}
                />
                <div className="absolute -inset-2 rounded-3xl bg-primary/10 blur-xl -z-10" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold mb-2">
              Réparation <span className="gradient-text">{model.name}</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              {model.repairs.length} réparations disponibles · Garantie incluse
            </p>
            <div className="flex gap-2 sm:gap-3 justify-center md:justify-start flex-wrap">
              <span className="px-3 py-1 rounded-lg text-xs font-display glass flex items-center gap-1">
                <Calendar className="w-3 h-3 text-primary" /> {model.year}
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-display glass flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-primary" /> dès {Math.min(...model.repairs.map((r) => r.price))}€
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-display glass flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-primary" /> Garantie 1 an
              </span>
            </div>
          </motion.div>
        </div>

        {/* Repairs list */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-display font-bold mb-6"
        >
          Réparations & tarifs
        </motion.h2>

        <div className="max-w-3xl">
          <RepairTable repairs={model.repairs} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl glass box-glow text-center max-w-3xl"
        >
          <h3 className="text-xl font-display font-bold mb-2">Besoin d'aide ?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Contactez-nous pour un diagnostic gratuit ou pour prendre rendez-vous.
          </p>
          <a
            href="tel:+32000000000"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl gradient-primary font-display font-semibold text-primary-foreground hover:scale-105 transition-transform"
          >
            <Phone className="w-5 h-5" />
            Nous contacter
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default RepairDetail;
