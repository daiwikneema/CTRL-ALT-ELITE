import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MetricCard from "@/components/ui/metric-card";
import AlertBanner from "@/components/ui/alert-banner";
import { 
  MapPin, 
  Zap, 
  Droplets, 
  Users, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Play,
  BarChart3,
  Recycle,
  Building2,
  ArrowRight
} from "lucide-react";

const CityPlanner = () => {
  const [stormProtocolActive, setStormProtocolActive] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleStormProtocol = () => {
    setStormProtocolActive(true);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  // Sample waste management data
  const wasteListings = [
    {
      id: 1,
      company: "Sydney Brewery Co.",
      wasteType: "Spent Grain",
      quantity: "2 tons/week",
      location: "Surry Hills",
      status: "Available",
      potentialUse: "Animal feed, compost"
    },
    {
      id: 2,
      company: "TechCorp Manufacturing",
      wasteType: "Plastic Scraps",
      quantity: "500kg/week",
      location: "Alexandria",
      status: "Available",
      potentialUse: "Recycling, 3D printing"
    },
    {
      id: 3,
      company: "Green Grocer Market",
      wasteType: "Food Waste",
      quantity: "300kg/week",
      location: "Newtown",
      status: "Available",
      potentialUse: "Composting, biogas"
    }
  ];

  const repurposingOpportunities = [
    {
      id: 1,
      company: "Urban Farm Collective",
      need: "Organic waste for composting",
      location: "Marrickville",
      status: "Seeking"
    },
    {
      id: 2,
      company: "EcoPlastic Solutions",
      need: "Plastic waste for recycling",
      location: "Botany",
      status: "Seeking"
    },
    {
      id: 3,
      company: "Local Animal Sanctuary",
      need: "Food waste for animal feed",
      location: "Leichhardt",
      status: "Seeking"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            City Authority Dashboard
          </h1>
          <p className="text-muted-foreground">
            Real-time oversight of Sydney's responsive urban grid
          </p>
        </div>



        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Energy Generation"
            value="15 MWh"
            subtitle="Decentralized solar today"
            icon={<Zap className="w-4 h-4" />}
            trend="up"
            trendValue="+12%"
            variant="success"
          />
          
          <MetricCard
            title="Water Capacity"
            value={stormProtocolActive ? "78%" : "55%"}
            subtitle="Available stormwater storage"
            icon={<Droplets className="w-4 h-4" />}
            trend={stormProtocolActive ? "up" : "neutral"}
            trendValue={stormProtocolActive ? "+23%" : "stable"}
            variant={stormProtocolActive ? "success" : "warning"}
          />
          
          <MetricCard
            title="Active Jobs"
            value={stormProtocolActive ? "92" : "17"}
            subtitle="Gig workers deployed"
            icon={<Users className="w-4 h-4" />}
            trend={stormProtocolActive ? "up" : "neutral"}
            trendValue={stormProtocolActive ? "+75" : "5 pending"}
            variant="accent"
          />
          
          <MetricCard
            title="System Health"
            value="98.2%"
            subtitle="Infrastructure uptime"
            icon={<BarChart3 className="w-4 h-4" />}
            trend="up"
            trendValue="+0.3%"
            variant="success"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-1 gap-6 mb-8">
          {/* Interactive Map */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Sydney Infrastructure Map
              </CardTitle>
              <CardDescription>
                Live view of connected infrastructure and ongoing activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-border overflow-hidden">
                {/* Dummy Map Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                  {/* Sydney Harbor Bridge */}
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-400 rounded-full"></div>
                  
                  {/* CBD Area */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">CBD</span>
                  </div>
                  
                  {/* Solar Farms */}
                  <div className="absolute top-1/6 left-1/4 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div className="absolute top-1/5 right-1/4 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-yellow-600" />
                  </div>
                  
                  {/* Water Storage Tanks */}
                  <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center">
                    <Droplets className="w-3 h-3 text-blue-600" />
                  </div>
                  <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center">
                    <Droplets className="w-3 h-3 text-blue-600" />
                  </div>
                  
                  {/* Community Hubs */}
                  <div className="absolute top-2/3 left-1/4 w-6 h-6 bg-green-300 rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 text-green-600" />
                  </div>
                  <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-green-300 rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 text-green-600" />
                  </div>
                  
                  {/* Storm Prep Indicators */}
                  {stormProtocolActive && (
                    <>
                      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-warning rounded-full animate-ping"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-warning rounded-full animate-ping"></div>
                      <div className="absolute top-2/3 left-2/3 w-4 h-4 bg-warning rounded-full animate-ping"></div>
                    </>
                  )}
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-px bg-gray-300 absolute top-1/4"></div>
                    <div className="w-full h-px bg-gray-300 absolute top-1/2"></div>
                    <div className="w-full h-px bg-gray-300 absolute top-3/4"></div>
                    <div className="h-full w-px bg-gray-300 absolute left-1/4"></div>
                    <div className="h-full w-px bg-gray-300 absolute left-1/2"></div>
                    <div className="h-full w-px bg-gray-300 absolute left-3/4"></div>
                  </div>
                </div>
                
                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 text-xs shadow-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span>Solar Generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span>Water Storage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                      <span>Community Hubs</span>
                    </div>
                    {stormProtocolActive && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                        <span>Storm Prep Active</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status Overlay */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-sm font-medium text-foreground">Live Status</div>
                  <div className="text-xs text-muted-foreground">
                    {stormProtocolActive ? "Storm Protocol Active" : "Normal Operations"}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-xs text-success">Connected</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>


        </div>

        {/* Analytics Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Environmental Impact</CardTitle>
              <CardDescription>Real-time sustainability metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CO₂ Reduced Today</span>
                  <span className="font-semibold text-success">2.3 tonnes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Water Conserved</span>
                  <span className="font-semibold text-secondary">8,400L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Waste Diverted</span>
                  <span className="font-semibold text-accent">94%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Economic Performance</CardTitle>
              <CardDescription>Financial benefits and savings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Operational Savings</span>
                  <span className="font-semibold text-primary">$12,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Jobs Created</span>
                  <span className="font-semibold text-secondary">{stormProtocolActive ? "92" : "17"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Community ROI</span>
                  <span className="font-semibold text-success">+18.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Waste Management & Repurposing */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Available Waste */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="w-5 h-5" />
                Available Waste
              </CardTitle>
              <CardDescription>
                Companies listing waste for repurposing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {wasteListings.map((waste) => (
                  <div key={waste.id} className="border border-border rounded-lg p-3 hover:shadow-sm transition-smooth">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-foreground">{waste.company}</h4>
                        <p className="text-sm text-muted-foreground">{waste.wasteType}</p>
                      </div>
                      <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                        {waste.status}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>Quantity: {waste.quantity}</div>
                      <div>Location: {waste.location}</div>
                      <div>Potential Use: {waste.potentialUse}</div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  <Building2 className="w-4 h-4 mr-2" />
                  List Your Waste
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Repurposing Opportunities */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Waste Repurposing Requests
              </CardTitle>
              <CardDescription>
                Companies seeking waste materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {repurposingOpportunities.map((opportunity) => (
                  <div key={opportunity.id} className="border border-border rounded-lg p-3 hover:shadow-sm transition-smooth">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-foreground">{opportunity.company}</h4>
                        <p className="text-sm text-muted-foreground">{opportunity.need}</p>
                      </div>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                        {opportunity.status}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Location: {opportunity.location}
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Post request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CityPlanner;