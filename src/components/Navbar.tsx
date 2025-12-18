import { useState } from "react";

const navItems = [
  { name: "Home", to: "#home" },
  { name: "Benefits", to: "#benefits" },
  { name: "Ingredients", to: "#ingredients" },
  { name: "Story", to: "#story" },
  { name: "Testimonials", to: "#testimonials" },
  { name: "FAQ", to: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const brandColor = "#dc8ab7";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{ backgroundColor: brandColor }}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#home" className="text-white font-display font-bold text-xl">
            FemiPro
          </a>
        </div>

        <ul className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.to}
                className="px-3 py-2 rounded-md text-sm font-medium text-white/95 hover:text-white/100"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="http://myfemipro24.com/text.php#aff=prenedino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#dc8ab7] px-4 py-2 rounded-md font-semibold shadow-sm"
          >
            Buy Now
          </a>

          <button
            className="md:hidden inline-flex items-center p-2 rounded-md text-white/90"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute left-0 right-0 top-full bg-[rgba(220,138,183,0.98)] md:hidden">
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.to}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-white/95"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}

                <li className="pt-2">
                  <a
                    href="http://myfemipro24.com/text.php#aff=prenedino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-white text-[#dc8ab7] px-4 py-2 rounded-md font-semibold"
                  >
                    Buy Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
