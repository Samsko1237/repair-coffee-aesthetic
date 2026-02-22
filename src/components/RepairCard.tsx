import { motion } from "framer-motion";
import { Repair } from "@/data/repairData";
import { Clock, Smartphone, Battery, Camera, SwitchCamera, Plug, PanelTop, Search, Sparkles, Droplets, Wrench, Zap } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "📱": Smartphone,
  "🔋": Battery,
  "📸": Camera,
  "🤳": SwitchCamera,
  "🔌": Plug,
  "🔧": Wrench,
  "🔍": Search,
  "✨": Sparkles,
  "🔎": Search,
  "💧": Droplets,
};

interface RepairCardProps {
  repair: Repair;
  index: number;
}

const RepairCard = ({ repair, index }: RepairCardProps) => {
  const IconComponent = iconMap[repair.icon] || Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.02, x: 5 }}
      className="group relative p-4 sm:p-5 rounded-2xl glass hover:box-glow-sm transition-all duration-300"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Icon */}
        <motion.div
          className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-primary flex items-center justify-center"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.4 }}
        >
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
            {repair.name}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 hidden sm:block">
            {repair.description}
          </p>
          <div className="flex items-center gap-1 mt-2 sm:mt-3 text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span className="text-xs">{repair.duration}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex-shrink-0 text-right">
          <motion.div
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-base sm:text-lg font-display font-bold text-primary">{repair.price}€</p>
          </motion.div>
        </div>
      </div>

      {/* Extras */}
      {repair.extras && repair.extras.length > 0 && (
        <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5">
          {repair.extras.map((extra, i) => (
            <div key={i} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-primary flex-shrink-0" />
                <span className="text-xs text-muted-foreground">{extra.label}</span>
              </div>
              <span className="flex-shrink-0 text-xs font-display font-semibold text-primary">
                + {extra.price}€
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default RepairCard;
