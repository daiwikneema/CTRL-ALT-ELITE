import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricCard from "@/components/ui/metric-card";
import InteractiveMap from "@/components/ui/interactive-map";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Star,
  Users, 
  CheckCircle,
  AlertTriangle,
  Zap,
  Droplets,
  GraduationCap,
  TrendingUp,
  Home
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  location: string;
  coordinates: [number, number]; 
  priority: "high" | "medium" | "low";
  payment: number;
  duration: string;
  category: "storm-prep" | "maintenance" | "energy" | "waste";
  status: "available" | "claimed" | "completed";
}

interface ResidentJobRequest {
  id: string;
  title: string;
  description: string;
  location: string;
  category: "maintenance" | "cleaning" | "repair" | "other";
  priority: "low" | "medium" | "high";
  budget: number;
  status: "open" | "claimed" | "completed";
  createdAt: Date;
  requestedBy: string;
  claimedBy?: string;
}

const GigWorker = () => {
  const [claimedJobs, setClaimedJobs] = useState<string[]>([]);
  const [claimedResidentJobs, setClaimedResidentJobs] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const jobs: Job[] = [
    {
      id: "1",
      title: "Clear Rain Garden Inlet - Enmore Park",
      location: "Enmore",
      coordinates: [151.1782, -33.8985],
      priority: "high",
      payment: 20,
      duration: "30 mins",
      category: "storm-prep",
      status: "available"
    },
    {
      id: "2", 
      title: "Check Community Battery Status",
      location: "Newtown",
      coordinates: [151.1795, -33.8968],
      priority: "high", 
      payment: 35,
      duration: "45 mins",
      category: "energy",
      status: "available"
    },
    {
      id: "3",
      title: "Stormwater Drain Inspection",
      location: "Glebe",
      coordinates: [151.1869, -33.8792],
      priority: "high",
      payment: 25,
      duration: "20 mins", 
      category: "storm-prep",
      status: "available"
    },
    {
      id: "4",
      title: "Solar Panel Cleaning",
      location: "Surry Hills",
      coordinates: [151.2099, -33.8886],
      priority: "medium",
      payment: 40,
      duration: "1 hour",
      category: "energy", 
      status: "available"
    },
    {
      id: "5",
      title: "E-bike Rebalancing",
      location: "CBD",
      coordinates: [151.2093, -33.8688],
      priority: "medium",
      payment: 15,
      duration: "15 mins",
      category: "maintenance",
      status: "available"
    }
  ];

  const residentJobRequests: ResidentJobRequest[] = [
    {
      id: "r1",
      title: "Garden Maintenance Needed",
      description: "Need help with weeding and pruning in backyard garden",
      location: "Marrickville",
      category: "maintenance",
      priority: "medium",
      budget: 50,
      status: "open",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
      requestedBy: "Sarah L."
    },
    {
      id: "r2",
      title: "Solar Panel Cleaning",
      description: "Solar panels need cleaning after recent storm",
      location: "Marrickville",
      category: "cleaning",
      priority: "high",
      budget: 80,
      status: "claimed",
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
      requestedBy: "Mike R.",
      claimedBy: "You"
    },
    {
      id: "r3",
      title: "Fence Repair",
      description: "Wooden fence needs repair after storm damage",
      location: "Newtown",
      category: "repair",
      priority: "high",
      budget: 120,
      status: "open",
      createdAt: new Date(Date.now() - 30 * 60 * 1000),
      requestedBy: "Emma T."
    },
    {
      id: "r4",
      title: "House Cleaning",
      description: "Deep cleaning needed for 3-bedroom house",
      location: "Glebe",
      category: "cleaning",
      priority: "low",
      budget: 150,
      status: "open",
      createdAt: new Date(Date.now() - 15 * 60 * 1000),
      requestedBy: "David K."
    }
  ];

  const handleClaimJob = (jobId: string) => {
    setClaimedJobs([...claimedJobs, jobId]);
  };

  const handleClaimResidentJob = (jobId: string) => {
    setClaimedResidentJobs([...claimedResidentJobs, jobId]);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-warning text-warning-foreground";
      case "low": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "storm-prep": return <Droplets className="w-4 h-4" />;
      case "energy": return <Zap className="w-4 h-4" />;
      case "maintenance": return <Users className="w-4 h-4" />;
      case "waste": return <AlertTriangle className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  const getResidentCategoryIcon = (category: string) => {
    switch (category) {
      case "maintenance": return <Users className="w-4 h-4" />;
      case "cleaning": return <Home className="w-4 h-4" />;
      case "repair": return <AlertTriangle className="w-4 h-4" />;
      case "other": return <MapPin className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-surface pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Gig Worker Dashboard
          </h1>
          <p className="text-muted-foreground">
            Find meaningful work that helps build Sydney's resilient future
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Today's Earnings"
            value="$145"
            subtitle="3 jobs completed"
            icon={<DollarSign className="w-4 h-4" />}
            trend="up"
            trendValue="+$45"
            variant="success"
          />
          
          <MetricCard
            title="Available Jobs"
            value="24"
            subtitle="High demand in CBD"
            icon={<MapPin className="w-4 h-4" />}
            trend="up"
            trendValue="+18"
            variant="accent"
          />
          
          <MetricCard
            title="Skill Level"
            value="4.8"
            subtitle="★ Community rating"
            icon={<Star className="w-4 h-4" />}
            trend="up"
            trendValue="+0.2"
          />
          
          <MetricCard
            title="This Week"
            value="12"
            subtitle="Jobs completed"
            icon={<CheckCircle className="w-4 h-4" />}
            trend="up"
            trendValue="+3"
            variant="success"
          />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Job List/Map */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Available Jobs
                  </CardTitle>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    List
                  </Button>
                  <Button 
                    variant={viewMode === "map" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("map")}
                  >
                    Map
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="system" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="system">System Jobs</TabsTrigger>
                  <TabsTrigger value="resident">Resident Requests</TabsTrigger>
                </TabsList>
                
                <TabsContent value="system" className="mt-4">
                  {viewMode === "list" ? (
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {jobs.map((job) => (
                        <div key={job.id} className="border border-border rounded-lg p-4 hover:shadow-card transition-smooth">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {getCategoryIcon(job.category)}
                                <h3 className="font-semibold text-foreground">{job.title}</h3>
                                <Badge className={getPriorityColor(job.priority)}>
                                  {job.priority}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {job.duration}
                                </span>
                                <span className="flex items-center gap-1 text-success font-medium">
                                  <DollarSign className="w-3 h-3" />
                                  ${job.payment}
                                </span>
                              </div>
                            </div>
                            
                            {claimedJobs.includes(job.id) ? (
                              <Button variant="outline" disabled className="ml-4">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Claimed
                              </Button>
                            ) : (
                              <Button 
                                onClick={() => handleClaimJob(job.id)}
                                className="ml-4 shadow-glow"
                              >
                                Claim Job
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-border overflow-hidden">
                      {/* Dummy Job Map */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                        {/* Sydney CBD */}
                        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">CBD</span>
                        </div>
                        
                        {/* Job markers */}
                        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-destructive rounded-full animate-pulse shadow-lg flex items-center justify-center">
                          <Droplets className="w-2 h-2 text-white" />
                        </div>
                        
                        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-destructive rounded-full animate-pulse shadow-lg flex items-center justify-center">
                          <Zap className="w-2 h-2 text-white" />
                        </div>
                        
                        <div className="absolute bottom-1/3 left-2/3 w-4 h-4 bg-destructive rounded-full animate-pulse shadow-lg flex items-center justify-center">
                          <Droplets className="w-2 h-2 text-white" />
                        </div>
                        
                        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-warning rounded-full animate-pulse shadow-lg flex items-center justify-center">
                          <Zap className="w-2 h-2 text-white" />
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-warning rounded-full animate-pulse shadow-lg flex items-center justify-center">
                          <Users className="w-2 h-2 text-white" />
                        </div>
                        
                        {/* Low priority jobs */}
                        <div className="absolute top-1/6 right-1/4 w-3 h-3 bg-muted-foreground rounded-full"></div>
                        <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-muted-foreground rounded-full"></div>
                        <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-muted-foreground rounded-full"></div>
                        
                        {/* Grid lines */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="w-full h-px bg-gray-300 absolute top-1/4"></div>
                          <div className="w-full h-px bg-gray-300 absolute top-1/2"></div>
                          <div className="w-full h-px bg-gray-300 absolute top-3/4"></div>
                          <div className="h-full w-px bg-gray-300 absolute left-1/4"></div>
                          <div className="h-full w-px bg-gray-300 absolute left-1/2"></div>
                          <div className="h-full w-px bg-gray-300 absolute left-3/4"></div>
                        </div>
                      </div>
                      
                      {/* Legend */}
                      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 text-xs shadow-lg">
                        <div className="font-medium mb-2">Job Priorities</div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-destructive rounded-full"></div>
                            <span>High Priority</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-warning rounded-full"></div>
                            <span>Medium Priority</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                            <span>Low Priority</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <div className="text-sm font-medium text-foreground">Available Jobs</div>
                        <div className="text-2xl font-bold text-primary">24</div>
                        <div className="text-xs text-muted-foreground">
                          {jobs.filter(job => job.priority === 'high').length} high priority
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="resident" className="mt-4">
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {residentJobRequests.map((job) => (
                      <div key={job.id} className="border border-border rounded-lg p-4 hover:shadow-card transition-smooth">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {getResidentCategoryIcon(job.category)}
                              <h3 className="font-semibold text-foreground">{job.title}</h3>
                              <Badge className={getPriorityColor(job.priority)}>
                                {job.priority}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {job.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{job.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {job.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                              </span>
                              <span className="flex items-center gap-1 text-success font-medium">
                                <DollarSign className="w-3 h-3" />
                                ${job.budget}
                              </span>

                            </div>
                            {job.claimedBy && (
                              <div className="mt-2 text-sm text-accent">
                                <CheckCircle className="w-4 h-4 inline mr-1" />
                                Claimed by {job.claimedBy}
                              </div>
                            )}
                          </div>
                          
                          {job.status === "claimed" ? (
                            <Button variant="outline" disabled className="ml-4">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Already Claimed
                            </Button>
                          ) : claimedResidentJobs.includes(job.id) ? (
                            <Button variant="outline" disabled className="ml-4">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Claimed by You
                            </Button>
                          ) : (
                            <Button 
                              onClick={() => handleClaimResidentJob(job.id)}
                              className="ml-4 shadow-glow"
                            >
                              Claim Job
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Skills & Tools */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Skills & Tools
              </CardTitle>
              <CardDescription>
                Unlock higher-paying opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Basic Maintenance</span>
                  <Badge variant="secondary">Certified</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">IoT Sensor Tech</span>
                  <Button variant="outline" size="sm">
                    Take Course
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Solar Specialist</span>
                  <Button variant="outline" size="sm">
                    Start Learning
                  </Button>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-medium mb-3">Advanced Certifications</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium text-foreground">Green Infrastructure Specialist</span>
                      <p className="text-xs text-muted-foreground">Advanced course in sustainable urban systems</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enroll
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium text-foreground">Renewable Energy Technician</span>
                      <p className="text-xs text-muted-foreground">Solar, wind, and battery maintenance</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enroll
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium text-foreground">Smart City IoT Operator</span>
                      <p className="text-xs text-muted-foreground">Sensor networks and data collection</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enroll
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-warning" />
                    <span className="text-sm font-medium">Certification Benefits</span>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>• 15-25% higher hourly rates</div>
                    <div>• Priority access to premium contracts</div>
                    <div>• Exclusive access to specialized projects</div>
                  </div>
                </div>
              </div>

              <Button className="w-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contract Opportunities */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Contract Opportunities</CardTitle>
              <CardDescription>Long-term gig work contracts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-3 hover:shadow-card transition-smooth">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-foreground">Lawn Maintenance</h4>
                    <Badge variant="secondary">8 weeks</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Weekly lawn mowing and garden maintenance</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Location: Enmore Park</span>
                    <span className="font-semibold text-success">$120/week</span>
                  </div>
                  <Button size="sm" className="w-full mt-3">
                    Apply for Contract
                  </Button>
                </div>

                <div className="border border-border rounded-lg p-3 hover:shadow-card transition-smooth">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-foreground">Solar Panel Cleaning</h4>
                    <Badge variant="secondary">12 weeks</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Bi-weekly cleaning of residential solar panels</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Location: Surry Hills</span>
                    <span className="font-semibold text-success">$200/visit</span>
                  </div>
                  <Button size="sm" className="w-full mt-3">
                    Apply for Contract
                  </Button>
                </div>

                <div className="border border-border rounded-lg p-3 hover:shadow-card transition-smooth">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-foreground">E-bike Fleet Management</h4>
                    <Badge variant="secondary">Ongoing</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Daily rebalancing and maintenance of e-bike stations</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Location: CBD</span>
                    <span className="font-semibold text-success">$150/day</span>
                  </div>
                  <Button size="sm" className="w-full mt-3">
                    Apply for Contract
                  </Button>
                </div>

                <Button variant="outline" className="w-full mt-4">
                  View All Contracts
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Earnings Breakdown</CardTitle>
              <CardDescription>Weekly performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Base Jobs</span>
                  <span className="font-semibold">$280</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Priority Bonus</span>
                  <span className="font-semibold text-success">+$85</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Skill Premium</span>
                  <span className="font-semibold text-accent">+$45</span>
                </div>
                <div className="border-t border-border pt-2">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total This Week</span>
                    <span className="text-lg text-primary">$410</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GigWorker;