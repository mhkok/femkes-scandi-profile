import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import femkePortrait from "@/assets/femke-portrait.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-sage-green font-medium tracking-wider uppercase text-sm">
                Healthcare Professional
              </p>
              <h1 className="text-5xl lg:text-6xl font-serif font-medium text-primary leading-tight">
                Femke
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Passionate healthcare professional with an MSc in Pharmaceutical Sciences
              </p>
            </div>

            <div className="prose prose-lg text-foreground/80 font-light leading-relaxed">
              <p>
                With over a decade of experience in the pharmaceutical industry, I specialize in 
                Clinical Operations and Medical Affairs. Most recently serving as Study Country Lead 
                at Sanofi, I bring scientific rigor and a collaborative spirit to every project.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary px-8 py-3 rounded-lg font-medium"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/femke-cv.pdf';
                  link.download = 'Femke-CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="hover:bg-secondary px-8 py-3 rounded-lg font-medium"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-sage-green/20 rounded-2xl blur-xl" />
              <img
                src={femkePortrait}
                alt="Femke - Healthcare Professional"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}