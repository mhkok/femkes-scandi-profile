import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Study Country Lead",
      company: "Sanofi",
      location: "Netherlands",
      period: "2022 - Present",
      type: "Clinical Operations",
      highlights: [
        "Lead clinical studies across multiple therapeutic areas",
        "Manage cross-functional teams and stakeholder relationships",
        "Ensure regulatory compliance and study protocol adherence",
        "Drive operational excellence in clinical trial execution"
      ],
      skills: ["Clinical Study Leadership", "Team Management", "Regulatory Affairs", "Cross-functional Collaboration"]
    },
    {
      title: "Medical Advisor",
      company: "Teva Pharmaceuticals", 
      location: "Netherlands",
      period: "2020 - 2022",
      type: "Medical Affairs",
      highlights: [
        "Provided medical and scientific support across therapeutic portfolios",
        "Developed medical strategies and communications",
        "Engaged with key opinion leaders and healthcare professionals",
        "Supported drug development and lifecycle management"
      ],
      skills: ["Medical Strategy", "Scientific Communication", "KOL Engagement", "Drug Development"]
    },
    {
      title: "Senior Clinical Research Associate",
      company: "Pharmaceutical Industry",
      location: "Europe",
      period: "2018 - 2020", 
      type: "Clinical Operations",
      highlights: [
        "Managed clinical trials from initiation to close-out",
        "Ensured GCP compliance and quality standards",
        "Mentored junior team members",
        "Collaborated with global cross-functional teams"
      ],
      skills: ["Clinical Trial Management", "GCP Compliance", "Quality Assurance", "Team Leadership"]
    },
    {
      title: "Clinical Research Associate",
      company: "Contract Research Organization",
      location: "Netherlands",
      period: "2015 - 2018",
      type: "Clinical Operations", 
      highlights: [
        "Conducted site monitoring and source data verification",
        "Built strong relationships with investigational sites",
        "Supported protocol development and implementation",
        "Contributed to regulatory submissions"
      ],
      skills: ["Site Monitoring", "Source Data Verification", "Protocol Development", "Regulatory Support"]
    }
  ];

  const education = [
    {
      degree: "Master of Science (MSc)",
      field: "Pharmaceutical Sciences",
      specialization: "Pharmacology and Science-Based Business",
      institution: "University",
      period: "2013 - 2015",
      highlights: [
        "Specialized in pharmacology and drug development",
        "Gained expertise in science-based business strategies",
        "Thesis focused on clinical pharmacology",
        "Strong foundation in regulatory science"
      ]
    },
    {
      degree: "Bachelor of Science (BSc)",
      field: "Life Sciences",
      institution: "University",
      period: "2010 - 2013",
      highlights: [
        "Comprehensive foundation in biological sciences",
        "Research experience in pharmaceutical sciences",
        "Laboratory skills and analytical methods",
        "Scientific writing and communication"
      ]
    }
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
              A decade of growth and impact in pharmaceutical clinical operations and medical affairs
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
                        <h5 className="text-lg font-medium text-primary mb-4">Key Achievements</h5>
                        <ul className="space-y-2 text-foreground/80 font-light">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-lg font-medium text-primary mb-4">Core Skills</h5>
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
      </div>
    </section>
  );
}