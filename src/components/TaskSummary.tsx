import { CheckCircle2, IndianRupee, ListTodo, Wallet } from "lucide-react";

const TaskSummary = () => {
  const tasks = [
    { label: "Completed Tasks", value: 0, icon: CheckCircle2, color: "text-success" },
    { label: "This Month Salary", value: "₹0", icon: Wallet, color: "text-primary", isText: true },
    { label: "Total Tasks", value: 0, icon: ListTodo, color: "text-foreground" },
  ];

  return (
    <div className="gradient-card rounded-xl p-6 shadow-card border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">Task Summary</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {tasks.map((task, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors ${index === 2 ? 'col-span-2' : ''}`}
          >
            <task.icon className={`w-5 h-5 ${task.color} mb-2`} />
            <p className="text-2xl font-bold text-foreground">{task.value}</p>
            <p className="text-xs text-muted-foreground">{task.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/30">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Monthly Progress</span>
          <span className="text-primary font-medium">0 Tasks</span>
        </div>
        <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-[0%] gradient-gold rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;
