import { ChevronRight } from "lucide-react";
import iphoneRepairImg from "@/assets/iphone-repair.jpg";

const repairTypes = [
  { name: "Écran cassé", desc: "Votre écran est fissuré ou ne répond plus ?" },
  { name: "Batterie", desc: "Votre batterie se décharge trop vite ?" },
  { name: "Caméra", desc: "La caméra ne fonctionne plus ou est rayée ?" },
  { name: "Haut-parleur", desc: "Le son ne sort plus à un volume suffisant ?" },
  { name: "Connecteur de charge", desc: "Votre iPhone ne charge plus ?" },
  { name: "Bouton de veille", desc: "Votre bouton ne fonctionne plus ?" },
];

const RepairsSection = () => {
  return (
    <section id="tarifs" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
          Que pouvons-nous faire ?
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Réparations iPhone — toutes les pannes, tous les modèles.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden">
            <img
              src={iphoneRepairImg}
              alt="Réparation iPhone"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Réparations iPhone</h3>
            <div className="space-y-3">
              {repairTypes.map((repair) => (
                <a
                  key={repair.name}
                  href="#devis"
                  className="flex items-center justify-between bg-secondary hover:bg-primary hover:text-primary-foreground p-4 rounded-lg transition-colors group"
                >
                  <div>
                    <p className="font-bold text-sm">{repair.name}</p>
                    <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80">
                      {repair.desc}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 opacity-50 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairsSection;
