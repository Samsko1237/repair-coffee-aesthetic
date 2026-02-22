import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const iphoneModels = [
  "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
  "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
  "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
  "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13",
  "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12",
  "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
  "iPhone SE (3ème gén.)", "iPhone SE (2ème gén.)",
  "iPhone XS Max", "iPhone XS", "iPhone XR",
  "iPhone X", "iPhone 8 Plus", "iPhone 8",
];

type PriceData = {
  [model: string]: { repair: string; price: string; duration: string }[];
};

const priceData: PriceData = {
  "iPhone 16 Pro Max": [
    { repair: "Écran", price: "389€", duration: "1h" },
    { repair: "Batterie", price: "89€", duration: "30 min" },
    { repair: "Caméra arrière", price: "189€", duration: "1h" },
    { repair: "Caméra avant", price: "99€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "119€", duration: "1h" },
    { repair: "Haut-parleur", price: "79€", duration: "30 min" },
    { repair: "Bouton power", price: "89€", duration: "45 min" },
  ],
  "iPhone 16 Pro": [
    { repair: "Écran", price: "349€", duration: "1h" },
    { repair: "Batterie", price: "89€", duration: "30 min" },
    { repair: "Caméra arrière", price: "179€", duration: "1h" },
    { repair: "Caméra avant", price: "89€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "109€", duration: "1h" },
    { repair: "Haut-parleur", price: "79€", duration: "30 min" },
    { repair: "Bouton power", price: "89€", duration: "45 min" },
  ],
  "iPhone 16 Plus": [
    { repair: "Écran", price: "319€", duration: "1h" },
    { repair: "Batterie", price: "79€", duration: "30 min" },
    { repair: "Caméra arrière", price: "149€", duration: "1h" },
    { repair: "Caméra avant", price: "89€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "99€", duration: "1h" },
    { repair: "Haut-parleur", price: "69€", duration: "30 min" },
    { repair: "Bouton power", price: "79€", duration: "45 min" },
  ],
  "iPhone 16": [
    { repair: "Écran", price: "289€", duration: "1h" },
    { repair: "Batterie", price: "79€", duration: "30 min" },
    { repair: "Caméra arrière", price: "139€", duration: "1h" },
    { repair: "Caméra avant", price: "79€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "99€", duration: "1h" },
    { repair: "Haut-parleur", price: "69€", duration: "30 min" },
    { repair: "Bouton power", price: "79€", duration: "45 min" },
  ],
  "iPhone 15 Pro Max": [
    { repair: "Écran", price: "349€", duration: "1h" },
    { repair: "Batterie", price: "79€", duration: "30 min" },
    { repair: "Caméra arrière", price: "169€", duration: "1h" },
    { repair: "Caméra avant", price: "89€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "109€", duration: "1h" },
    { repair: "Haut-parleur", price: "69€", duration: "30 min" },
    { repair: "Bouton power", price: "79€", duration: "45 min" },
  ],
  "iPhone 15 Pro": [
    { repair: "Écran", price: "319€", duration: "1h" },
    { repair: "Batterie", price: "79€", duration: "30 min" },
    { repair: "Caméra arrière", price: "159€", duration: "1h" },
    { repair: "Caméra avant", price: "79€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "99€", duration: "1h" },
    { repair: "Haut-parleur", price: "69€", duration: "30 min" },
    { repair: "Bouton power", price: "79€", duration: "45 min" },
  ],
  "iPhone 15 Plus": [
    { repair: "Écran", price: "279€", duration: "1h" },
    { repair: "Batterie", price: "69€", duration: "30 min" },
    { repair: "Caméra arrière", price: "139€", duration: "1h" },
    { repair: "Caméra avant", price: "79€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "89€", duration: "1h" },
    { repair: "Haut-parleur", price: "59€", duration: "30 min" },
    { repair: "Bouton power", price: "69€", duration: "45 min" },
  ],
  "iPhone 15": [
    { repair: "Écran", price: "249€", duration: "1h" },
    { repair: "Batterie", price: "69€", duration: "30 min" },
    { repair: "Caméra arrière", price: "129€", duration: "1h" },
    { repair: "Caméra avant", price: "69€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "89€", duration: "1h" },
    { repair: "Haut-parleur", price: "59€", duration: "30 min" },
    { repair: "Bouton power", price: "69€", duration: "45 min" },
  ],
  "iPhone 14 Pro Max": [
    { repair: "Écran", price: "319€", duration: "1h" },
    { repair: "Batterie", price: "69€", duration: "30 min" },
    { repair: "Caméra arrière", price: "149€", duration: "1h" },
    { repair: "Caméra avant", price: "79€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "99€", duration: "1h" },
    { repair: "Haut-parleur", price: "59€", duration: "30 min" },
    { repair: "Bouton power", price: "69€", duration: "45 min" },
  ],
  "iPhone 14 Pro": [
    { repair: "Écran", price: "289€", duration: "1h" },
    { repair: "Batterie", price: "69€", duration: "30 min" },
    { repair: "Caméra arrière", price: "139€", duration: "1h" },
    { repair: "Caméra avant", price: "69€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "89€", duration: "1h" },
    { repair: "Haut-parleur", price: "59€", duration: "30 min" },
    { repair: "Bouton power", price: "69€", duration: "45 min" },
  ],
  "iPhone 14 Plus": [
    { repair: "Écran", price: "259€", duration: "1h" },
    { repair: "Batterie", price: "59€", duration: "30 min" },
    { repair: "Caméra arrière", price: "119€", duration: "1h" },
    { repair: "Caméra avant", price: "69€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "79€", duration: "1h" },
    { repair: "Haut-parleur", price: "49€", duration: "30 min" },
    { repair: "Bouton power", price: "59€", duration: "45 min" },
  ],
  "iPhone 14": [
    { repair: "Écran", price: "229€", duration: "1h" },
    { repair: "Batterie", price: "59€", duration: "30 min" },
    { repair: "Caméra arrière", price: "109€", duration: "1h" },
    { repair: "Caméra avant", price: "59€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "79€", duration: "1h" },
    { repair: "Haut-parleur", price: "49€", duration: "30 min" },
    { repair: "Bouton power", price: "59€", duration: "45 min" },
  ],
  "iPhone 13 Pro Max": [
    { repair: "Écran", price: "279€", duration: "1h" },
    { repair: "Batterie", price: "59€", duration: "30 min" },
    { repair: "Caméra arrière", price: "129€", duration: "1h" },
    { repair: "Caméra avant", price: "69€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "79€", duration: "1h" },
    { repair: "Haut-parleur", price: "49€", duration: "30 min" },
    { repair: "Bouton power", price: "59€", duration: "45 min" },
  ],
  "iPhone 13 Pro": [
    { repair: "Écran", price: "249€", duration: "1h" },
    { repair: "Batterie", price: "59€", duration: "30 min" },
    { repair: "Caméra arrière", price: "119€", duration: "1h" },
    { repair: "Caméra avant", price: "59€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "69€", duration: "1h" },
    { repair: "Haut-parleur", price: "49€", duration: "30 min" },
    { repair: "Bouton power", price: "59€", duration: "45 min" },
  ],
  "iPhone 13 mini": [
    { repair: "Écran", price: "219€", duration: "1h" },
    { repair: "Batterie", price: "55€", duration: "30 min" },
    { repair: "Caméra arrière", price: "99€", duration: "1h" },
    { repair: "Caméra avant", price: "59€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "69€", duration: "1h" },
    { repair: "Haut-parleur", price: "45€", duration: "30 min" },
    { repair: "Bouton power", price: "55€", duration: "45 min" },
  ],
  "iPhone 13": [
    { repair: "Écran", price: "209€", duration: "1h" },
    { repair: "Batterie", price: "55€", duration: "30 min" },
    { repair: "Caméra arrière", price: "99€", duration: "1h" },
    { repair: "Caméra avant", price: "55€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "69€", duration: "1h" },
    { repair: "Haut-parleur", price: "45€", duration: "30 min" },
    { repair: "Bouton power", price: "55€", duration: "45 min" },
  ],
  "iPhone 12 Pro Max": [
    { repair: "Écran", price: "239€", duration: "1h" },
    { repair: "Batterie", price: "55€", duration: "30 min" },
    { repair: "Caméra arrière", price: "109€", duration: "1h" },
    { repair: "Caméra avant", price: "59€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "69€", duration: "1h" },
    { repair: "Haut-parleur", price: "45€", duration: "30 min" },
    { repair: "Bouton power", price: "55€", duration: "45 min" },
  ],
  "iPhone 12 Pro": [
    { repair: "Écran", price: "209€", duration: "1h" },
    { repair: "Batterie", price: "55€", duration: "30 min" },
    { repair: "Caméra arrière", price: "99€", duration: "1h" },
    { repair: "Caméra avant", price: "55€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "65€", duration: "1h" },
    { repair: "Haut-parleur", price: "45€", duration: "30 min" },
    { repair: "Bouton power", price: "55€", duration: "45 min" },
  ],
  "iPhone 12 mini": [
    { repair: "Écran", price: "179€", duration: "1h" },
    { repair: "Batterie", price: "49€", duration: "30 min" },
    { repair: "Caméra arrière", price: "89€", duration: "1h" },
    { repair: "Caméra avant", price: "49€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "59€", duration: "1h" },
    { repair: "Haut-parleur", price: "39€", duration: "30 min" },
    { repair: "Bouton power", price: "49€", duration: "45 min" },
  ],
  "iPhone 12": [
    { repair: "Écran", price: "179€", duration: "1h" },
    { repair: "Batterie", price: "49€", duration: "30 min" },
    { repair: "Caméra arrière", price: "89€", duration: "1h" },
    { repair: "Caméra avant", price: "49€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "59€", duration: "1h" },
    { repair: "Haut-parleur", price: "39€", duration: "30 min" },
    { repair: "Bouton power", price: "49€", duration: "45 min" },
  ],
  "iPhone 11 Pro Max": [
    { repair: "Écran", price: "219€", duration: "1h" },
    { repair: "Batterie", price: "49€", duration: "30 min" },
    { repair: "Caméra arrière", price: "99€", duration: "1h" },
    { repair: "Caméra avant", price: "49€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "59€", duration: "1h" },
    { repair: "Haut-parleur", price: "39€", duration: "30 min" },
    { repair: "Bouton power", price: "49€", duration: "45 min" },
  ],
  "iPhone 11 Pro": [
    { repair: "Écran", price: "199€", duration: "1h" },
    { repair: "Batterie", price: "49€", duration: "30 min" },
    { repair: "Caméra arrière", price: "89€", duration: "1h" },
    { repair: "Caméra avant", price: "45€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "55€", duration: "1h" },
    { repair: "Haut-parleur", price: "39€", duration: "30 min" },
    { repair: "Bouton power", price: "45€", duration: "45 min" },
  ],
  "iPhone 11": [
    { repair: "Écran", price: "149€", duration: "1h" },
    { repair: "Batterie", price: "45€", duration: "30 min" },
    { repair: "Caméra arrière", price: "79€", duration: "1h" },
    { repair: "Caméra avant", price: "39€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "49€", duration: "1h" },
    { repair: "Haut-parleur", price: "35€", duration: "30 min" },
    { repair: "Bouton power", price: "45€", duration: "45 min" },
  ],
  "iPhone SE (3ème gén.)": [
    { repair: "Écran", price: "109€", duration: "45 min" },
    { repair: "Batterie", price: "45€", duration: "30 min" },
    { repair: "Caméra arrière", price: "59€", duration: "45 min" },
    { repair: "Caméra avant", price: "39€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "49€", duration: "45 min" },
    { repair: "Haut-parleur", price: "35€", duration: "30 min" },
    { repair: "Bouton power", price: "39€", duration: "30 min" },
  ],
  "iPhone SE (2ème gén.)": [
    { repair: "Écran", price: "89€", duration: "45 min" },
    { repair: "Batterie", price: "39€", duration: "30 min" },
    { repair: "Caméra arrière", price: "49€", duration: "45 min" },
    { repair: "Caméra avant", price: "35€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "45€", duration: "45 min" },
    { repair: "Haut-parleur", price: "29€", duration: "30 min" },
    { repair: "Bouton power", price: "35€", duration: "30 min" },
  ],
  "iPhone XS Max": [
    { repair: "Écran", price: "179€", duration: "1h" },
    { repair: "Batterie", price: "45€", duration: "30 min" },
    { repair: "Caméra arrière", price: "69€", duration: "45 min" },
    { repair: "Caméra avant", price: "39€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "49€", duration: "45 min" },
    { repair: "Haut-parleur", price: "35€", duration: "30 min" },
    { repair: "Bouton power", price: "39€", duration: "30 min" },
  ],
  "iPhone XS": [
    { repair: "Écran", price: "159€", duration: "1h" },
    { repair: "Batterie", price: "45€", duration: "30 min" },
    { repair: "Caméra arrière", price: "59€", duration: "45 min" },
    { repair: "Caméra avant", price: "35€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "45€", duration: "45 min" },
    { repair: "Haut-parleur", price: "35€", duration: "30 min" },
    { repair: "Bouton power", price: "39€", duration: "30 min" },
  ],
  "iPhone XR": [
    { repair: "Écran", price: "129€", duration: "1h" },
    { repair: "Batterie", price: "45€", duration: "30 min" },
    { repair: "Caméra arrière", price: "59€", duration: "45 min" },
    { repair: "Caméra avant", price: "35€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "45€", duration: "45 min" },
    { repair: "Haut-parleur", price: "29€", duration: "30 min" },
    { repair: "Bouton power", price: "35€", duration: "30 min" },
  ],
  "iPhone X": [
    { repair: "Écran", price: "139€", duration: "1h" },
    { repair: "Batterie", price: "39€", duration: "30 min" },
    { repair: "Caméra arrière", price: "55€", duration: "45 min" },
    { repair: "Caméra avant", price: "35€", duration: "45 min" },
    { repair: "Connecteur de charge", price: "45€", duration: "45 min" },
    { repair: "Haut-parleur", price: "29€", duration: "30 min" },
    { repair: "Bouton power", price: "35€", duration: "30 min" },
  ],
  "iPhone 8 Plus": [
    { repair: "Écran", price: "89€", duration: "45 min" },
    { repair: "Batterie", price: "35€", duration: "30 min" },
    { repair: "Caméra arrière", price: "45€", duration: "45 min" },
    { repair: "Caméra avant", price: "29€", duration: "30 min" },
    { repair: "Connecteur de charge", price: "39€", duration: "45 min" },
    { repair: "Haut-parleur", price: "25€", duration: "30 min" },
    { repair: "Bouton power", price: "29€", duration: "30 min" },
  ],
  "iPhone 8": [
    { repair: "Écran", price: "79€", duration: "45 min" },
    { repair: "Batterie", price: "35€", duration: "30 min" },
    { repair: "Caméra arrière", price: "39€", duration: "45 min" },
    { repair: "Caméra avant", price: "29€", duration: "30 min" },
    { repair: "Connecteur de charge", price: "35€", duration: "45 min" },
    { repair: "Haut-parleur", price: "25€", duration: "30 min" },
    { repair: "Bouton power", price: "29€", duration: "30 min" },
  ],
};

const TarifsSection = () => {
  const [showModels, setShowModels] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  return (
    <section id="tarifs" className="py-16 bg-background">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
          Nos tarifs
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Tarifs indicatifs, toutes réparations garanties 1 an.
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => {
              setShowModels(!showModels);
              if (selectedModel) {
                setSelectedModel(null);
              }
            }}
            className="flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-8 py-4 rounded hover:bg-blue-dark transition-colors"
          >
            {selectedModel ? selectedModel : "Choisissez votre modèle iPhone"}
            <ChevronDown className={`h-4 w-4 transition-transform ${showModels ? "rotate-180" : ""}`} />
          </button>
        </div>

        {showModels && !selectedModel && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-8">
            {iphoneModels.map((model) => (
              <button
                key={model}
                onClick={() => {
                  setSelectedModel(model);
                  setShowModels(false);
                }}
                className="bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-sm font-medium py-3 px-3 rounded transition-colors text-left"
              >
                {model}
              </button>
            ))}
          </div>
        )}

        {selectedModel && priceData[selectedModel] && (
          <div className="bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Tarifs — {selectedModel}
            </h3>
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-foreground font-bold">Réparation</TableHead>
                  <TableHead className="text-foreground font-bold text-center">Prix</TableHead>
                  <TableHead className="text-foreground font-bold text-center">Durée estimée</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceData[selectedModel].map((item) => (
                  <TableRow key={item.repair} className="border-border">
                    <TableCell className="font-medium text-foreground">{item.repair}</TableCell>
                    <TableCell className="text-center text-primary font-bold text-lg">{item.price}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{item.duration}</TableCell>
                    <TableCell className="text-right">
                      <a
                        href="#devis"
                        className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-2 rounded hover:bg-blue-dark transition-colors"
                      >
                        Réparer
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              * Prix indicatifs. Un devis précis vous sera communiqué à l'atelier.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TarifsSection;
