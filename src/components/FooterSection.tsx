import logo from "@/assets/logo-repair-coffee.png";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-dark text-dark-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img src={logo} alt="Repair & Coffee" className="h-14 mb-6 brightness-0 invert" />
            <h2 className="text-xl font-bold mb-4">
              Repair & Coffee — Réparation d'iPhone à Bruxelles.
            </h2>
            <p className="text-sm leading-relaxed opacity-80 mb-4">
              Repair & Coffee est votre centre de réparation iPhone à Bruxelles. Spécialisé dans la réparation de tous les modèles d'iPhone, nous vous proposons un service rapide, fiable et à prix raisonnable.
            </p>
            <p className="text-sm leading-relaxed opacity-80">
              <strong>NOTRE MISSION :</strong> combattre l'obsolescence programmée en prolongeant la vie de vos smartphones.
            </p>
            <p className="text-sm leading-relaxed opacity-80 mt-2">
              <strong>NOS PROMESSES :</strong> Pièces de la plus haute qualité, délais de réparation rapides, prix raisonnables et transparents.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p>Rue des Tanneurs 62, 1000 Bruxelles</p>
              <p>du lundi au vendredi de 10h à 18h</p>
              <p>+32 (0)2 669 04 05</p>
              <p>
                <a href="mailto:contact@repairandcoffee.be" className="text-primary hover:underline">
                  contact@repairandcoffee.be
                </a>
              </p>
            </div>

            <h3 className="text-lg font-bold mt-8 mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-2 text-sm opacity-80">
              <a href="#" className="hover:text-primary transition-colors">Accueil</a>
              <a href="#tarifs" className="hover:text-primary transition-colors">Tarifs</a>
              <a href="#devis" className="hover:text-primary transition-colors">Devis en ligne</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border mt-12 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Repair & Coffee. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
