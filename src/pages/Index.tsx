import { LayoutDashboard, Award } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import EarningsCard from "@/components/EarningsCard";
import BonusCard from "@/components/BonusCard";
import WorkCertificate from "@/components/WorkCertificate";
import TaskSummary from "@/components/TaskSummary";
import WelcomeCard from "@/components/WelcomeCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shadow-gold">
                <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Digital Hub Services</h1>
                <p className="text-xs text-muted-foreground">Worker Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/20 text-success text-sm">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              <span className="hidden sm:inline">Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <ProfileCard />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <EarningsCard />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <TaskSummary />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <WelcomeCard />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <BonusCard />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Work Authorization Certificate</h2>
              </div>
              <WorkCertificate />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-8 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Digital Hub Services Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
