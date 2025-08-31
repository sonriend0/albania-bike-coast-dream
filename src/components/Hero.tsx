import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/albania-coast-hero.jpg";

interface HeroProps {
  onSectionChange: (section: string) => void;
}

export const Hero = ({ onSectionChange }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(33, 87, 159, 0.8) 0%, rgba(33, 87, 159, 0.4) 50%, rgba(255, 255, 255, 0.1) 100%), url(${heroImage})`
        }}
      />
      
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Cicloturismo en</span>
            <span className="block gradient-text text-transparent bg-clip-text bg-gradient-sunset">
              Albania
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Descubre la costa más espectacular del Mediterráneo en bicicleta.
            <br className="hidden md:block" />
            De Tirana a Corfú, una aventura inolvidable de 10 días.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6" />
              <span className="text-lg font-medium">10 días / 9 noches</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6" />
              <span className="text-lg font-medium">Tirana → Corfú</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span className="text-lg font-medium">8 plazas máximo</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => onSectionChange('ruta')}
              className="text-lg px-8 py-4 h-auto"
            >
              Descubre la Ruta
            </Button>
            <Button 
              variant="sunset" 
              size="lg"
              onClick={() => onSectionChange('contacto')}
              className="text-lg px-8 py-4 h-auto"
            >
              Reserva Ahora
            </Button>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-4 h-4 bg-primary-glow rounded-full opacity-60" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-6 h-6 bg-accent rounded-full opacity-40" />
          </div>
          <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '4s' }}>
            <div className="w-3 h-3 bg-primary-light rounded-full opacity-70" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};