import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, BarChart3, Zap, Droplets, Recycle, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const dashboards = [
    {
      title: "City Authority Dashboard",
      description: "Request and share waste materials for repurposing, and monitor the city’s economic and environmental performance through green initiatives.",
      icon: MapPin,
      href: "/city-planner",
      color: "bg-gradient-primary"
    },
    {
      title: "Gig Worker Platform", 
      description: "A one-stop platform connecting gig workers with contract opportunities, transparent earnings, and skill-building programs, including government-backed certifications and workshops.",
      icon: Users,
              href: "/gig-worker",
      color: "bg-gradient-secondary"
    },
    {
      title: "Resident Dashboard",
      description: "Manage your energy and water smartly, share excess resources with neighbors, and track your real-world environmental impact.",
      icon: BarChart3,
      href: "/resident", 
      color: "bg-gradient-accent"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Smart Energy Grid",
      description: "Decentralized solar networks with peer-to-peer energy trading"
    },
    {
      icon: Droplets,
      title: "Water Management",
      description: "Optimized water harvesting and aquifer recharge"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Community-driven waste reduction and resource recovery"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Measurable environmental and social benefits for all residents"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      <section className="pt-20 pb-3 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-secondary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="inline-block p-2 px-4 bg-gradient-primary/10 border border-primary/20 rounded-full mb-4">
                <span className="text-sm font-medium text-primary">🌱 Sustainable Future</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent animate-fade-in">
              Bioscape
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-3 font-medium">
              Ecological Urban Planning
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Transforming urban infrastructure into sustainable, nature-integrated communities 
              through smart technology and ecological design principles.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Smart Grid Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Water Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Community Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 relative">
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integrated Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three interconnected layers working together to create resilient, 
              efficient, and economically inclusive communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-card/30 to-card/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block p-2 px-4 bg-gradient-accent/10 border border-accent/20 rounded-full mb-4">
              <span className="text-sm font-medium text-accent">🚀 Ready to Explore</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Services We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how Bioscape connects city planners, gig workers, 
              and residents in a unified ecosystem.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dashboards.map((dashboard, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 group border-0 bg-gradient-to-br from-card to-card/90 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${dashboard.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <dashboard.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{dashboard.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{dashboard.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={dashboard.href}>
                    <Button className="w-full group-hover:shadow-glow transition-all duration-300 bg-gradient-primary hover:bg-gradient-primary/90 text-white border-0">
                      Explore Dashboard
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Landing;