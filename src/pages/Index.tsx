import ScheduleTable from "@/components/ScheduleTable";
import GroupCard from "@/components/GroupCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const groups = [
    { id: "1", name: "ИС-21-1", studentsCount: 28, course: 3 },
    { id: "2", name: "ПИ-22-1", studentsCount: 25, course: 2 },
    { id: "3", name: "КТ-23-1", studentsCount: 22, course: 1 },
    { id: "4", name: "ИБ-21-2", studentsCount: 26, course: 3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Icon name="Calendar" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Расписание колледжа
                </h1>
                <p className="text-sm text-gray-600">
                  Управление учебным процессом
                </p>
              </div>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-blue-600 font-medium">
                Главная
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Расписание
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Группы
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Преподаватели
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Icon name="Users" size={24} className="text-blue-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-sm text-gray-600">Групп</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Icon
                  name="GraduationCap"
                  size={24}
                  className="text-green-500"
                />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">312</p>
                  <p className="text-sm text-gray-600">Студентов</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Icon name="BookOpen" size={24} className="text-purple-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">45</p>
                  <p className="text-sm text-gray-600">Предметов</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Icon name="User" size={24} className="text-orange-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">28</p>
                  <p className="text-sm text-gray-600">Преподавателей</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Groups Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Users" size={20} />
              <span>Группы</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {groups.map((group) => (
                <GroupCard key={group.id} group={group} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Calendar" size={20} />
              <span>Расписание на сегодня</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScheduleTable />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
