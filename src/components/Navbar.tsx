import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-repair-coffee.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Repair & Coffee", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Shop", href: "#" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-background sticky top-0 z-50 border-b border-border">
      <div className="container flex items-center justify-between py-3">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Repair & Coffee" className="h-12 md:h-14" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground font-semibold text-sm uppercase tracking-wide hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#devis"
            className="bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-blue-dark transition-colors"
          >
            Réparer mon iPhone
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-6 py-3 text-foreground font-semibold text-sm uppercase tracking-wide hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#devis"
              className="block text-center bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-blue-dark transition-colors"
            >
              Réparer mon iPhone
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
