import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, TrendingUp, Users, Shield, Award, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BarChart3,
      title: "Role-Specific KPIs",
      description: "Quantifiable metrics tailored for HQ Admin and Field Technical staff",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Dashboards",
      description: "Monitor individual, team, and organizational productivity instantly",
    },
    {
      icon: Award,
      title: "Gamification System",
      description: "Motivate top performers with achievement badges and recognition",
    },
    {
      icon: Shield,
      title: "Probation Support",
      description: "Structured communication channel for underperforming employees",
    },
    {
      icon: Users,
      title: "Team Analytics",
      description: "Track team performance, milestones, and bottlenecks",
    },
    {
      icon: Trophy,
      title: "Fair Evaluation",
      description: "Data-driven assessments replacing subjective APAR systems",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <Trophy className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            e-Office Performance Management System
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A transparent, data-driven productivity tracking system for government offices.
            Quantify performance with role-specific KPIs, real-time dashboards, and scientific evaluation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/auth")} className="text-lg px-8">
              Login / Sign Up
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Transparent Evaluation</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-success mb-2">Real-Time</div>
              <p className="text-muted-foreground">Performance Tracking</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-warning mb-2">Scientific</div>
              <p className="text-muted-foreground">Data-Driven Insights</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Comprehensive Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform performance management in your organization
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-primary text-primary-foreground max-w-4xl mx-auto">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Replace subjective appraisals with objective, data-driven performance management
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/auth")}
              className="text-lg px-8"
            >
              Get Started Now
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2024 e-Office Performance Management System. Government of India.</p>
      </footer>
    </div>
  );
};

export default Index;
