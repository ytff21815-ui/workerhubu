import { Gift, AlertCircle, IndianRupee, Clock, ShieldCheck } from "lucide-react";

const BonusCard = () => {
  return (
    <div className="gradient-card rounded-xl p-6 shadow-card border border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-warning/10 rounded-full blur-3xl"></div>
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
            <Gift className="w-6 h-6 text-warning" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Bonus Reward</h3>
            <div className="flex items-center gap-1 text-warning text-xs">
              <Clock className="w-3 h-3" />
              <span>Pending</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-warning/10 border border-warning/30 mb-4">
          <div className="flex items-baseline gap-1 mb-2">
            <IndianRupee className="w-8 h-8 text-warning" />
            <span className="text-4xl font-bold text-warning">5,000</span>
          </div>
          <p className="text-sm text-warning/80">Joining Bonus Reward</p>
        </div>

        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-1">KYC Verification Required</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This bonus of ₹5,000 will be credited to your UPI ID <span className="text-primary font-medium">9936489424@ptyes</span> once your KYC is approved.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <AlertCircle className="w-3 h-3" />
          <span>Complete KYC to unlock your bonus reward</span>
        </div>
      </div>
    </div>
  );
};

export default BonusCard;
