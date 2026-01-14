import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { ImageWithFallback } from "../components/figma/ImageWithFallback"
import { Breadcrumb } from "../components/Breadcrumb"
import { useRouter } from "../components/Router"
import { CheckCircle, ArrowRight, Users, BookOpen, Target, Clock, Star, PlayCircle } from "lucide-react"

const interviewModules = [
  {
    id: 1,
    title: "Chuẩn Bị Trước Phỏng Vấn",
    description: "Nghiên cứu công ty, chuẩn bị câu trả lời và trang phục phù hợp",
    icon: CheckCircle,
    lessons: 5,
    duration: "45 phút",
    level: "Cơ bản",
    completed: 3,
    topics: [
      "Nghiên cứu về công ty và vị trí ứng tuyển",
      "Chuẩn bị câu trả lời cho câu hỏi thường gặp",
      "Lựa chọn trang phục phù hợp",
      "Chuẩn bị tài liệu cần thiết",
      "Lên kế hoạch di chuyển và thời gian"
    ]
  },
  {
    id: 2,
    title: "Kỹ Năng Giao Tiếp",
    description: "Cách trả lời tự tin, ngôn ngữ không lời và xây dựng rapport",
    icon: Users,
    lessons: 4,
    duration: "35 phút",
    level: "Cơ bản",
    completed: 1,
    topics: [
      "Ngôn ngữ cơ thể và tư thế tự tin",
      "Kỹ thuật trả lời câu hỏi hiệu quả",
      "Xây dựng rapport với interviewer",
      "Cách đặt câu hỏi thông minh cho nhà tuyển dụng"
    ]
  },
  {
    id: 3,
    title: "Câu Hỏi Khó & Tình Huống",
    description: "Xử lý câu hỏi bẫy, thương lượng lương và câu hỏi tình huống",
    icon: Target,
    lessons: 6,
    duration: "60 phút",
    level: "Nâng cao",
    completed: 0,
    topics: [
      "Xử lý câu hỏi về điểm yếu",
      "Trả lời câu hỏi tình huống (Behavioral)",
      "Thương lượng lương bổng hiệu quả",
      "Câu hỏi về lý do nghỉ việc",
      "Câu hỏi technical và case study",
      "Xử lý tình huống căng thẳng"
    ]
  },
  {
    id: 4,
    title: "Phỏng Vấn Online",
    description: "Kỹ thuật phỏng vấn qua video call, chuẩn bị thiết bị và môi trường",
    icon: BookOpen,
    lessons: 3,
    duration: "25 phút",
    level: "Trung bình",
    completed: 0,
    topics: [
      "Chuẩn bị thiết bị và kết nối internet",
      "Thiết lập không gian phỏng vấn",
      "Kỹ thuật giao tiếp qua camera"
    ]
  }
]

const tips = [
  {
    title: "Quy tắc 7-38-55",
    description: "7% nội dung, 38% giọng nói, 55% ngôn ngữ cơ thể"
  },
  {
    title: "Kỹ thuật STAR",
    description: "Situation, Task, Action, Result - Cấu trúc trả lời hoàn hảo"
  },
  {
    title: "First Impression",
    description: "Chỉ có 7 giây để tạo ấn tượng đầu tiên tốt"
  },
  {
    title: "Active Listening",
    description: "Lắng nghe tích cực và phản hồi phù hợp"
  }
]

export function InterviewGuidePage() {
  const { navigateTo } = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 mx-auto py-6">
        <Breadcrumb 
          items={[
            { label: "Hướng Dẫn Phỏng Vấn" }
          ]} 
        />

        {/* Header Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <Badge variant="secondary">Khóa Học Phỏng Vấn</Badge>
              </div>
              <h1 className="text-4xl">Hướng Dẫn Phỏng Vấn Thành Công</h1>
              <p className="text-xl text-muted-foreground">
                Từ chuẩn bị đến thực hiện, chúng tôi hướng dẫn bạn mọi bước 
                để tự tin chinh phục nhà tuyển dụng
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>18 bài học</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>3 giờ học</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>1.8k học viên</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>4.9 (156 đánh giá)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Tiến độ học tập</span>
                <span>4/18 bài học (22%)</span>
              </div>
              <Progress value={22} className="h-2" />
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVydmlldyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5NjgwNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Interview guide preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <PlayCircle className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 mb-3">
                  Tiếp Tục Học
                </Button>
                <Button variant="outline" className="w-full">
                  Mock Interview
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">Thống Kê Thành Công</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl text-green-600 mb-1">92%</div>
                  <p className="text-sm text-green-700">Nhận được offer</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-blue-600 mb-1">4.2x</div>
                  <p className="text-sm text-blue-700">Tăng cơ hội được chọn</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="modules" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="modules">Chương Trình Học</TabsTrigger>
            <TabsTrigger value="tips">Tips & Tricks</TabsTrigger>
            <TabsTrigger value="practice">Luyện Tập</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-6">
            <div className="space-y-4">
              {interviewModules.map((module) => (
                <Card key={module.id} className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <module.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl mb-2">{module.title}</h3>
                            <p className="text-muted-foreground mb-3">{module.description}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Badge variant={module.level === "Cơ bản" ? "secondary" : module.level === "Trung bình" ? "default" : "destructive"}>
                              {module.level}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          {module.topics.map((topic, index) => (
                            <div key={index} className="flex items-center space-x-3 text-sm">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                index < module.completed ? 'bg-green-500 text-white' : 'bg-gray-200'
                              }`}>
                                {index < module.completed ? (
                                  <CheckCircle className="w-3 h-3" />
                                ) : (
                                  <span className="text-xs">{index + 1}</span>
                                )}
                              </div>
                              <span className={index < module.completed ? 'line-through text-muted-foreground' : ''}>
                                {topic}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{module.lessons} bài học</span>
                            <span>{module.duration}</span>
                            <span>{module.completed}/{module.lessons} hoàn thành</span>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => navigateTo('interview-video', { moduleId: module.id })}
                          >
                            {module.completed > 0 ? "Tiếp tục" : "Bắt đầu"}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                    <CardDescription>{tip.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-xl">💡 Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">1</div>
                    <p className="text-sm">Đến sớm 10-15 phút để tạo ấn tượng về tính đúng giờ</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">2</div>
                    <p className="text-sm">Mang theo nhiều bản CV in để phòng trường hợp phỏng vấn nhóm</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">3</div>
                    <p className="text-sm">Chuẩn bị 3-5 câu hỏi để hỏi ngược lại nhà tuyển dụng</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">4</div>
                    <p className="text-sm">Follow up sau phỏng vấn trong vòng 24-48 giờ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Mock Interview</CardTitle>
                  <CardDescription>Luyện tập phỏng vấn với AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Bắt Đầu</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Câu Hỏi Flashcard</CardTitle>
                  <CardDescription>Ôn tập câu hỏi thường gặp</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">Luyện Tập</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Video Recording</CardTitle>
                  <CardDescription>Quay video để tự đánh giá</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">Thử Nghiệm</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}