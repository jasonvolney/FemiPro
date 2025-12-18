import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is FemiPro safe to use?",
    answer: "Yes! FemiPro is manufactured with 100% natural ingredients in an FDA-registered facility, following Good Manufacturing Practices (GMP). It contains no stimulants, is non-GMO, and has no known side effects.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Many women report significant improvements within the first 2-4 weeks of consistent use. For optimal results, we recommend using FemiPro for at least 3-6 months to allow the ingredients to work fully with your body.",
  },
  {
    question: "How should I take FemiPro?",
    answer: "Take 2 capsules daily with water, preferably with a meal. It's easy to incorporate into your daily routine and requires no special preparation.",
  },
  {
    question: "What if it doesn't work for me?",
    answer: "We offer a 60-day satisfaction guarantee. If you're not completely satisfied with the results, simply contact us for a full refund, no questions asked.",
  },
  {
    question: "Does FemiPro work for women of any age?",
    answer: "FemiPro was developed for adult women of all ages experiencing bladder control issues. Whether due to menopause, postpartum, or simply natural body changes, FemiPro can help.",
  },
  {
    question: "Are there any side effects?",
    answer: "FemiPro is made with natural ingredients and is generally well-tolerated. There are no known side effects. However, if you have specific health concerns, we recommend consulting with your healthcare provider before starting any new supplement.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-rose-light text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-card rounded-xl px-6 border-none shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Schema.org FAQ structured data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
