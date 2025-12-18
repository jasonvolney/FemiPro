import { Droplets, Shield, Sparkles, Clock, Leaf, Heart } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Complete Bladder Control",
    description: "Reduce involuntary leaks and regain confidence in any situation.",
  },
  {
    icon: Shield,
    title: "Microbiome Balance",
    description: "Ingredients that promote beneficial bacteria for a healthy urinary system.",
  },
  {
    icon: Sparkles,
    title: "100% Natural Formula",
    description: "No stimulants, no harsh chemicals. Only proven natural ingredients.",
  },
  {
    icon: Clock,
    title: "Results in Weeks",
    description: "Many women report significant improvements within the first few weeks of use.",
  },
  {
    icon: Leaf,
    title: "Premium Ingredients",
    description: "Cranberry, Probiotics, Mimosa Pudica and other scientifically selected ingredients.",
  },
  {
    icon: Heart,
    title: "More Confidence & Freedom",
    description: "Get back to doing everything you love without worries or embarrassment.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-rose-light text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why FemiPro?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Life-Changing Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how FemiPro works with your body to restore natural balance 
            and give you back your quality of life.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, idx) => (
            <article
              key={idx}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-rose-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
