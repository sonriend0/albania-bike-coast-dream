import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, Star, Heart, Globe } from "lucide-react";

export const NosotrosSection = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Pasión Auténtica",
      description: "Cada ruta nace de nuestra propia experiencia y amor por el cicloturismo. No vendemos destinos, compartimos pasiones."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Grupos Pequeños",
      description: "Máximo 8 ciclistas por grupo. Creemos en experiencias íntimas donde cada participante importa."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Experiencia Comprobada",
      description: "15 años diseñando viajes cicloturistas únicos. Cada detalle está pensado para superar expectativas."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Conexión Local",
      description: "Trabajamos con comunidades locales, creando un impacto positivo en cada destino que visitamos."
    }
  ];

  const team = [
    {
      name: "Carlos Montenegro",
      role: "Fundador y Guía Principal",
      experience: "15 años en cicloturismo",
      description: "Arquitecto reconvertido en guía especializado. Ha recorrido más de 50,000 km en bicicleta por Europa y los Balcanes.",
      certifications: ["Guía Oficial UCI", "Mecánico Certificado", "Primeros Auxilios"]
    },
    {
      name: "Ana Díaz",
      role: "Coordinadora de Rutas",
      experience: "8 años organizando viajes",
      description: "Especialista en logística y cultura local. Su pasión por los Balcanes ha llevado a crear rutas únicas.",
      certifications: ["Gestión Turística", "Guía Cultural", "Sostenibilidad"]
    }
  ];

  const achievements = [
    { number: "150+", label: "Viajes Organizados" },
    { number: "1,200+", label: "Ciclistas Felices" },
    { number: "15", label: "Años de Experiencia" },
    { number: "98%", label: "Satisfacción Cliente" }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            👥 Quiénes Somos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Más que una Empresa, una Filosofía
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nacimos de la convicción de que viajar en bicicleta es la forma más auténtica 
            de descubrir el mundo. Cada pedalada es una historia, cada ruta una aventura compartida.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-coastal">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-primary">
                    Nuestra Historia
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Todo comenzó en 2009 cuando Carlos, arquitecto de profesión y ciclista de corazón, 
                      decidió cambiar los planos por las rutas. Su primer viaje a Albania fue amor a primera vista.
                    </p>
                    <p>
                      <strong className="text-card-foreground">Albania no era solo un destino</strong>, 
                      era una revelación. Costas vírgenes, montañas dramáticas, gente auténtica y la sensación 
                      de estar descubriendo un secreto guardado durante décadas.
                    </p>
                    <p>
                      Hoy, después de más de 150 viajes organizados, mantenemos la misma filosofía: 
                      <strong className="text-card-foreground">pequeños grupos, grandes experiencias</strong>. 
                      Porque creemos que los mejores viajes no se miden en kilómetros, sino en momentos.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gradient-coastal rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">
                          {achievement.number}
                        </span>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-card-foreground">
                          {achievement.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-card-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Nuestro Equipo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-coastal transition-all duration-300 bg-card/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-card-foreground mb-2">
                      {member.name}
                    </h4>
                    <p className="text-primary font-semibold mb-1">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.experience}</p>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div>
                    <p className="font-semibold mb-3 text-card-foreground">Certificaciones:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Preview */}
        <div className="text-center">
          <Card className="bg-gradient-coastal text-primary-foreground p-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-4 italic">
                "No era solo un viaje en bicicleta, era una experiencia transformadora. 
                Albania me enamoró y el equipo hizo que cada momento fuera perfecto."
              </blockquote>
              <p className="text-primary-foreground/90">
                — María González, participante viaje 2024
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};