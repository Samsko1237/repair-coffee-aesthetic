import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

const AtelierButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 bg-background text-foreground border border-border font-semibold text-sm px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider"
      >
        Comment venir à l'atelier
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4">
          <div className="bg-background rounded-lg shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-foreground mb-4">Nous vous accueillons à notre atelier :</h3>
            <div className="space-y-3 text-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold">Repair & Coffee</p>
                  <p>Chau. de Charleroi 188</p>
                  <p>1060 Saint-Gilles</p>
                  <p className="text-muted-foreground text-sm mt-1">du lundi au vendredi de 10h à 18h</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>02 538 13 85</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@repairandcoffee.be" className="text-primary underline">
                  contact@repairandcoffee.be
                </a>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                🅿️ Parking disponible à proximité.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AtelierButton;
