import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <h3 className="font-display text-2xl font-bold mb-4">FemiPro</h3>
          
          {/* Final CTA */}
          <p className="text-background/80 mb-6">
            Don't let bladder issues control your life. 
            Reclaim your freedom today.
          </p>
          
          <a href="https://myfemipro24.com/text.php" target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg" className="mb-8">
              Claim Your Freedom
            </Button>
          </a>

          {/* Disclaimer */}
          <div className="text-xs text-background/60 space-y-2 border-t border-background/20 pt-8">
            <p>
              *Results may vary. Please consult a healthcare professional before starting 
              any supplement. These statements have not been evaluated by the FDA. 
              This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p className="mt-4">
              © {new Date().getFullYear()} FemiPro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
