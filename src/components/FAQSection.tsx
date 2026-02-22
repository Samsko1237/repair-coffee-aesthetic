import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quel est le prix et le délai de ma réparation ?",
    a: "Les prix et délais varient selon le modèle et la panne. Utilisez notre outil de devis en ligne pour obtenir une estimation immédiate. La plupart des réparations iPhone sont effectuées en 30 minutes à 2 heures.",
  },
  {
    q: "Mon iPhone a pris du liquide, que pouvez-vous faire ?",
    a: "Nous disposons d'un traitement spécial pour les dégâts des eaux. Il est important d'agir vite : ne chargez pas votre appareil et apportez-le nous le plus rapidement possible. Nous ferons un diagnostic complet.",
  },
  {
    q: "Quelle est la qualité des pièces utilisées ?",
    a: "Nous utilisons exclusivement des pièces de la plus haute qualité, certifiées et testées. Toutes nos réparations sont garanties 1 an, pièces et main d'œuvre.",
  },
  {
    q: "Proposez-vous un service de coursier ?",
    a: "Oui ! Nous pouvons venir chercher et rapporter votre iPhone directement chez vous ou au bureau. Le service de coursier est gratuit à Bruxelles. Vous pouvez aussi nous envoyer votre appareil par Bpost.",
  },
  {
    q: "Puis-je attendre pendant la réparation ?",
    a: "Bien sûr ! Chez Repair & Coffee, vous pouvez savourer un délicieux café pendant que nous réparons votre iPhone. La plupart des réparations sont effectuées en moins d'une heure.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
          Vous vous posez encore des questions ?
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Nous avons presque réponse à tout.
        </p>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background border border-border rounded-lg px-5"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground text-sm">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
