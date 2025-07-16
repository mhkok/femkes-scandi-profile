import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-medium">Femke</h3>
              <p className="text-primary-foreground/80 font-light leading-relaxed">
                Passionate healthcare professional dedicated to making meaningful impact 
                on patient care through science and collaboration.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-light"
                >
                  About Me
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('experience');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-light"
                >
                  Experience
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-light"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Expertise</h4>
              <div className="space-y-2 text-primary-foreground/80 font-light">
                <p>Clinical Operations</p>
                <p>Medical Affairs</p>
                <p>Scientific Communication</p>
                <p>Stakeholder Engagement</p>
                <p>Cross-functional Leadership</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-primary-foreground/80 font-light">
                <span>© 2024 Femke. Crafted with</span>
                <Heart className="h-4 w-4 text-red-400 fill-current" />
                <span>for impactful healthcare</span>
              </div>

              {/* Professional Note */}
              <div className="text-primary-foreground/80 font-light text-sm text-center md:text-right">
                <p>Available for Medical Affairs opportunities</p>
                <p>Ready to make a difference together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}