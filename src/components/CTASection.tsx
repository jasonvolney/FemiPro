import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Truck, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-rose-light rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-rose-soft rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card text-center">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              Limited Time Offer
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Reclaim Your{" "}
              <span className="text-primary">Freedom?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 120,000 women who have already transformed their lives with FemiPro. 
              Don't wait any longer to live worry-free.
            </p>

            {/* Product display */}
            <div className="flex justify-center mb-8">
              <img
                src="https://myfemipro24.com//statics/img/fe_6_bottle.png"
                alt="FemiPro 6 Bottle Bundle - Best Value Pack"
                className="w-full max-w-md"
                loading="lazy"
              />
            </div>

            {/* CTA Button */}
            <a href="http://myfemipro24.com/text.php#aff=prenedino" target="_blank" rel="noopener noreferrer">
              <Button variant="ctaLarge" size="xl" className="w-full sm:w-auto mb-6">
                Claim Your Freedom Now
              </Button>
            </a>

            {/* Guarantees */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                60-Day Guarantee
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                Free Shipping (6 Bottles)
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                Secure Payment
              </div>
            </div>
          </div>

          {/* Additional trust elements */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">100% secure payment with:</p>
            <div className="flex justify-center gap-4 flex-wrap">
              {["Visa", "Mastercard", "PayPal", "American Express"].map((card, idx) => (
                <span
                  key={idx}
                  className="bg-card px-4 py-2 rounded-lg text-sm font-medium text-foreground shadow-soft"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
