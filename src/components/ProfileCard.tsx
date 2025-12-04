import { User, MapPin, Building2, CreditCard } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="gradient-card rounded-xl p-6 shadow-card border border-border">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center shadow-gold">
          <User className="w-8 h-8 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-foreground">Vaibhav Singh</h2>
          <p className="text-muted-foreground text-sm">Digital Operations Worker</p>
          <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/20 text-success text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
            Active
          </div>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2 text-sm">
          <User className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Age:</span>
          <span className="text-foreground font-medium">30 Years</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <User className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Gender:</span>
          <span className="text-foreground font-medium">Male</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">State:</span>
          <span className="text-foreground font-medium">Uttar Pradesh</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Country:</span>
          <span className="text-foreground font-medium">India</span>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border">
        <div className="flex items-center gap-2 mb-2">
          <Building2 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Bank Details</span>
        </div>
        <p className="text-sm text-muted-foreground">Punjab National Bank</p>
        <div className="mt-2 flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">UPI ID:</span>
          <span className="text-sm text-primary">9936489424@ptyes</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
