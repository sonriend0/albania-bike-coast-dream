import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Euro, 
  Calendar,
  Users,
  Bike,
  Utensils,
  Bed,
  Shield,
  Info
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactoSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    dates: "",
    participants: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos en las próximas 24 horas para concretar tu aventura albanesa.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      dates: "",
      participants: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Teléfono",
      content: "+34 123 456 789",
      description: "Lunes a Viernes: 9:00 - 18:00"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "info@albaniacoastdreams.com",
      description: "Respuesta en 24h garantizada"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Oficina",
      content: "Calle Cicloturismo 23, Madrid",
      description: "Visitas con cita previa"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Horario",
      content: "Lun-Vie: 9:00-18:00",
      description: "Sáb: 10:00-14:00"
    }
  ];

  const pricing = {
    pricePerPerson: "2,890",
    currency: "€",
    includes: [
      "9 noches en hoteles 4* (hab. doble)",
      "Bicicleta de trekking premium + casco",
      "Guía especializado bilingüe",
      "Vehículo de apoyo todo el recorrido",
      "Desayunos diarios + 3 cenas especiales",
      "Ferry Sarandë-Corfú",
      "Entradas a monumentos incluidos",
      "Seguro de viaje y cancelación",
      "Traslados aeropuerto incluidos"
    ],
    notIncludes: [
      "Vuelos (gestionamos con descuentos)",
      "Comidas no especificadas",
      "Bebidas alcohólicas",
      "Gastos personales",
      "Suplemento habitación individual: +490€"
    ]
  };

  const nextDepartures = [
    { date: "15-22 Mayo 2025", status: "Disponible", spots: "3 plazas" },
    { date: "12-21 Junio 2025", status: "Últimas plazas", spots: "2 plazas" },
    { date: "10-19 Julio 2025", status: "Disponible", spots: "6 plazas" },
    { date: "14-23 Agosto 2025", status: "Disponible", spots: "8 plazas" },
    { date: "11-20 Septiembre 2025", status: "Disponible", spots: "7 plazas" }
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            📞 Contacto
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Tu Aventura Albanesa Comienza Aquí
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para hacer realidad tu sueño cicloturista. 
            Cada consulta es atendida personalmente por nuestro equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">
                  Solicita Información o Reserva
                </CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y te enviaremos toda la información detallada
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+34 123 456 789"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="participants">Número de participantes</Label>
                      <Input
                        id="participants"
                        name="participants"
                        value={formData.participants}
                        onChange={handleChange}
                        placeholder="2 personas"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dates">Fechas preferidas (opcional)</Label>
                    <Input
                      id="dates"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      placeholder="Mayo 2025, fechas flexibles..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Cuéntanos sobre tu experiencia ciclista, expectativas del viaje, necesidades especiales..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-coastal text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <Euro className="h-8 w-8 mr-3" />
                Precio por Persona
              </CardTitle>
              <div className="text-5xl font-bold">
                {pricing.pricePerPerson}{pricing.currency}
              </div>
              <p className="text-primary-foreground/90">
                Habitación doble · Todo incluido · Sin sorpresas
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    Incluido en el Precio
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {pricing.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl gradient-text flex items-center">
                <Info className="h-6 w-6 mr-3" />
                Información Adicional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-card-foreground">
                    No Incluido
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {pricing.notIncludes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full mr-3 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2 text-card-foreground">
                    💡 Facilidades de Pago
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Reserva con solo 300€</li>
                    <li>• Pago final 30 días antes</li>
                    <li>• Financiación disponible</li>
                    <li>• Seguro de cancelación incluido</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Departures */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
            Próximas Salidas 2025
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nextDepartures.map((departure, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-bold text-lg text-card-foreground">
                      {departure.date}
                    </h4>
                  </div>
                  <Badge 
                    variant={departure.status === "Últimas plazas" ? "destructive" : "secondary"}
                    className="mb-2"
                  >
                    {departure.status}
                  </Badge>
                  <p className="text-muted-foreground text-sm flex items-center justify-center">
                    <Users className="h-4 w-4 mr-1" />
                    {departure.spots}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};