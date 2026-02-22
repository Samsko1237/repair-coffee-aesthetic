import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 sm:py-12 mt-20">
      <div className="container mx-auto px-4 space-y-8">

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden border border-border/40 shadow-lg">
          <iframe
            title="Repair & Coffee - Localisation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.7!2d4.3505!3d50.8285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4a3b1234567%3A0xabcdef1234567890!2sChaussee%20de%20Charleroi%20188%2C%201060%20Saint-Gilles%2C%20Belgium!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Adresse cliquable */}
        <div className="flex justify-center">
          <a
            href="https://maps.google.com/?q=Chaussée+de+Charleroi+188,+1060+Saint-Gilles,+Belgique"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <MapPin className="w-3 h-3 text-primary" />
            Chau. de Charleroi 188, 1060 Saint-Gilles
          </a>
        </div>

        {/* Bas de page */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Repair & Coffee" className="h-8 object-contain" />
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Repair & Coffee — Smartphone · Tablette · PC · Réparation · Achat · Vente
          </p>
          <a href="tel:+32000000000" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-3 h-3" />
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
