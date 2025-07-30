import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get Your Free Consultation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to maximize your tax savings? Contact us today to schedule your personalized consultation 
            and discover how we can help optimize your financial future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-professional">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Send className="h-6 w-6 mr-3 text-primary" />
                Send Us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="john.doe@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(407) 123-4567" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <select 
                  id="service" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Select a service...</option>
                  <option value="tax-prep">Individual Tax Preparation</option>
                  <option value="business-tax">Business Tax Services</option>
                  <option value="bookkeeping">Bookkeeping Services</option>
                  <option value="payroll">Payroll Services</option>
                  <option value="consultation">Tax Planning Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your tax and accounting needs..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-gradient-primary shadow-button text-lg py-6">
                Send Message
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our terms of service and privacy policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-primary" />
                  Call Us Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:4076827772" 
                  className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  (407) 682-7772
                </a>
                <p className="text-muted-foreground mt-2">
                  Speak directly with our team for immediate assistance
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-primary" />
                  Visit Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <address className="not-italic">
                  <strong className="text-foreground">Alicia Howard EA, Inc.</strong><br />
                  2973 W SR 434, Suite 100<br />
                  Longwood, FL 32779
                </address>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => window.open('https://maps.google.com?q=2973+W+SR+434,+Suite+100,+Longwood,+FL+32779', '_blank')}
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-accent-foreground">
                    <strong>Extended Hours During Tax Season</strong><br />
                    January - April: Evening and weekend appointments available
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="mb-4 opacity-90">
                  Schedule your free consultation today and discover how we can help you achieve your financial goals.
                </p>
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-button"
                  size="lg"
                >
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;