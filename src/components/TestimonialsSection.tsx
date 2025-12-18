import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    age: 54,
    location: "California",
    text: "After years of avoiding social events, I can finally laugh without fear. FemiPro changed my life in just 3 weeks!",
    rating: 5,
  },
  {
    name: "Jennifer R.",
    age: 48,
    location: "Texas",
    text: "I tried everything before finding FemiPro. It's the first thing that actually worked. I feel 10 years younger!",
    rating: 5,
  },
  {
    name: "Patricia L.",
    age: 61,
    location: "Florida",
    text: "I no longer need to wear daily pads. My confidence is back and my husband noticed the difference in my happiness.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-rose-light text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Real Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Women Who Rediscovered Their Freedom
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what women like you are saying about FemiPro
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <article
              key={idx}
              className="relative bg-background rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-rose-light" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-coral text-coral" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-light rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.age} years old, {testimonial.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "97%", label: "Satisfaction Rate" },
            { value: "120k+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "60 Days", label: "Money-Back Guarantee" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
