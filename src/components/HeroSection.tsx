import { Button } from "@/components/ui/button";
import { Check, Shield, Leaf, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-light rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-rose-soft rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <header className="flex justify-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary">
            FemiPro
          </h1>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-slide-up">
            <div className="space-y-4">
              <span className="inline-block bg-rose-light text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Natural Women's Health Solution
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The Natural{" "}
                <span className="text-primary">Bladder-Rebalancing</span>{" "}
                Breakthrough
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              You're not alone. Millions of women face bladder control issues every day. 
              FemiPro offers a natural solution that works with your body, not against it.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Shield, text: "Bladder Control Support" },
                { icon: Leaf, text: "Microbiome Balance" },
                { icon: Heart, text: "Healthy Urinary System" },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-xl shadow-soft"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-light rounded-full flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a href="http://myfemipro24.com/text.php#aff=prenedino" target="_blank" rel="noopener noreferrer">
                <Button variant="ctaLarge" size="xl" className="w-full sm:w-auto">
                  Claim Your Freedom Now
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                60-Day Money-Back Guarantee
              </p>
            </div>
          </div>

          {/* Right - Product Image */}
          <div className="relative flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-light to-transparent rounded-full blur-3xl opacity-60 scale-150" />
              <img
                src="https://myfemipro24.com//statics/img/prod_1_bottle.png"
                alt="FemiPro - Natural Bladder Control Supplement Bottle"
                className="relative w-72 md:w-80 lg:w-96 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-8 opacity-80 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {["GMP Certified", "Made in USA", "Natural Ingredients", "FDA Registered Facility", "Non-GMO"].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
              <Check className="w-4 h-4 text-primary" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
