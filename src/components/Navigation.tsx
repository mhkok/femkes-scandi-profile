import { Button } from "@/components/ui/button";
import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-serif font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Femke
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-primary transition-colors font-light"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground/80 hover:text-primary transition-colors font-light"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-primary transition-colors font-light"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground ml-4"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground/80 hover:text-primary transition-colors font-light py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-left text-foreground/80 hover:text-primary transition-colors font-light py-2"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground/80 hover:text-primary transition-colors font-light py-2"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit mt-4"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}