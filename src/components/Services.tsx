import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calculator, Users, TrendingUp, Shield, Clock } from "lucide-react";
import taxServicesImage from "@/assets/tax-services.jpg";
import bookkeepingImage from "@/assets/bookkeeping-services.jpg";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Individual Tax Preparation",
      description: "Comprehensive tax preparation for individuals with expert attention to maximizing deductions and credits.",
      features: ["Personal tax returns", "Deduction optimization", "Tax planning strategies"]
    },
    {
      icon: Calculator,
      title: "Business Tax Services",
      description: "Complete business tax solutions including preparation, planning, and year-round consulting.",
      features: ["Corporate tax returns", "Partnership filings", "S-Corp elections"]
    },
    {
      icon: TrendingUp,
      title: "Professional Bookkeeping",
      description: "Accurate and reliable bookkeeping services to keep your financial records organized and compliant.",
      features: ["Monthly reconciliation", "Financial statements", "QuickBooks setup"]
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Complete payroll management including tax withholdings, reporting, and compliance.",
      features: ["Payroll processing", "Tax deposits", "W-2 preparation"]
    },
    {
      icon: Shield,
      title: "Tax Planning & Consulting",
      description: "Strategic tax planning to minimize future tax liability and optimize your financial position.",
      features: ["Year-round planning", "Strategy development", "Tax law updates"]
    },
    {
      icon: Clock,
      title: "Year-Round Support",
      description: "Ongoing support and guidance throughout the year, not just during tax season.",
      features: ["Phone consultations", "Email support", "Document preparation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Tax & Accounting Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From individual tax preparation to complex business accounting, we provide the expertise 
            you need to achieve financial success and peace of mind.
          </p>
        </div>

        {/* Featured services with images */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-professional hover:shadow-xl transition-shadow">
            <div className="relative h-48 bg-cover bg-center rounded-t-lg" 
                 style={{ backgroundImage: `url(${taxServicesImage})` }}>
              <div className="absolute inset-0 bg-gradient-primary/80 rounded-t-lg flex items-center justify-center">
                <FileText className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Expert Tax Preparation</CardTitle>
              <CardDescription className="text-lg">
                Specialized tax preparation services for individuals and businesses with focus on maximizing deductions and minimizing liability.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Individual & business tax returns
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Multi-state tax preparation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Tax planning and consultation
                </li>
              </ul>
              <Button className="w-full bg-gradient-primary shadow-button">
                Learn More About Tax Services
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-professional hover:shadow-xl transition-shadow">
            <div className="relative h-48 bg-cover bg-center rounded-t-lg" 
                 style={{ backgroundImage: `url(${bookkeepingImage})` }}>
              <div className="absolute inset-0 bg-gradient-primary/80 rounded-t-lg flex items-center justify-center">
                <Calculator className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Professional Bookkeeping</CardTitle>
              <CardDescription className="text-lg">
                Accurate bookkeeping services that provide clarity into your business performance and ensure compliance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Monthly financial statements
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  QuickBooks setup & training
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Bank reconciliation services
                </li>
              </ul>
              <Button className="w-full bg-gradient-primary shadow-button">
                Learn More About Bookkeeping
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* All services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-professional transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-primary p-3 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;