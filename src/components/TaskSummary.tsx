import { CheckCircle2, Clock, ListTodo, Target } from "lucide-react";

const TaskSummary = () => {
  const tasks = [
    { label: "Completed Tasks", value: 156, icon: CheckCircle2, color: "text-success" },
    { label: "Pending Tasks", value: 8, icon: Clock, color: "text-warning" },
    { label: "Today's Target", value: 10, icon: Target, color: "text-primary" },
    { label: "Total Tasks", value: 164, icon: ListTodo, color: "text-foreground" },
  ];

  return (
    <div className="gradient-card rounded-xl p-6 shadow-card border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">Task Summary</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {tasks.map((task, index) => (
          <div 
            key={index} 
            className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
          >
            <task.icon className={`w-5 h-5 ${task.color} mb-2`} />
            <p className="text-2xl font-bold text-foreground">{task.value}</p>
            <p className="text-xs text-muted-foreground">{task.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/30">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Daily Progress</span>
          <span className="text-primary font-medium">7/10 Tasks</span>
        </div>
        <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-[70%] gradient-gold rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;
