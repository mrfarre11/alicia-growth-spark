import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, TrendingUp, Handshake } from "lucide-react";
import aliciaImage from "@/assets/alicia-professional.jpg";
import aliciaAndCarlImage from "@/assets/alicia-and-carl.jpg";

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

        {/* Featured transition story */}
        <div className="mb-16">
          <Card className="shadow-professional overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={aliciaAndCarlImage} 
                  alt="Alicia Howard with Carl Oden"
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">Alicia Howard with Carl Oden, CPA</p>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Handshake className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">
                    A Trusted Transition
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  In 2024, after a remarkable 50-year career in accounting, Carl Oden, CPA, retired. 
                  Alicia, who had worked alongside Carl for six years, was honored to take over his 
                  clients and continue his legacy of exceptional service.
                </p>
                <p className="text-muted-foreground mb-6">
                  This transition ensures continuity of the high-quality, personalized accounting 
                  services that clients have come to trust and depend on for decades. Carl's 
                  confidence in Alicia speaks to her expertise and dedication to client success.
                </p>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50</div>
                    <div className="text-sm text-muted-foreground">Years Legacy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">6</div>
                    <div className="text-sm text-muted-foreground">Years Partnership</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">2024</div>
                    <div className="text-sm text-muted-foreground">Seamless Transition</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional credentials content */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Professional Credentials & Expertise
              </h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                Alicia boasts both a Bachelor of Science and a Master of Science in accounting. 
                As an Enrolled Agent, she's already a trusted expert, and she's now eagerly 
                working towards completing her CPA certification to further elevate her expertise.
              </p>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
                Her years of experience working alongside Carl, combined with her advanced 
                education and professional certifications, make her uniquely qualified to 
                handle even the most complex tax and accounting challenges.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <Badge className="bg-primary text-primary-foreground px-4 py-2">Enrolled Agent</Badge>
              <Badge className="bg-accent text-accent-foreground px-4 py-2">MS Accounting</Badge>
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2">CPA Candidate</Badge>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg max-w-2xl mx-auto">
              <h4 className="font-semibold text-foreground mb-3 text-center">Educational Background</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Bachelor of Science in Accounting</li>
                <li>• Master of Science in Accounting</li>
                <li>• IRS Enrolled Agent Certification</li>
                <li>• Currently pursuing CPA certification</li>
                <li>• Continuous education in tax law updates</li>
              </ul>
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