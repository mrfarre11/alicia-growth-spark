import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card shadow-card">
      {/* Top contact bar */}
      <div className="bg-gradient-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-primary-foreground text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <a href="tel:4076827772" className="hover:underline">
                  (407) 682-7772
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Longwood, FL</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 mt-1 sm:mt-0">
              <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-3 rounded-lg">
              <span className="text-2xl font-bold text-primary-foreground">AH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Alicia Howard EA, Inc.</h1>
              <p className="text-sm text-muted-foreground">Expert Tax & Accounting Services</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button className="bg-gradient-primary shadow-button hover:shadow-professional">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;