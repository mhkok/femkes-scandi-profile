import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import femkePortrait from "@/assets/femke-portrait.jpg";
import jsPDF from 'jspdf';

export default function Hero() {
  const generateCV = () => {
    const pdf = new jsPDF();
    
    // Header
    pdf.setFontSize(24);
    pdf.text('Femke Schepers', 20, 25);
    
    pdf.setFontSize(10);
    pdf.text('Stockholm | +46 (0)761126968 | femkeschepers@gmail.com | Dutch Nationality', 20, 35);
    
    // Professional Summary
    pdf.setFontSize(14);
    pdf.text('PROFESSIONAL SUMMARY', 20, 50);
    pdf.setFontSize(10);
    const summary = 'MSc Bio-Pharmaceutical Sciences | Clinical Operations & Medical Affairs Expert\n\nWith over a decade of experience in the pharmaceutical industry, I currently serve as Clinical Operations Study Country Lead at Sanofi, managing clinical studies across Nordic and Baltic regions. My expertise spans clinical operations, medical affairs, and regulatory submissions across diverse therapeutic areas.';
    pdf.text(summary, 20, 60, { maxWidth: 170 });
    
    // Work Experience
    pdf.setFontSize(14);
    pdf.text('WORK EXPERIENCE', 20, 100);
    
    const workExperience = [
      'Oct 2022 - Present: Clinical Operations Study Country Lead at Sanofi (Stockholm, Sweden)\nResponsible for planning, management, and execution of clinical studies across Nordic and Baltic regions.',
      'Oct 2021 - Sep 2022: Medical Advisor at Teva Pharmaceuticals (Stockholm, Sweden)',
      'Dec 2017 - Sep 2021: Medical Advisor at Teva Pharmaceuticals (Haarlem, the Netherlands)\nRegistry study conduct, advisory boards, investigator-sponsored studies, medical review.',
      'Feb 2016 - Nov 2017: Medical Affairs Officer at Teva Pharmaceuticals (Haarlem, the Netherlands)',
      'Mar 2014 - Jan 2016: Clinical Research Associate at GSK (Zeist, the Netherlands)',
      'Sep 2013 - Feb 2014: Intern at Merck/MSD, Clinical Operations (Haarlem, the Netherlands)'
    ];
    
    let yPos = 110;
    pdf.setFontSize(10);
    workExperience.forEach(exp => {
      pdf.text(exp, 20, yPos, { maxWidth: 170 });
      yPos += 25;
    });
    
    // Education
    pdf.setFontSize(14);
    pdf.text('EDUCATION', 20, yPos + 10);
    pdf.setFontSize(10);
    yPos += 20;
    
    const education = [
      '2011-2014: Master Bio-Pharmaceutical Sciences - Science Based Business & Pharmacology (University Leiden)',
      '2007-2011: Bachelor Bio-Pharmaceutical Sciences (University Leiden, the Netherlands)'
    ];
    
    education.forEach(edu => {
      pdf.text(edu, 20, yPos, { maxWidth: 170 });
      yPos += 15;
    });
    
    // Skills & Languages
    pdf.setFontSize(14);
    pdf.text('SKILLS & LANGUAGES', 20, yPos + 10);
    pdf.setFontSize(10);
    yPos += 20;
    pdf.text('Languages: Dutch (native), English (fluent), Swedish/French/German (moderate)', 20, yPos);
    yPos += 10;
    pdf.text('Technical: R Statistics, Population PK modeling with NONMEM, Electrophysiology', 20, yPos);
    
    // Interests
    yPos += 20;
    pdf.setFontSize(14);
    pdf.text('INTERESTS', 20, yPos);
    pdf.setFontSize(10);
    yPos += 10;
    pdf.text('Race & gravel biking, Field hockey, Sailing (World Championship level), Surfing, Skiing', 20, yPos);
    
    pdf.save('Femke-CV.pdf');
  };

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
                Femke Schepers
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                MSc Bio-Pharmaceutical Sciences | Clinical Operations & Medical Affairs Expert
              </p>
            </div>

            <div className="prose prose-lg text-foreground/80 font-light leading-relaxed">
              <p>
                With over a decade of experience in the pharmaceutical industry, I currently serve as 
                Clinical Operations Study Country Lead at Sanofi, managing clinical studies across 
                Nordic and Baltic regions. My expertise spans clinical operations, medical affairs, 
                and regulatory submissions across diverse therapeutic areas.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary px-8 py-3 rounded-lg font-medium"
                onClick={generateCV}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="hover:bg-secondary px-8 py-3 rounded-lg font-medium"
                onClick={() => window.open('https://www.linkedin.com/in/femke--schepers/', '_blank')}
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