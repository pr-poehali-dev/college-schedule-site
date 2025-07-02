import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Group {
  id: string;
  name: string;
  studentsCount: number;
  course: number;
}

interface GroupCardProps {
  group: Group;
}

const GroupCard = ({ group }: GroupCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-lg text-gray-900">{group.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
            {group.course} курс
          </span>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <Icon name="Users" size={16} className="mr-2" />
          <span>{group.studentsCount} студентов</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupCard;
