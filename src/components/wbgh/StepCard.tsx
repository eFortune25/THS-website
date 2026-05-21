import { LucideIcon } from "lucide-react";

interface StepCardProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export function StepCard({ number, icon: Icon, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center mb-4">
          <Icon className="h-10 w-10 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center">
          <span className="text-sm font-bold text-blue-700">{number}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
