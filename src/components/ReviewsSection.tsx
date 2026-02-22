import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carl D.",
    date: "il y a 4 jours",
    text: "Contact rapide, ils ont trouvé directement ma pièce pour mon iPhone, parti 3 jours et déjà à la maison. Service parfait, prix correct et garanti 1 an 👍",
    rating: 5,
  },
  {
    name: "Carole B.",
    date: "il y a 5 jours",
    text: "Excellent service, accueil chaleureux, personnel très professionnel, à l'écoute et très honnête. 1ère expérience et 100% satisfaits. Nous recommandons sans hésiter 👌",
    rating: 5,
  },
  {
    name: "Désiré C.",
    date: "il y a 8 jours",
    text: "Top efficacité, merci !",
    rating: 5,
  },
  {
    name: "Laurianne S.",
    date: "il y a 10 jours",
    text: "Très bon conseil et juste",
    rating: 5,
  },
  {
    name: "Servane T.",
    date: "il y a 11 jours",
    text: "Efficaces, compétents et très sympa ce qui ne gâche rien. Je recommande fortement.",
    rating: 5,
  },
  {
    name: "Emmanuel G.",
    date: "il y a 16 jours",
    text: "Remplacement batterie iPhone parfait et dans les temps y compris garantie d'un an. Merci.",
    rating: 5,
  },
  {
    name: "Ethelle G.",
    date: "il y a 29 jours",
    text: "Pour réparer la lentille de mon appareil photo iPhone 13 Pro : rapide, travail nickel, service client au top, rien à redire.",
    rating: 5,
  },
  {
    name: "Sophie U.",
    date: "il y a 29 jours",
    text: "Service et conseils impeccables et sérieux. Je conseille vivement !",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl font-bold text-foreground">Google</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-star text-star" />
            ))}
          </div>
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10">
          Basé sur +300 avis Google
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, i) => (
            <div key={i} className="bg-background rounded-lg p-5 shadow-sm border border-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-star text-star" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
