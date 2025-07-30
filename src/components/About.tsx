import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, TrendingUp } from "lucide-react";
import aliciaImage from "@/assets/alicia-professional.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Alicia Howard EA, Inc.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building on a 50-year legacy of excellence in accounting and tax services, 
            continuing the trusted tradition established by Carl Oden, CPA.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Professional image and credentials */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={aliciaImage} 
                alt="Alicia Howard, Enrolled Agent"
                className="w-full max-w-md mx-auto rounded-2xl shadow-professional"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-primary p-4 rounded-xl shadow-button">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge className="bg-primary text-primary-foreground px-4 py-2">Enrolled Agent</Badge>
              <Badge className="bg-accent text-accent-foreground px-4 py-2">MS Accounting</Badge>
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2">CPA Candidate</Badge>
            </div>
          </div>

          {/* Right: About content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                The Transition from Carl Oden to Alicia Howard
              </h3>
              <p className="text-muted-foreground mb-4">
                In 2024, after a remarkable 50-year career in accounting, Carl Oden, CPA, retired. 
                Alicia, who had worked alongside Carl for six years, was honored to take over his 
                clients and continue his legacy of exceptional service and expertise.
              </p>
              <p className="text-muted-foreground">
                This transition ensures continuity of the high-quality, personalized accounting 
                services that clients have come to trust and depend on for decades.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-secondary/50 rounded-lg">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Years Legacy</div>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-lg">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Years Partnership</div>
              </div>
            </div>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-card hover:shadow-professional transition-shadow text-center">
            <CardHeader>
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Expert Credentials</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Alicia holds both a Bachelor's and Master's of Science in accounting and is an IRS Enrolled Agent.
              </CardDescription>
              <ul className="text-sm space-y-2">
                <li>• Bachelor of Science in Accounting</li>
                <li>• Master of Science in Accounting</li>
                <li>• IRS Enrolled Agent Certification</li>
                <li>• Working toward CPA certification</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-professional transition-shadow text-center">
            <CardHeader>
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Our Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Every client deserves personalized attention and tailored solutions for their unique financial needs.
              </CardDescription>
              <ul className="text-sm space-y-2">
                <li>• Personalized service approach</li>
                <li>• Understanding unique situations</li>
                <li>• Customized financial solutions</li>
                <li>• Building long-term relationships</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-professional transition-shadow text-center">
            <CardHeader>
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Our Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Years of experience combined with staying current on tax laws and regulations.
              </CardDescription>
              <ul className="text-sm space-y-2">
                <li>• Current tax law knowledge</li>
                <li>• Complex financial navigation</li>
                <li>• Strategic financial planning</li>
                <li>• Maximizing client success</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;