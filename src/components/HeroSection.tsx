import heroImage from "@/assets/hero-iphones.png";

const rotatingTexts = [
  "Vous combattez l'obsolescence programmée",
  "Vous réduisez votre empreinte numérique",
  "Vous faites des économies",
  "Vous prolongez sa durée de vie",
  "Savourez un café pendant la réparation",
];

const HeroSection = () => {
  return (
    <section className="bg-background relative overflow-hidden">
      {/* Hero image */}
      <div className="container pt-8 pb-4">
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Gamme iPhone chez Repair & Coffee"
            className="max-w-3xl w-full h-auto"
          />
        </div>
      </div>

      {/* Rotating text */}
      <div className="container text-center pb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-1">
          Nous réparons votre iPhone.{" "}
          <span className="overflow-hidden inline-block h-[1.2em] align-bottom">
            <span className="flex flex-col animate-text-rotate">
              {rotatingTexts.map((text, i) => (
                <span key={i} className="font-extrabold text-primary block h-[1.2em]">
                  {text}
                </span>
              ))}
            </span>
          </span>
        </h1>

        <div className="mt-8">
          <a
            href="#devis"
            className="inline-block bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest px-10 py-4 rounded hover:bg-blue-dark transition-colors"
          >
            Réparer mon iPhone
          </a>
        </div>

        <div className="mt-4 h-px w-8 bg-foreground/20 mx-auto" />

        <p className="mt-4 text-muted-foreground text-sm">
          Devis en ligne — 🚚 Livraison gratuite par coursier ou via Bpost.
        </p>
        <a href="#" className="text-foreground text-sm underline font-medium">
          Cliquez ici
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
