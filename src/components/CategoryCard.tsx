
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const CategoryCard = ({ title, description, icon, color }: CategoryCardProps) => {
  return (
    <div>
      <Card className="h-full w-full card-hover border-t-4" style={{ borderTopColor: color }}>
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4" style={{ backgroundColor: `${color}20` }}>
            <div style={{ color: color }}>{icon}</div>
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-av-gray text-lg">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryCard;
