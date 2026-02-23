import { motion } from "framer-motion";
import { Repair } from "@/data/repairData";
import { Clock, Zap } from "lucide-react";

interface RepairTableProps {
  repairs: Repair[];
}

const RepairTable = ({ repairs }: RepairTableProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full overflow-hidden rounded-2xl glass border border-white/10"
    >
      {/* En-tête du tableau */}
      <div className="grid grid-cols-[1fr_auto_auto_auto] sm:grid-cols-[1fr_100px_100px_1fr] gap-0 px-4 sm:px-6 py-3 border-b border-white/10 bg-primary/10">
        <span className="text-xs font-display font-semibold text-primary uppercase tracking-wider">Réparation</span>
        <span className="text-xs font-display font-semibold text-primary uppercase tracking-wider text-center">Prix</span>
        <span className="text-xs font-display font-semibold text-primary uppercase tracking-wider text-center hidden sm:block">Durée</span>
        <span className="text-xs font-display font-semibold text-primary uppercase tracking-wider text-right hidden sm:block">Option express</span>
      </div>

      {/* Lignes */}
      {repairs.map((repair, i) => (
        <motion.div
          key={repair.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + i * 0.05 }}
          className={`grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_100px_100px_1fr] gap-0 px-4 sm:px-6 py-4 items-start transition-colors hover:bg-primary/5 ${
            i !== repairs.length - 1 ? "border-b border-white/5" : ""
          }`}
        >
          {/* Nom + description */}
          <div className="flex flex-col gap-0.5 pr-4">
            <span className="text-sm font-display font-semibold text-foreground">
              {repair.name}
            </span>
            <span className="text-xs text-muted-foreground leading-relaxed hidden sm:block">
              {repair.description}
            </span>
            {/* Durée visible uniquement sur mobile */}
            <div className="flex items-center gap-1 mt-1 text-muted-foreground sm:hidden">
              <Clock className="w-3 h-3" />
              <span className="text-xs">{repair.duration}</span>
            </div>
            {/* Option express sur mobile */}
            {repair.extras && repair.extras.length > 0 && (
              <div className="mt-1.5 space-y-1 sm:hidden">
                {repair.extras.map((extra, j) => (
                  <div key={j} className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-primary font-display">
                      {extra.label} : {extra.price}€
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Prix */}
          <div className="flex items-start justify-center pt-0.5">
            <span className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-sm font-display font-bold text-primary whitespace-nowrap">
              {repair.price} €
            </span>
          </div>

          {/* Durée — desktop */}
          <div className="hidden sm:flex items-start justify-center pt-0.5">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span className="text-xs font-display whitespace-nowrap">{repair.duration}</span>
            </div>
          </div>

          {/* Option express — desktop */}
          <div className="hidden sm:flex items-start justify-end pt-0.5">
            {repair.extras && repair.extras.length > 0 ? (
              <div className="space-y-1 text-right">
                {repair.extras.map((extra, j) => (
                  <div key={j} className="flex items-center gap-1.5 justify-end">
                    <Zap className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-primary font-display">
                      {extra.label} : {extra.price}€
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <span className="text-xs text-muted-foreground/30">—</span>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default RepairTable;
