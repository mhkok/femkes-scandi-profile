import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import femkePortrait from "@/assets/femke-portrait.jpg";
import jsPDF from "jspdf";

export default function Hero() {
  const generateCV = () => {
    const pdf = new jsPDF("p", "mm", "a4");

    // Set colors and styling to match website theme
    const primaryColor: [number, number, number] = [72, 82, 87]; // --primary
    const sageGreen: [number, number, number] = [134, 153, 132]; // --sage-green
    const mutedColor: [number, number, number] = [128, 128, 128];

    let yPos = 20;

    // Header - mirroring hero section
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.setTextColor(...sageGreen);
    pdf.text("HEALTHCARE PROFESSIONAL", 20, yPos);
    yPos += 10;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(32);
    pdf.setTextColor(...primaryColor);
    pdf.text("Femke Schepers", 20, yPos);
    yPos += 15;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(14);
    pdf.setTextColor(...mutedColor);
    pdf.text(
      "MSc Bio-Pharmaceutical Sciences | Medical Affairs & Clinical Operations Expert",
      20,
      yPos,
    );
    yPos += 8;

    pdf.setFontSize(10);
    pdf.text(
      "Stockholm | +46 (0)761126968 | femkeschepers@gmail.com | Dutch Nationality",
      20,
      yPos,
    );
    yPos += 15;

    // Professional Summary - from hero description
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor(60, 60, 60);
    const heroText =
      "With over a decade of experience in the pharmaceutical industry, I currently serve as Clinical Operations Study Country Lead at Sanofi, managing clinical studies across Nordic and Baltic regions. My expertise spans clinical operations, medical affairs, and regulatory submissions across diverse therapeutic areas.";
    pdf.text(heroText, 20, yPos, { maxWidth: 170 });
    yPos += 25;

    // About Me section
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.setTextColor(...primaryColor);
    pdf.text("ABOUT ME", 20, yPos);
    yPos += 10;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor(60, 60, 60);
    const aboutText =
      "What sets me apart is my positive mindset, collaborative spirit, and energetic approach to work. Colleagues often describe me as friendly, social, and highly motivated. I am currently exploring new opportunities in Medical Affairs, where I can continue to grow, contribute, and make a meaningful impact on patient care through science and collaboration.";
    pdf.text(aboutText, 20, yPos, { maxWidth: 170 });
    yPos += 25;

    // Core Qualities
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(...primaryColor);
    pdf.text("CORE QUALITIES", 20, yPos);
    yPos += 8;

    const qualities = [
      "• Collaborative: Thrive in cross-functional environments building trust-based relationships",
      "• Results-Driven: Bring both scientific rigor and human touch to every project",
      "• Passionate: Dedicated to making meaningful impact on patient care through science",
      "• Innovative: Connect science with strategy in dynamic pharmaceutical landscapes",
    ];

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    qualities.forEach((quality) => {
      pdf.text(quality, 20, yPos, { maxWidth: 170 });
      yPos += 6;
    });
    yPos += 8;

    // Therapeutic Areas
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(...primaryColor);
    pdf.text("THERAPEUTIC AREAS", 20, yPos);
    yPos += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text(
      "Gastroenterology • Neurology • Vaccines • Cardiology • Drug Repurposing",
      20,
      yPos,
    );
    yPos += 15;

    // Professional Experience
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.setTextColor(...primaryColor);
    pdf.text("PROFESSIONAL EXPERIENCE", 20, yPos);
    yPos += 10;

    const experiences = [
      {
        title: "Clinical Operation Study Country Lead",
        company: "Sanofi",
        location: "Stockholm, Sweden",
        period: "Oct 2022 - Present",
        highlights: [
          "Responsible for planning, management, and execution of clinical studies across Nordic and Baltic regions",
          "Manage study timelines, budgets, and study conduct within each country",
          "Oversee studies from site selection to study closure",
        ],
      },
      {
        title: "Medical Advisor",
        company: "Teva Pharmaceuticals",
        location: "Stockholm, Sweden",
        period: "Oct 2021 - Sep 2022",
        highlights: [
          "Same Medical Advisor position as previous role but located in Sweden",
        ],
      },
      {
        title: "Medical Advisor",
        company: "Teva Pharmaceuticals",
        location: "Haarlem, Netherlands",
        period: "Dec 2017 - Sep 2021",
        highlights: [
          "Led successful conduct and completion of registry study including data analysis",
          "Prepared clinical study report for regulatory submission",
          "Built collaborative relationships with HCPs and KOLs",
        ],
      },
    ];

    experiences.forEach((exp) => {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.setTextColor(...primaryColor);
      pdf.text(exp.title, 20, yPos);
      yPos += 6;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.setTextColor(...mutedColor);
      pdf.text(`${exp.company} | ${exp.location} | ${exp.period}`, 20, yPos);
      yPos += 6;

      pdf.setTextColor(60, 60, 60);
      exp.highlights.forEach((highlight) => {
        pdf.text(`• ${highlight}`, 25, yPos, { maxWidth: 165 });
        yPos += 5;
      });
      yPos += 5;
    });

    // Check if we need a new page
    if (yPos > 250) {
      pdf.addPage();
      yPos = 20;
    }

    // Education
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.setTextColor(...primaryColor);
    pdf.text("EDUCATION", 20, yPos);
    yPos += 10;

    const educationItems = [
      "Master of Science, Bio-Pharmaceutical Sciences - Science Based Business (2011-2014)",
      "Master of Science, Bio-Pharmaceutical Sciences - Pharmacology (2011-2013)",
      "Bachelor of Science, Bio-Pharmaceutical Sciences (2007-2011)",
      "University of Leiden, Netherlands",
    ];

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(60, 60, 60);
    educationItems.forEach((item) => {
      pdf.text(`• ${item}`, 20, yPos);
      yPos += 6;
    });
    yPos += 10;

    // Languages & Technical Skills
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(...primaryColor);
    pdf.text("LANGUAGES & TECHNICAL SKILLS", 20, yPos);
    yPos += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(60, 60, 60);
    pdf.text(
      "Languages: Dutch (native), English (fluent), Swedish/French/German (moderate)",
      20,
      yPos,
    );
    yPos += 6;
    pdf.text(
      "Technical: R Statistics, Population PK modeling with NONMEM, Electrophysiology",
      20,
      yPos,
    );
    yPos += 15;

    // Interests & Sports
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(...primaryColor);
    pdf.text("INTERESTS & SPORTS", 20, yPos);
    yPos += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(60, 60, 60);
    const interests =
      "Race & Gravel Biking, Field Hockey, Sailing (Yngling World Championship), Surfing, Skiing, Tennis, Rowing (Ringvaart Regatta 100km), Flute (D degree qualified)";
    pdf.text(interests, 20, yPos, { maxWidth: 170 });
    yPos += 20;

    // Publications
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(...primaryColor);
    pdf.text("SELECTED PUBLICATIONS", 20, yPos);
    yPos += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(60, 60, 60);
    const publications = [
      "Simsek, M., Schepers, F., et al. (2023). Thioguanine is Effective as Maintenance Therapy for Inflammatory Bowel Disease. Journal of Crohn's and Colitis, 17(6).",
      "Piper, S.J., Brillault, L., Schepers, F., et al. (2019). Cryo-EM structures of the pore-forming A subunit from the Yersinia entomophaga ABC toxin. Nature Communications, 10, 1952.",
    ];

    publications.forEach((pub) => {
      pdf.text(`• ${pub}`, 20, yPos, { maxWidth: 170 });
      yPos += 10;
    });

    pdf.save("Femke-Schepers-CV.pdf");
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
                MSc Bio-Pharmaceutical Sciences | Clinical Operations & Medical
                Affairs Expert
              </p>
            </div>

            <div className="prose prose-lg text-foreground/80 font-light leading-relaxed">
              <p>
                With over a decade of experience in the pharmaceutical industry,
                I currently serve as Clinical Operations Study Country Lead at
                Sanofi, managing clinical studies across Nordic and Baltic
                regions. My expertise spans clinical operations, medical
                affairs, and regulatory submissions across diverse therapeutic
                areas.
              </p>
            </div>

            <div className="flex flex-wrap gap-4"></div>
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
