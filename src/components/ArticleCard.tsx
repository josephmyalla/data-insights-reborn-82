
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  image: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
}

const ArticleCard = ({ image, title, excerpt, category, author, date }: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-av-purple bg-opacity-10 text-av-purple border-av-purple">
            {category}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg line-clamp-2 hover:text-av-purple transition-colors">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-av-gray text-sm line-clamp-2">
          {excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 text-xs text-av-gray flex items-center justify-between">
        <span>{author}</span>
        <span>{date}</span>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
