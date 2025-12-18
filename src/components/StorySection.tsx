import { Quote } from "lucide-react";

const StorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Do You Know This Feeling?
            </h2>
            <div className="w-24 h-1 bg-gradient-cta mx-auto rounded-full" />
          </div>

          {/* Emotional Story */}
          <div className="relative bg-gradient-hero rounded-3xl p-8 md:p-12 shadow-card">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-rose-medium opacity-30" />
            
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                <span className="text-primary font-semibold">That spontaneous laugh</span> you 
                have to hold back... The sneeze that makes you tense up... The rush to the 
                bathroom that never seems to end...
              </p>
              
              <p>
                Are you tired of constantly worrying? Of avoiding social situations out of 
                fear of what might happen? Of feeling like you've <span className="text-primary font-semibold">
                lost control of your own body?</span>
              </p>

              <p>
                If this sounds familiar, know that <span className="font-bold">
                it's not your fault</span>. And more importantly: <span className="text-primary font-bold">
                there's a natural solution that's transforming the lives of thousands of women.</span>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-rose-light rounded-full flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-primary">+</span>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    120,000+ women
                  </p>
                  <p className="text-muted-foreground">
                    have already rediscovered their freedom with FemiPro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
