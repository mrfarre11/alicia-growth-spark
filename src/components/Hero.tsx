import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Calculator } from "lucide-react";
import heroImage from "@/assets/hero-accounting.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Expert Tax Preparation &
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Bookkeeping Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Maximize your tax savings with professional advice from Alicia Howard EA, Inc. 
            Your trusted accounting partner in Longwood, Florida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-button text-lg px-8 py-6"
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 mb-4 text-accent" />
              <h3 className="text-lg font-semibold mb-2">Licensed EA</h3>
              <p className="text-sm opacity-80">Enrolled Agent certified by the IRS</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 mb-4 text-accent" />
              <h3 className="text-lg font-semibold mb-2">50+ Years Legacy</h3>
              <p className="text-sm opacity-80">Continuing Carl Oden's trusted practice</p>
            </div>
            <div className="flex flex-col items-center">
              <Calculator className="h-12 w-12 mb-4 text-accent" />
              <h3 className="text-lg font-semibold mb-2">Tax Maximization</h3>
              <p className="text-sm opacity-80">Expert strategies to minimize liability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;