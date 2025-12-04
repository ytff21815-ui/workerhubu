import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";

const WelcomeCard = () => {
  return (
    <div className="gradient-card rounded-xl p-6 shadow-card border border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-gold">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Welcome to Digital Hub!</h3>
            <p className="text-sm text-muted-foreground">Let's get you started</p>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-secondary/50 border border-border mb-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MessageCircle className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-2">How to Start Working?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Agent Sir</span> will guide you and tell you what tasks to do. Follow the instructions provided by your agent to complete tasks and earn money.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowRight className="w-4 h-4 text-primary" />
            <span>Wait for instructions from <span className="text-primary font-medium">Agent Sir</span></span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowRight className="w-4 h-4 text-primary" />
            <span>Complete assigned tasks on time</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowRight className="w-4 h-4 text-primary" />
            <span>Earn money directly to your UPI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
