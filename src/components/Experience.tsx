import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Clinical Operation Study Country Lead",
      company: "Sanofi",
      location: "Stockholm, Sweden",
      period: "Oct 2022 - Present",
      type: "Full-time",
      highlights: [
        "Responsible for planning, management, and execution of clinical studies across Nordic and Baltic regions",
        "Manage study timelines, budgets, and study conduct within each country",
        "Oversee studies from site selection to study closure",
        "Ensure compliance with regulatory requirements and ICH-GCP guidelines",
      ],
      skills: [
        "Clinical Operations",
        "Project Management",
        "Budget Management",
        "Regulatory Compliance",
      ],
    },
    {
      title: "Medical Advisor",
      company: "Teva Pharmaceuticals",
      location: "Stockholm, Sweden",
      period: "Oct 2021 - Sep 2022",
      type: "Full-time",
      highlights: [
        "Same Medical Advisor position as previous role but located in Sweden",
      ],
      skills: [
        "Medical Affairs",
      ],
    },
    {
      title: "Medical Advisor",
      company: "Teva Pharmaceuticals",
      location: "Haarlem, Netherlands",
      period: "Dec 2017 - Sep 2021",
      type: "Full-time",
      highlights: [
        "Led successful conduct and completion of registry study including data analysis",
        "Prepared clinical study report for regulatory submission",
        "Led medical affairs activities: advisory boards, oversight of investigator-sponsored studies",
        "Medical review of promotional and scientific materials",
        "Built collaborative relationships with HCPs and KOLs",
      ],
      skills: [
        "Medical Affairs",
        "Stakeholder Management",
        "Scientific Communication",
        "Drug Rediscovery",
        "Gastroenterology",
        "Cardiology",
        "Regulatory Submissions",
        "KOL Engagement",
      ],
    },
    {
      title: "Medical Affairs Officer",
      company: "Teva Pharmaceuticals",
      location: "Haarlem, Netherlands",
      period: "Feb 2016 - Nov 2017",
      type: "Full-time",
      highlights: [
        "Delivered medical information service to healthcare professionals and patients",
        "Provided medical expertise and scientific support for Teva's product portfolio",
        "Engaged in projects requiring medical expertise",
        "Offered scientific training on Teva's products",
      ],
      skills: [
        "Medical Information",
        "Scientific Support",
        "Product Training",
        "Healthcare Communication",
      ],
    },
    {
      title: "Clinical Research Associate",
      company: "GlaxoSmithKline (via DOCS)",
      location: "Zeist, Netherlands",
      period: "Mar 2014 - Jan 2016",
      type: "Contract",
      highlights: [
        "Managed investigational sites to ensure compliance with study protocols and ICH-GCP",
        "Monitored clinical trials in pulmonary diseases therapeutic area",
        "Participated in implementation of Named Patient Program",
        "Ensured adherence to SOPs and applicable regulations",
      ],
      skills: [
        "Clinical Monitoring",
        "ICH-GCP",
        "Pulmonary Diseases",
        "Site Management",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science",
      field: "Bio-Pharmaceutical Sciences",
      specializations: "Pharmacology and Science Based Business",
      institution: "University of Leiden",
      location: "Netherlands",
      period: "2011 - 2014",
      highlights: [
        "Dual specialization in Pharmacology and Science-Based Business",
        "Population pharmacokinetic modeling expertise - Investigated linear and non-linear elimination of monoclonal antibodies",
        "Literature review on ommunication between Brain and Periphery: the Blood-Brain Barrier as a Regulatory Interface",
        "Investigated the performance of clinical research in the Netherlands compared to other countries",
        "Development of a biosensor and biopesticide using electrophysiology techniques. Channel activity investigated in artificial membrane systems."
      ],
    },
    {
      degree: "Bachelor of Science",
      field: "Bio-Pharmaceutical Sciences",
      institution: "University of Leiden",
      location: "Netherlands",
      period: "2007 - 2011",
      highlights: [
        "Strong foundation in pharmaceutical sciences",
        "Comprehensive study of drug development processes",
      ],
    },
    {
      degree: "Bachelor",
      field: "Architecture",
      institution: "Delft University of Technology",
      location: "Netherlands",
      period: "2006 - 2007",
      highlights: [
        "Foundation year in architectural design",
        "Developed analytical and creative problem-solving skills",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif font-medium text-primary mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              A decade of growth and impact in pharmaceutical clinical
              operations and medical affairs
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-medium text-primary mb-12 text-center">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card border-border shadow-lg hover:shadow-xl transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company & Role Info */}
                    <div className="lg:col-span-1 space-y-4">
                      <div>
                        <h4 className="text-xl font-medium text-primary mb-2">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 text-foreground/70 mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/70 mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-sage-green/20 text-forest-green hover:bg-sage-green/30"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Role Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h5 className="text-lg font-medium text-primary mb-4">
                          Key Achievements
                        </h5>
                        <ul className="space-y-2 text-foreground/80 font-light">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-medium text-primary mb-4">
                          Core Skills
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="border-sage-green/30 text-forest-green hover:bg-sage-green/10"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-serif font-medium text-primary mb-12 text-center">
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-8 bg-secondary/30 border-border shadow-lg animate-slide-up"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-medium text-primary mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-foreground/80 font-medium mb-1">
                        {edu.field}
                      </p>
                      {edu.specialization && (
                        <p className="text-sage-green font-medium mb-2">
                          Specialization: {edu.specialization}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-foreground/80 font-light">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Languages */}
          <Card className="p-6 border-sage-green/20 bg-sage-green/5">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Languages
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground">Dutch</span>
                <Badge
                  variant="secondary"
                  className="bg-sage-green/20 text-sage-green border-sage-green/30"
                >
                  Native
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">English</span>
                <Badge
                  variant="secondary"
                  className="bg-sage-green/20 text-sage-green border-sage-green/30"
                >
                  Fluent
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">Swedish</span>
                <Badge
                  variant="outline"
                  className="border-sage-green/30 text-muted-foreground"
                >
                  Fluent by end of 2025
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">French</span>
                <Badge
                  variant="outline"
                  className="border-sage-green/30 text-muted-foreground"
                >
                  Moderate
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">German</span>
                <Badge
                  variant="outline"
                  className="border-sage-green/30 text-muted-foreground"
                >
                  Moderate
                </Badge>
              </div>
            </div>
          </Card>

          {/* Technical Skills */}
          <Card className="p-6 border-sage-green/20 bg-sage-green/5">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-sage-green/20 text-sage-green border-sage-green/30"
              >
                R Statistics
              </Badge>
              <Badge
                variant="secondary"
                className="bg-sage-green/20 text-sage-green border-sage-green/30"
              >
                NONMEM
              </Badge>
              <Badge
                variant="secondary"
                className="bg-sage-green/20 text-sage-green border-sage-green/30"
              >
                Population PK Modeling
              </Badge>
              <Badge
                variant="secondary"
                className="bg-sage-green/20 text-sage-green border-sage-green/30"
              >
                Electrophysiology
              </Badge>
            </div>
          </Card>
        </div>

        {/* Interests & Sports */}
        <Card className="p-6 border-sage-green/20 bg-sage-green/5 mt-8">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Interests & Sports
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="border-sage-green/30 text-muted-foreground"
            >
              Race & Gravel Biking
            </Badge>
            <Badge
              variant="outline"
              className="border-sage-green/30 text-muted-foreground"
            >
              Field Hockey
            </Badge>
            <Badge
              variant="outline"
              className="border-sage-green/30 text-muted-foreground"
            >
              Sailing (Yngling World Championship)
            </Badge>
            <Badge
              variant="outline"
              className="border-sage-green/30 text-muted-foreground"
            >
              FF voile Certified Sailing Instructor
            </Badge>
            <Badge
              variant="outline"
              className="border-sage-green/30 text-muted-foreground"
            >
              Surfing
            </Badge>
            <Badge
              variant="outline"
              className="border-sage-green/30 text-muted-foreground"
            >
              Skiing
            </Badge>
            <Badge
              variant="outline"
              className="border-sage-green/30 text-muted-foreground"
            >
              Tennis
            </Badge>
            <Badge
              variant="outline"
              className="border-sage-green/30 text-muted-foreground"
            >
              Rowing (Ringvaart Regatta 100km)
            </Badge>
            <Badge
              variant="outline"
              className="border-sage-green/30 text-muted-foreground"
            >
              Flute (D degree qualified)
            </Badge>
          </div>
        </Card>

        {/* Publications */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-medium text-primary mb-8 text-center">
            Publications
          </h2>
          <div className="space-y-6">
            <Card className="p-6 border-sage-green/20 bg-sage-green/5">
              <div className="prose prose-sm text-foreground/80 leading-relaxed">
                <p className="text-sm">
                  <strong>Melek Simsek, Femke Schepers, et al.</strong> (2023).
                  Thioguanine is Effective as Maintenance Therapy for
                  Inflammatory Bowel Disease: A Prospective Multicentre Registry
                  Study. <em>Journal of Crohn's and Colitis</em>, Volume 17,
                  Issue 6.
                </p>
              </div>
            </Card>

            <Card className="p-6 border-sage-green/20 bg-sage-green/5">
              <div className="prose prose-sm text-foreground/80 leading-relaxed">
                <p className="text-sm">
                  <strong>
                    Sarah J Piper, Lou Brillault, et al., Femke Schepers, et al.
                  </strong>{" "}
                  (2019). Cryo-EM structures of the pore-forming A subunit from
                  the Yersinia entomophaga ABC toxin.{" "}
                  <em>Nature Communications</em> 10, 1952.
                </p>
              </div>
            </Card>

            <Card className="p-6 border-sage-green/20 bg-sage-green/5">
              <div className="prose prose-sm text-foreground/80 leading-relaxed">
                <p className="text-sm">
                  <strong>Reijers JA, van Donge T, Schepers FM, et al.</strong>{" "}
                  (2016). Use of population approach non-linear mixed effects
                  models in the evaluation of biosimilarity of monoclonal
                  antibodies. <em>European Journal of Clinical Pharmacology</em>
                  , 72(11):1343-1352.
                </p>
              </div>
            </Card>

            <Card className="p-6 border-sage-green/20 bg-sage-green/5">
              <div className="prose prose-sm text-foreground/80 leading-relaxed">
                <p className="text-sm">
                  <strong>
                    Heuberger JAA, Cohen Tervaert JM, Schepers FML, et al.
                  </strong>{" "}
                  (2013). Erythropoietin doping in cycling: lack of evidence for
                  efficacy and a negative risk-benefit.{" "}
                  <em>British Journal of Clinical Pharmacology</em>, 75:
                  1406-1421.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
