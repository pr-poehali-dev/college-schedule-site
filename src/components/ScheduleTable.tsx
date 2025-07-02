import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ScheduleTable = () => {
  const scheduleData = [
    {
      time: "08:30 - 10:00",
      subject: "Математика",
      teacher: "Иванов А.П.",
      room: "101",
      group: "ИС-21-1",
      type: "лекция",
    },
    {
      time: "10:10 - 11:40",
      subject: "Программирование",
      teacher: "Петрова М.С.",
      room: "205",
      group: "ПИ-22-1",
      type: "практика",
    },
    {
      time: "11:50 - 13:20",
      subject: "Базы данных",
      teacher: "Сидоров В.И.",
      room: "303",
      group: "ИС-21-1",
      type: "лабораторная",
    },
    {
      time: "13:30 - 15:00",
      subject: "Веб-разработка",
      teacher: "Козлова Е.А.",
      room: "201",
      group: "ПИ-22-1",
      type: "практика",
    },
    {
      time: "15:10 - 16:40",
      subject: "Английский язык",
      teacher: "Смирнова О.Н.",
      room: "108",
      group: "КТ-23-1",
      type: "практика",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "лекция":
        return "bg-blue-100 text-blue-800";
      case "практика":
        return "bg-green-100 text-green-800";
      case "лабораторная":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px]">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Время</span>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center space-x-2">
                <Icon name="BookOpen" size={16} />
                <span>Предмет</span>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center space-x-2">
                <Icon name="User" size={16} />
                <span>Преподаватель</span>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Кабинет</span>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>Группа</span>
              </div>
            </TableHead>
            <TableHead>Тип</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scheduleData.map((item, index) => (
            <TableRow key={index} className="hover:bg-gray-50">
              <TableCell className="font-medium text-gray-900">
                {item.time}
              </TableCell>
              <TableCell className="font-semibold text-gray-900">
                {item.subject}
              </TableCell>
              <TableCell className="text-gray-700">{item.teacher}</TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-gray-50">
                  {item.room}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  {item.group}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge className={getTypeColor(item.type)}>{item.type}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ScheduleTable;
