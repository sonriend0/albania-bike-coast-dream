import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Waves, Sun, Camera, Utensils, Castle } from "lucide-react";
export const DestinoSection = () => {
  const highlights = [{
    icon: <Waves className="h-8 w-8" />,
    title: "Riviera Albanesa",
    description: "Aguas cristalinas del mar Jónico y playas vírgenes que rivalizan con las mejores del Mediterráneo.",
    color: "bg-primary-light"
  }, {
    icon: <Mountain className="h-8 w-8" />,
    title: "Montañas Épicas",
    description: "Los Alpes Albaneses ofrecen paisajes dramáticos que se elevan directamente desde el mar.",
    color: "bg-accent"
  }, {
    icon: <Castle className="h-8 w-8" />,
    title: "Historia Viva",
    description: "Castillos otomanos, ruinas romanas y pueblos medievales preservados en el tiempo.",
    color: "bg-primary-glow"
  }, {
    icon: <Utensils className="h-8 w-8" />,
    title: "Gastronomía Auténtica",
    description: "Sabores únicos donde se mezclan las tradiciones balcánicas, turcas e italianas.",
    color: "bg-secondary"
  }, {
    icon: <Camera className="h-8 w-8" />,
    title: "Fotogénico",
    description: "Cada curva del camino revela postales perfectas dignas de National Geographic.",
    color: "bg-primary"
  }, {
    icon: <Sun className="h-8 w-8" />,
    title: "Clima Perfecto",
    description: "300 días de sol al año hacen de Albania el destino ideal para cicloturismo.",
    color: "bg-gradient-sunset"
  }];
  const regions = [{
    name: "Tirana y Centro",
    description: "Capital vibrante con arquitectura colorida y cultura urbana en constante evolución.",
    points: ["Plaza Skanderbeg", "Bunk'Art", "Mercado de Pazari i Ri"]
  }, {
    name: "Costa del Sur",
    description: "La joya del Mediterráneo con aguas turquesas y pueblos costeros encantadores.",
    points: ["Sarandë", "Butrint (UNESCO)", "Playa de Ksamil"]
  }, {
    name: "Riviera Albanesa",
    description: "Acantilados espectaculares y calas secretas accesibles solo en bicicleta.",
    points: ["Himarë", "Dhërmi", "Llamani Beach"]
  }, {
    name: "Corfú (Grecia)",
    description: "Final épico en la isla griega más verde con arquitectura veneciana.",
    points: ["Ciudad Vieja (UNESCO)", "Palacio Achillion", "Playa Paleokastritsa"]
  }];
  return <section id="destino" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Albania: El secreto mejor guardado del Mediterráneo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Una tierra donde las montañas abrazan el mar, donde la historia susurra en cada piedra 
            y donde la hospitalidad es un arte perfeccionado durante milenios.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => <Card key={index} className="group hover:shadow-coastal transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${highlight.color} rounded-full flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300`}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Regions Overview */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Nuestras regiones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => <Card key={index} className="hover:shadow-card transition-all duration-300 bg-card/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-primary">
                    {region.name}
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {region.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-card-foreground">Puntos destacados:</p>
                    <ul className="space-y-1">
                      {region.points.map((point, pointIndex) => <li key={pointIndex} className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {point}
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};