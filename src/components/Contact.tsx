import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif font-medium text-primary mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              I'm currently exploring new opportunities in Medical Affairs. Let's discuss how I can 
              contribute to your team's success and make a meaningful impact on patient care.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-serif font-medium text-primary mb-8">
                  Get in Touch
                </h3>
                <p className="text-foreground/80 font-light leading-relaxed mb-8">
                  I'd love to hear from you. If you're looking for a dedicated Medical Affairs 
                  professional, I'm always open to meaningful conversations.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-sage-green/20 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-forest-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary mb-1">Email</h4>
                      <p className="text-foreground/70">femkeschepers@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-sage-green/20 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-forest-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary mb-1">Phone</h4>
                      <p className="text-foreground/70">+46 (0)761126968</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-sage-green/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-forest-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary mb-1">Location</h4>
                      <p className="text-foreground/70">Stockholm, Sweden</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-sage-green/20 p-3 rounded-lg">
                      <Globe className="h-6 w-6 text-forest-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary mb-1">Nationality</h4>
                      <p className="text-foreground/70">Dutch</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-sage-green/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-serif font-medium text-primary mb-4">
                Ready to Make an Impact?
              </h3>
              <p className="text-lg text-foreground/80 font-light leading-relaxed mb-6">
                I bring over a decade of pharmaceutical expertise, a collaborative spirit, and 
                genuine passion for improving patient outcomes. Let's explore how we can work together.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  onClick={() => window.open('https://www.linkedin.com/in/femke--schepers/', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
