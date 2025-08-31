import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DestinoSection } from "@/components/sections/DestinoSection";
import { RutaSection } from "@/components/sections/RutaSection";
import { NosotrosSection } from "@/components/sections/NosotrosSection";
import { ContactoSection } from "@/components/sections/ContactoSection";
const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  // Update page title and meta description based on active section
  useEffect(() => {
    const titles = {
      inicio: "Albania Coast Dreams - Cicloturismo Tirana a Corfú",
      destino: "El Destino - Albania Coast Dreams",
      ruta: "La Ruta - 10 Días de Tirana a Corfú",
      nosotros: "Quiénes Somos - Albania Coast Dreams",
      contacto: "Contacto - Reserva tu Aventura"
    };
    const descriptions = {
      inicio: "Experiencia cicloturista única por la costa albanesa. De Tirana a Corfú en 10 días. Riviera mediterránea, grupos pequeños, todo incluido.",
      destino: "Descubre Albania, el secreto mejor guardado del Mediterráneo. Costas vírgenes, montañas épicas y cultura auténtica.",
      ruta: "Ruta detallada de 10 días en bicicleta desde Tirana hasta Corfú. 390km de costa espectacular con alojamiento 4 estrellas.",
      nosotros: "Equipo especializado en cicloturismo con 15 años de experiencia. Pasión auténtica por Albania y grupos pequeños.",
      contacto: "Reserva tu aventura cicloturista en Albania. Contacto directo, información detallada y facilidades de pago."
    };
    document.title = titles[activeSection as keyof typeof titles];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[activeSection as keyof typeof descriptions]);
    }
  }, [activeSection]);
  const handleSectionChange = (section: string) => {
    setActiveSection(section);

    // Smooth scroll to section
    if (section !== "inicio") {
      const element = document.getElementById(section);
      if (element) {
        const headerHeight = 80; // Account for fixed header
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'destino', 'ruta', 'nosotros', 'contacto'];
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Special case for hero section
      if (scrollPosition < 100) {
        setActiveSection('inicio');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main>
        <div id="inicio">
          <Hero onSectionChange={handleSectionChange} />
        </div>
        
        <DestinoSection />
        <RutaSection />
        <NosotrosSection />
        <ContactoSection />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-coastal rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">🚴</span>
                </div>
                <span className="font-bold text-xl">Albania Coast Dreams</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Cicloturismo auténtico por la costa más espectacular del Mediterráneo. 
                Experiencias únicas, grupos pequeños, recuerdos eternos.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contacto</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>📞 +34 659 881 000</p>
                <p>✉️ info@albaniacoastdreams.com</p>
                <p>📍 Calle Cicloturismo 23, Madrid</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Síguenos</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>🌐 www.cyclingvan.com</p>
                <p>📸 @albaniacoastdreams</p>
                
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>© 2025 Albania Coast Dreams. Todos los derechos reservados</p>
            <p className="mt-2 text-sm">Licencia de Agencia de Viajes: AAVV-20</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;