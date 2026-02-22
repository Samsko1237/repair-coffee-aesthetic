import { motion } from "framer-motion";
import { iPhoneModel } from "@/data/repairData";
import { Wrench } from "lucide-react";

interface ModelCardProps {
  model: iPhoneModel;
  index: number;
  onClick: () => void;
}

const ModelCard = ({ model, index, onClick }: ModelCardProps) => {
  const lowestPrice = Math.min(...model.repairs.map((r) => r.price));

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-full text-left p-4 sm:p-5 rounded-2xl glass hover:box-glow transition-all duration-300 perspective-1000"
    >
      <div className="preserve-3d">
        {/* Image */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <motion.img
            src={model.image}
            alt={model.name}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg"
            whileHover={{ rotateY: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-ultramarine-select-202409?wid=400";
            }}
          />
        </div>

        {/* Info */}
        <h3 className="font-display font-semibold text-xs sm:text-sm text-center mb-1 group-hover:text-primary transition-colors leading-tight">
          {model.name}
        </h3>
        <p className="text-[10px] sm:text-xs text-muted-foreground text-center mb-2">{model.year}</p>
        <div className="flex items-center justify-center gap-1">
          <span className="text-[10px] sm:text-xs text-muted-foreground">dès</span>
          <span className="text-xs sm:text-sm font-display font-bold text-primary">{lowestPrice}€</span>
        </div>
        <div className="flex items-center justify-center gap-1 mt-1 text-muted-foreground">
          <Wrench className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <p className="text-[9px] sm:text-[10px]">
            {model.repairs.length} réparations
          </p>
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
    </motion.button>
  );
};

export default ModelCard;
