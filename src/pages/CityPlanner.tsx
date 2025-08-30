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
            subtitle="Available storage"
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
          {/* Neighborhood Metrics */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Neighborhood Performance Metrics
              </CardTitle>
              <CardDescription>
                Monthly consumption and generation data for government planning and resource allocation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 p-3 bg-muted/30 rounded-lg font-medium text-sm">
                  <div>Neighborhood</div>
                  <div className="text-center">Water Consumption</div>
                  <div className="text-center">Energy Consumption</div>
                  <div className="text-center">Waste Generated</div>
                </div>

                {/* Neighborhood Data */}
                {[
                  {
                    name: "Marrickville",
                    water: "2,450 L",
                    energy: "1.8 MWh",
                    waste: "320 kg",
                    status: "success"
                  },
                  {
                    name: "Newtown",
                    water: "1,890 L",
                    energy: "1.2 MWh",
                    waste: "280 kg",
                    status: "success"
                  },
                  {
                    name: "Surry Hills",
                    water: "3,120 L",
                    energy: "2.1 MWh",
                    waste: "410 kg",
                    status: "warning"
                  },
                  {
                    name: "Glebe",
                    water: "1,680 L",
                    energy: "0.9 MWh",
                    waste: "195 kg",
                    status: "success"
                  },
                  {
                    name: "Alexandria",
                    water: "2,890 L",
                    energy: "1.9 MWh",
                    waste: "380 kg",
                    status: "accent"
                  },
                  {
                    name: "Leichhardt",
                    water: "2,100 L",
                    energy: "1.4 MWh",
                    waste: "250 kg",
                    status: "success"
                  },
                  {
                    name: "CBD",
                    water: "5,670 L",
                    energy: "4.2 MWh",
                    waste: "890 kg",
                    status: "warning"
                  },
                  {
                    name: "Botany",
                    water: "1,450 L",
                    energy: "0.8 MWh",
                    waste: "180 kg",
                    status: "success"
                  }
                ].map((neighborhood, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-3 border border-border/50 rounded-lg hover:bg-muted/20 transition-colors">
                    <div className="font-medium">{neighborhood.name}</div>
                    <div className="text-center">
                      <span className="text-secondary font-medium">{neighborhood.water}</span>
                      <div className="text-xs text-muted-foreground">Monthly avg</div>
                    </div>
                    <div className="text-center">
                      <span className="text-accent font-medium">{neighborhood.energy}</span>
                      <div className="text-xs text-muted-foreground">Monthly avg</div>
                    </div>
                    <div className="text-center">
                      <span className="text-primary font-medium">{neighborhood.waste}</span>
                      <div className="text-xs text-muted-foreground">Monthly avg</div>
                    </div>
                  </div>
                ))}

                {/* Summary Stats */}
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <h4 className="font-medium text-foreground mb-3">City-Wide Summary (This Month)</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-secondary">21,250 L</div>
                      <div className="text-muted-foreground">Total Water Consumption</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">14.3 MWh</div>
                      <div className="text-muted-foreground">Total Energy Consumption</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">2,705 kg</div>
                      <div className="text-muted-foreground">Total Waste Generated</div>
                    </div>
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