
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: string;
  instructor: string;
}

const CourseCard = ({ image, title, description, level, duration, price, instructor }: CourseCardProps) => {
  let levelColor = "bg-green-100 text-green-800";
  
  if (level === 'Intermediate') {
    levelColor = "bg-blue-100 text-blue-800";
  } else if (level === 'Advanced') {
    levelColor = "bg-purple-100 text-purple-800";
  }

  return (
    <Card className="overflow-hidden h-full card-hover">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge className={levelColor}>
            {level}
          </Badge>
          <div className="text-sm font-medium">{duration}</div>
        </div>
        <h3 className="font-semibold text-lg line-clamp-2 hover:text-av-purple transition-colors">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-av-gray text-sm line-clamp-2">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col space-y-3">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm text-av-gray">by {instructor}</span>
          <span className="font-bold text-av-blue">{price}</span>
        </div>
        <Button className="w-full bg-av-purple hover:bg-av-purple-dark">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
