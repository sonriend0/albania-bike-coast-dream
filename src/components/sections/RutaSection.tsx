import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Mountain, Utensils, Bed, Camera } from "lucide-react";
import routeMapImage from "@/assets/route-map.jpg";

export const RutaSection = () => {
  const routeDays = [
    {
      day: 1,
      title: "Llegada a Tirana",
      distance: "0 km",
      difficulty: "Descanso",
      location: "Tirana",
      description: "Recepción en el aeropuerto, traslado al hotel y bienvenida. Briefing del viaje y prueba de bicicletas.",
      highlights: ["Check-in hotel boutique", "Cena de bienvenida", "Ajuste de bicicletas"],
      accommodation: "Hotel Boutique Tirana 4*"
    },
    {
      day: 2,
      title: "Tirana - Durrës",
      distance: "45 km",
      difficulty: "Fácil",
      location: "Durrës",
      description: "Primera etapa suave por la llanura costera hasta llegar al puerto histórico de Durrës.",
      highlights: ["Anfiteatro romano", "Museo arqueológico", "Paseo marítimo"],
      accommodation: "Hotel Vila Durrës 4*"
    },
    {
      day: 3,
      title: "Durrës - Vlorë",
      distance: "85 km",
      difficulty: "Moderado",
      location: "Vlorë",
      description: "Ruta costera espectacular siguiendo la bahía hasta Vlorë, donde nace la Riviera Albanesa.",
      highlights: ["Museo de la Independencia", "Isla Sazan vista", "Atardecer en el puerto"],
      accommodation: "Hotel Vlora International 4*"
    },
    {
      day: 4,
      title: "Vlorë - Himarë",
      distance: "72 km",
      difficulty: "Desafiante",
      location: "Himarë",
      description: "La etapa reina: el paso de Llogara con vistas épicas seguido del descenso a la Riviera.",
      highlights: ["Paso de Llogara (1,000m)", "Vista panorámica 360°", "Descenso a Himarë"],
      accommodation: "Hotel Villa Himare 4*"
    },
    {
      day: 5,
      title: "Día de Descanso en Himarë",
      distance: "Opcional 25 km",
      difficulty: "Relax",
      location: "Himarë",
      description: "Día libre para explorar playas vírgenes, snorkel o ruta opcional a Dhërmi.",
      highlights: ["Playa Jale", "Snorkel en aguas cristalinas", "Pueblos tradicionales"],
      accommodation: "Hotel Villa Himare 4*"
    },
    {
      day: 6,
      title: "Himarë - Sarandë",
      distance: "58 km",
      difficulty: "Moderado",
      location: "Sarandë",
      description: "Ruta costera con múltiples playas y calas, llegada a la perla del sur albanés.",
      highlights: ["Porto Palermo", "Múltiples paradas en playas", "Centro de Sarandë"],
      accommodation: "Hotel Mediterrane 4*"
    },
    {
      day: 7,
      title: "Sarandë - Butrint - Ksamil",
      distance: "35 km",
      difficulty: "Fácil",
      location: "Ksamil",
      description: "Visita al sitio arqueológico de Butrint (UNESCO) y las 'Maldivas de Albania' en Ksamil.",
      highlights: ["Butrint (Patrimonio UNESCO)", "Islas de Ksamil", "Aguas turquesas"],
      accommodation: "Resort Ksamil 4*"
    },
    {
      day: 8,
      title: "Ferry a Corfú",
      distance: "30 km",
      difficulty: "Fácil",
      location: "Corfú",
      description: "Ferry matutino a Corfú y tarde explorando la ciudad vieja patrimonio de la humanidad.",
      highlights: ["Ferry Sarandë-Corfú", "Ciudad Vieja UNESCO", "Arquitectura veneciana"],
      accommodation: "Hotel Corfu Palace 4*"
    },
    {
      day: 9,
      title: "Exploración de Corfú",
      distance: "45 km",
      difficulty: "Moderado",
      location: "Corfú",
      description: "Ruta circular por la isla verde de Grecia: Paleokastritsa, Angelokastro y Palacio Achillion.",
      highlights: ["Monasterio Paleokastritsa", "Castillo Angelokastro", "Palacio Sisí"],
      accommodation: "Hotel Corfu Palace 4*"
    },
    {
      day: 10,
      title: "Despedida",
      distance: "0 km",
      difficulty: "Descanso",
      location: "Corfú",
      description: "Último desayuno juntos y traslados al aeropuerto según horarios de vuelo.",
      highlights: ["Desayuno de despedida", "Intercambio de contactos", "Traslado al aeropuerto"],
      accommodation: "Fin del programa"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil": return "bg-green-500";
      case "Moderado": return "bg-yellow-500";
      case "Desafiante": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const totalStats = {
    distance: "390 km",
    elevation: "4,200 m",
    days: "10 días",
    nights: "9 noches"
  };

  return (
    <section id="ruta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            🚴 La Ruta
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            De Tirana a Corfú: 10 Días de Aventura Costera
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Una ruta cuidadosamente diseñada que combina desafío, belleza y cultura. 
            Cada etapa ha sido probada y perfeccionada para ofrecerte la experiencia definitiva.
          </p>
        </div>

        {/* Route Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center p-6 bg-gradient-coastal text-primary-foreground">
            <div className="text-3xl font-bold mb-2">{totalStats.distance}</div>
            <div className="text-sm opacity-90">Distancia Total</div>
          </Card>
          <Card className="text-center p-6 bg-primary text-primary-foreground">
            <div className="text-3xl font-bold mb-2">{totalStats.elevation}</div>
            <div className="text-sm opacity-90">Desnivel Acumulado</div>
          </Card>
          <Card className="text-center p-6 bg-accent text-accent-foreground">
            <div className="text-3xl font-bold mb-2">{totalStats.days}</div>
            <div className="text-sm opacity-90">Duración</div>
          </Card>
          <Card className="text-center p-6 bg-secondary text-secondary-foreground">
            <div className="text-3xl font-bold mb-2">{totalStats.nights}</div>
            <div className="text-sm opacity-90">Noches</div>
          </Card>
        </div>

        {/* Route Map */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={routeMapImage} 
                  alt="Mapa de la ruta Tirana-Corfú" 
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Ruta Tirana → Corfú</h3>
                    <p className="text-white/90">Siguiendo la costa más espectacular del Mediterráneo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Daily Itinerary */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Itinerario Día a Día
          </h3>
          {routeDays.map((day, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-coastal transition-all duration-300 group">
              <CardHeader className="bg-gradient-hero pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {day.day}
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {day.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-muted-foreground mt-1">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{day.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{day.distance}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    className={`${getDifficultyColor(day.difficulty)} text-white px-3 py-1`}
                  >
                    {day.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {day.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-card-foreground">
                      <Camera className="h-4 w-4 mr-2" />
                      Puntos Destacados
                    </h4>
                    <ul className="space-y-1">
                      {day.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-card-foreground">
                      <Bed className="h-4 w-4 mr-2" />
                      Alojamiento
                    </h4>
                    <p className="text-muted-foreground">{day.accommodation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-coastal text-primary-foreground p-8">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para la Aventura de tu Vida?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Esta ruta está diseñada para ciclistas con experiencia básica. 
              Incluye todo lo necesario: bicicletas, alojamiento, desayunos y guía especializado.
            </p>
            <Button variant="sunset" size="lg" className="text-lg px-8 py-4 h-auto">
              Solicita Información Detallada
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};