const ingredients = [
  {
    name: "Mimosa Pudica",
    description: "Known for its digestive and urinary system support properties.",
    image: "https://myfemipro24.com//statics/img/ingredient1.png",
  },
  {
    name: "Bearberry (Uva-Ursi)",
    description: "Traditionally used to support urinary tract health.",
    image: "https://myfemipro24.com//statics/img/ingredient2.png",
  },
  {
    name: "Cranberry Extract",
    description: "Rich in antioxidants that promote urinary health.",
    image: "https://myfemipro24.com//statics/img/ingredient3.png",
  },
  {
    name: "Probiotic Blend",
    description: "Balances the microbiome for a healthy urinary system.",
    image: "https://myfemipro24.com//statics/img/ingredient4.png",
  },
  {
    name: "Granular Berberine",
    description: "Natural support for metabolic and urinary balance.",
    image: "https://myfemipro24.com//statics/img/ingredient5.png",
  },
];

const IngredientsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-rose-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-card text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Exclusive Formula
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium Natural Ingredients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each FemiPro capsule contains a carefully dosed combination of 
            natural ingredients that work synergistically together.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ingredients.map((ingredient, idx) => (
            <article
              key={idx}
              className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <img
                  src={ingredient.image}
                  alt={`${ingredient.name} - FemiPro Ingredient`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {ingredient.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {ingredient.description}
              </p>
            </article>
          ))}
        </div>

        {/* Quality badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Natural Formula", icon: "🌿" },
            { label: "Easy To Use", icon: "✓" },
            { label: "No Stimulants", icon: "💫" },
            { label: "Non-GMO", icon: "🛡️" },
          ].map((badge, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-4 flex items-center gap-3 justify-center shadow-soft"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-semibold text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
