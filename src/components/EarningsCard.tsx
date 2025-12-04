import { TrendingUp, IndianRupee, Calendar, ArrowUpRight } from "lucide-react";

const EarningsCard = () => {
  const lastMonthEarnings = 12450;
  const totalEarnings = 45680;
  const tasksCompleted = 156;

  return (
    <div className="gradient-card rounded-xl p-6 shadow-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Earnings Overview</h3>
        <div className="flex items-center gap-1 text-success text-sm">
          <TrendingUp className="w-4 h-4" />
          <span>+18%</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Calendar className="w-4 h-4" />
            Last Month (November 2025)
          </div>
          <div className="flex items-baseline gap-1">
            <IndianRupee className="w-6 h-6 text-primary" />
            <span className="text-3xl font-bold text-gradient-gold">{lastMonthEarnings.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-secondary/50 border border-border">
            <p className="text-xs text-muted-foreground mb-1">Total Earnings</p>
            <div className="flex items-center gap-1">
              <IndianRupee className="w-4 h-4 text-foreground" />
              <span className="text-lg font-semibold text-foreground">{totalEarnings.toLocaleString('en-IN')}</span>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-secondary/50 border border-border">
            <p className="text-xs text-muted-foreground mb-1">Tasks Completed</p>
            <div className="flex items-center gap-1">
              <span className="text-lg font-semibold text-foreground">{tasksCompleted}</span>
              <ArrowUpRight className="w-4 h-4 text-success" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsCard;
