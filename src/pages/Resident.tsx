import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import MetricCard from "@/components/ui/metric-card";
import AlertBanner from "@/components/ui/alert-banner";
import { 
  Home, 
  Zap, 
  Droplets, 
  Recycle,
  Heart,
  DollarSign,
  TrendingUp,
  TreePine,
  Users,
  Share,
  Calendar,
  CheckCircle
} from "lucide-react";

const Resident = () => {

  return (
    <div className="min-h-screen bg-gradient-surface pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Resident
          </h1>
          <p className="text-muted-foreground">
            Your personal sustainability dashboard for Marrickville
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Energy Earned Today"
            value="$4.20"
            subtitle="Sold excess solar power"
            icon={<Zap className="w-4 h-4" />}
            trend="up"
            trendValue="+$1.20"
            variant="success"
          />
          
          <MetricCard
            title="Water Saved"
            value="340L"
            subtitle="Rainwater harvested today"
            icon={<Droplets className="w-4 h-4" />}
            trend="up"
            trendValue="+12%"
            variant="accent"
          />
          
          <MetricCard
            title="Waste Diverted"
            value="96%"
            subtitle="From landfill this month"
            icon={<Recycle className="w-4 h-4" />}
            trend="up"
            trendValue="+4%"
            variant="success"
          />
          
          <MetricCard
            title="Community Impact"
            value="4.8"
            subtitle="★ Sustainability rating"
            icon={<Heart className="w-4 h-4" />}
            trend="up"
            trendValue="+0.3"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Home Energy */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Home Energy System
              </CardTitle>
              <CardDescription>
                Real-time energy generation and consumption
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-border p-4">
                  <div className="flex items-center justify-between h-full">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <Zap className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="text-sm font-medium">Solar</div>
                      <div className="text-xs text-muted-foreground">3.2 kW</div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <Home className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="text-sm font-medium">Your Home</div>
                      <div className="text-xs text-muted-foreground">1.8 kW</div>
                      <div className="text-xs text-success font-medium">Personal Use</div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full h-1 bg-gradient-to-r from-primary to-success rounded-full relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <Users className="w-6 h-6 text-success-foreground" />
                      </div>
                      <div className="text-sm font-medium">Community</div>
                      <div className="text-xs text-muted-foreground">1.4 kW</div>
                      <div className="text-xs text-success font-medium">Shared</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">3.2</div>
                    <div className="text-xs text-muted-foreground">kW Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1.8</div>
                    <div className="text-xs text-muted-foreground">Personal Use</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">1.4</div>
                    <div className="text-xs text-muted-foreground">Available to Share</div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4 bg-success/5">
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <Share className="w-4 h-4 text-success" />
                    Share Your Excess Energy
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border/50">
                      <div>
                        <div className="font-medium text-sm">Marrickville Community Center</div>
                        <div className="text-xs text-muted-foreground">Running low on power • 0.8 km away</div>
                      </div>
                      <Button size="sm" variant="outline" className="text-success border-success/30 hover:bg-success/10">
                        Share 0.5 kW
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border/50">
                      <div>
                        <div className="font-medium text-sm">Local Cafe - Power Outage</div>
                        <div className="text-xs text-muted-foreground">Emergency backup needed • 1.2 km away</div>
                      </div>
                      <Button size="sm" variant="outline" className="text-success border-success/30 hover:bg-success/10">
                        Share 0.9 kW
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-xs text-muted-foreground">
                    💡 You can earn $0.15/kWh for shared energy. Total potential today: $0.21
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>


          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Manage your services and bookings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Book E-Waste Pickup
              </Button>
              
              <Button className="w-full justify-start" variant="outline">
                <Droplets className="w-4 h-4 mr-2" />
                Water Usage Report
              </Button>
              
              <Button className="w-full justify-start" variant="outline">
                <DollarSign className="w-4 h-4 mr-2" />
                Energy Trading
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <Recycle className="w-4 h-4 mr-2" />
                Recycling Schedule
              </Button>


            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="w-5 h-5" />
                Water Management
              </CardTitle>
              <CardDescription>
                Rainwater harvesting and aquifer recharge
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Aquifer Recharge Target</span>
                  <span className="text-sm text-secondary">78%</span>
                </div>
                <Progress value={78} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {340 * 0.78}L of today's harvested rainwater directed to aquifers
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Monthly Aquifer Contribution</span>
                  <span className="text-sm text-accent">2,450L</span>
                </div>
                <Progress value={82} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  Target: 3,000L • {Math.round((2450/3000)*100)}% of monthly goal achieved
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Community Water Security</span>
                  <span className="text-sm text-success">91%</span>
                </div>
                <Progress value={91} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  Your contribution helps maintain local water table levels
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="text-center p-3 bg-secondary/10 rounded-lg">
                  <div className="text-lg font-bold text-secondary">340L</div>
                  <div className="text-xs text-muted-foreground">Harvested Today</div>
                </div>
                <div className="text-center p-3 bg-accent/10 rounded-lg">
                  <div className="text-lg font-bold text-accent">265L</div>
                  <div className="text-xs text-muted-foreground">To Aquifers</div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Droplets className="w-4 h-4 mr-2" />
                View Water Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TreePine className="w-5 h-5" />
                My Impact Report
              </CardTitle>
              <CardDescription>
                Your environmental contribution this month
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-6 bg-gradient-to-br from-success/10 to-primary/10 rounded-lg">
                <TreePine className="w-12 h-12 text-success mx-auto mb-4" />
                <div className="text-2xl font-bold text-success mb-2">3 Trees</div>
                <p className="text-sm text-muted-foreground">
                  Your actions this month were equivalent to planting 3 trees
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CO₂ Saved</span>
                  <span className="font-semibold text-success">145 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Energy Shared</span>
                  <span className="font-semibold text-accent">284 kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Water Conserved</span>
                  <span className="font-semibold text-secondary">8,400 L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Waste Diverted</span>
                  <span className="font-semibold text-primary">96%</span>
                </div>
              </div>

              <Button className="w-full">
                <Share className="w-4 h-4 mr-2" />
                Share Impact Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resident;