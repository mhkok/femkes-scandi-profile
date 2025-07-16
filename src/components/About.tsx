import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Lightbulb, Target } from "lucide-react";

export default function About() {
  const qualities = [
    {
      icon: Heart,
      title: "Passionate",
      description: "Dedicated to making a meaningful impact on patient care through science"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Thrive in cross-functional environments building trust-based relationships"
    },
    {
      icon: Lightbulb,
      title: "Innovative",
      description: "Connect science with strategy in dynamic pharmaceutical landscapes"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Bring both scientific rigor and human touch to every project"
    }
  ];

  const therapeuticAreas = [
    "Gastroenterology",
    "Neurology", 
    "Vaccines",
    "Cardiology",
    "Drug Repurposing"
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif font-medium text-primary mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              What sets me apart is my positive mindset, collaborative spirit, and energetic approach to work. 
              Colleagues often describe me as friendly, social, and highly motivated.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Expertise & Background */}
            <div className="space-y-8 animate-slide-up">
              <Card className="p-8 bg-card border-border shadow-lg">
                <h3 className="text-2xl font-serif font-medium text-primary mb-6">
                  Professional Background
                </h3>
                <div className="space-y-4 text-foreground/80 font-light leading-relaxed">
                  <p>
                    <strong className="font-medium text-primary">MSc in Pharmaceutical Sciences</strong> with 
                    specialization in Pharmacology and Science-Based Business.
                  </p>
                  <p>
                    Over a decade of experience spanning <strong className="font-medium text-primary">Clinical Operations</strong> and 
                    <strong className="font-medium text-primary"> Medical Affairs</strong>, including leadership roles at 
                    industry-leading companies.
                  </p>
                  <p>
                    Most recently served as <strong className="font-medium text-primary">Study Country Lead at Sanofi</strong> and 
                    previously as <strong className="font-medium text-primary">Medical Advisor at Teva Pharmaceuticals</strong>.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border shadow-lg">
                <h3 className="text-2xl font-serif font-medium text-primary mb-6">
                  Therapeutic Areas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {therapeuticAreas.map((area) => (
                    <Badge 
                      key={area}
                      variant="secondary"
                      className="bg-warm-wood/20 text-oak hover:bg-warm-wood/30 px-4 py-2 text-sm font-medium"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Core Qualities */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-serif font-medium text-primary mb-8">
                What Defines Me
              </h3>
              <div className="grid gap-6">
                {qualities.map((quality) => (
                  <Card key={quality.title} className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-warm-wood/20 p-3 rounded-lg">
                        <quality.icon className="h-6 w-6 text-oak" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-primary mb-2">
                          {quality.title}
                        </h4>
                        <p className="text-foreground/70 font-light leading-relaxed">
                          {quality.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in">
            <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
              I'm currently exploring new opportunities in Medical Affairs, where I can continue to grow, 
              contribute, and make a meaningful impact on patient care through science and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}