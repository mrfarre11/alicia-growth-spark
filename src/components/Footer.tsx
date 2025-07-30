import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <span className="text-lg font-bold text-primary-foreground">AH</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Alicia Howard EA, Inc.</h3>
                <p className="text-sm opacity-80">Expert Tax & Accounting</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Continuing a 50-year legacy of excellence in tax preparation and accounting services 
              in Longwood, Florida and surrounding areas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Individual Tax Preparation</li>
              <li>Business Tax Services</li>
              <li>Bookkeeping Services</li>
              <li>Payroll Management</li>
              <li>Tax Planning & Consulting</li>
              <li>Year-Round Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:4076827772" className="hover:opacity-80">
                  (407) 682-7772
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <address className="not-italic">
                  2973 W SR 434, Suite 100<br />
                  Longwood, FL 32779
                </address>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>By Appointment</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              <div className="pt-2 border-t border-background/20">
                <p className="text-xs">
                  Extended hours during tax season (Jan-Apr)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2025 Alicia Howard EA, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm opacity-80">
            <a href="#privacy" className="hover:opacity-100">Privacy Policy</a>
            <a href="#terms" className="hover:opacity-100">Terms of Service</a>
            <a href="#sitemap" className="hover:opacity-100">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;