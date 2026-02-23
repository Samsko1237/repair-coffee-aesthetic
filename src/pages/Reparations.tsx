import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronDown, Phone, ShieldCheck, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RepairTable from "@/components/RepairTable";
import { iphoneModels } from "@/data/repairData";

const Reparations = () => {
  const [search, setSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<typeof iphoneModels[0] | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredModels = useMemo(() => {
    return iphoneModels
      .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => b.year - a.year || a.name.localeCompare(b.name));
  }, [search]);

  const handleSelectModel = (model: typeof iphoneModels[0]) => {
    setSelectedModel(model);
    setIsDropdownOpen(false);
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 pt-28 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-5xl font-display font-bold mb-4">
            Choisissez votre <span className="gradient-text">iPhone</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Sélectionnez votre modèle pour découvrir les réparations disponibles et nos tarifs.
          </p>
        </motion.div>

        {/* Search + Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10 max-w-xl mx-auto space-y-3"
        >
          {/* Barre de recherche */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity -z-10" />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Rechercher un modèle (ex: iPhone 15 Pro)..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setIsDropdownOpen(true);
              }}
              onFocus={() => setIsDropdownOpen(true)}
              className="w-full pl-12 pr-12 py-4 rounded-2xl glass-strong text-sm font-body bg-transparent outline-none focus:box-glow-sm transition-all placeholder:text-muted-foreground"
            />
            {search && (
              <button
                onClick={() => { setSearch(""); setIsDropdownOpen(true); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Bouton dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-2xl glass-strong text-sm font-display font-semibold hover:text-primary transition-all"
            >
              <span className={selectedModel ? "text-foreground" : "text-muted-foreground"}>
                {selectedModel ? selectedModel.name : "Choisissez votre modèle"}
              </span>
              <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-5 h-5 text-primary" />
              </motion.div>
            </button>

            {/* Liste déroulante */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  style={{ transformOrigin: "top" }}
                  className="absolute top-full left-0 right-0 mt-2 z-50 glass-strong rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-72 overflow-y-auto"
                >
                  {filteredModels.length === 0 ? (
                    <div className="px-5 py-6 text-center text-sm text-muted-foreground font-display">
                      Aucun modèle trouvé
                    </div>
                  ) : (
                    filteredModels.map((model, i) => (
                      <motion.button
                        key={model.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        onClick={() => handleSelectModel(model)}
                        className={`w-full flex items-center justify-between px-5 py-3 text-sm font-display text-left transition-all hover:bg-primary/10 hover:text-primary ${
                          selectedModel?.id === model.id ? "bg-primary/15 text-primary" : ""
                        } ${i !== 0 ? "border-t border-white/5" : ""}`}
                      >
                        <span>{model.name}</span>
                        <span className="text-xs text-muted-foreground">
                          dès {Math.min(...model.repairs.map((r) => r.price))}€
                        </span>
                      </motion.button>
                    ))
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Affichage des tarifs du modèle sélectionné */}
        <AnimatePresence mode="wait">
          {selectedModel ? (
            <motion.div
              key={selectedModel.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              {/* En-tête modèle */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold">
                    Réparations — <span className="gradient-text">{selectedModel.name}</span>
                  </h2>
                  <div className="flex gap-3 mt-2 flex-wrap">
                    <span className="px-3 py-1 rounded-lg text-xs font-display glass flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-primary" />
                      dès {Math.min(...selectedModel.repairs.map((r) => r.price))}€
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-display glass flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-primary" />
                      Garantie 1 an
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedModel(null)}
                  className="w-8 h-8 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tableau des réparations */}
              <RepairTable repairs={selectedModel.repairs} />

              {/* CTA contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 p-6 sm:p-8 rounded-2xl glass box-glow text-center"
              >
                <h3 className="text-lg font-display font-bold mb-2">Besoin d'aide ?</h3>
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
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 text-muted-foreground"
            >
              <p className="font-display text-sm">Sélectionnez un modèle pour voir les tarifs</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default Reparations;
