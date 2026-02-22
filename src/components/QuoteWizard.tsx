import { useState } from "react";
import { ChevronRight } from "lucide-react";

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

const repairs = [
  "Écran cassé / fissuré",
  "Batterie à remplacer",
  "Caméra arrière",
  "Caméra avant / Face ID",
  "Haut-parleur",
  "Connecteur de charge",
  "Bouton power / volume",
  "Problème logiciel",
  "Dégât des eaux",
  "Autre panne",
];

const QuoteWizard = () => {
  const [step, setStep] = useState(0);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedRepair, setSelectedRepair] = useState("");

  return (
    <section id="devis" className="bg-dark text-dark-foreground py-16">
      <div className="container max-w-2xl">
        {step === 0 && (
          <div className="text-center">
            <p className="text-lg mb-2">Bonjour, vous avez un souci avec votre iPhone ?</p>
            <p className="text-primary font-bold text-xl mb-8">Choisissez votre modèle</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {iphoneModels.map((model) => (
                <button
                  key={model}
                  onClick={() => {
                    setSelectedModel(model);
                    setStep(1);
                  }}
                  className="bg-dark-muted hover:bg-primary hover:text-primary-foreground text-dark-foreground text-sm font-medium py-3 px-3 rounded transition-colors text-left"
                >
                  {model}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="text-center">
            <p className="text-lg mb-1">
              Super ! Pas mal le <span className="font-bold text-primary">{selectedModel}</span>.
            </p>
            <p className="text-primary font-bold text-xl mb-8">Que lui arrive-t-il ?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {repairs.map((repair) => (
                <button
                  key={repair}
                  onClick={() => {
                    setSelectedRepair(repair);
                    setStep(2);
                  }}
                  className="bg-dark-muted hover:bg-primary hover:text-primary-foreground text-dark-foreground text-sm font-medium py-3 px-4 rounded transition-colors text-left flex items-center justify-between"
                >
                  {repair}
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(0)}
              className="mt-6 text-muted-foreground underline text-sm"
            >
              ← Changer de modèle
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center">
            <p className="text-lg mb-2">
              <span className="font-bold text-primary">{selectedModel}</span> —{" "}
              <span className="font-semibold">{selectedRepair}</span>
            </p>
            <p className="text-xl font-bold mb-8">Comment nous faire parvenir votre iPhone ?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground font-bold py-4 px-8 rounded hover:bg-blue-dark transition-colors text-sm uppercase tracking-wider">
                À l'atelier
              </button>
              <button className="bg-dark-muted text-dark-foreground font-bold py-4 px-8 rounded hover:bg-primary hover:text-primary-foreground transition-colors text-sm uppercase tracking-wider">
                Par coursier
              </button>
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-6 text-muted-foreground underline text-sm"
            >
              ← Changer de panne
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuoteWizard;
