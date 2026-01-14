import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { ImageWithFallback } from "../components/figma/ImageWithFallback"
import { Breadcrumb } from "../components/Breadcrumb"
import { useRouter } from "../components/Router"
import { 
  PlayCircle, Clock, Users, Star, Download, BookOpen, CheckCircle,
  ArrowLeft, Volume2, Settings, Maximize, SkipBack, SkipForward,
  Pause, MessageSquare, ThumbsUp, Share2, Bookmark
} from "lucide-react"

const videoData = {
  id: 1,
  title: "Kỹ thuật trả lời câu hỏi phỏng vấn hành vi (Behavioral Interview)",
  description: "Học cách sử dụng phương pháp STAR để trả lời hiệu quả các câu hỏi về hành vi và kinh nghiệm trong phỏng vấn",
  duration: "18:32",
  instructor: "Mai Anh Tuấn",
  level: "Trung bình",
  views: "2.3k",
  likes: 189,
  completionRate: 65,
  transcript: `
Xin chào các bạn, tôi là Mai Anh Tuấn. Hôm nay chúng ta sẽ cùng tìm hiểu về kỹ thuật trả lời câu hỏi phỏng vấn hành vi.

Câu hỏi hành vi là gì? Đây là những câu hỏi yêu cầu bạn kể về các tình huống cụ thể từ kinh nghiệm của mình để chứng minh các kỹ năng và phẩm chất.

Phương pháp STAR:
- Situation (Tình huống): Mô tả bối cảnh cụ thể
- Task (Nhiệm vụ): Giải thích trách nhiệm của bạn
- Action (Hành động): Những gì bạn đã làm
- Result (Kết quả): Thành quả đạt được

Ví dụ thực tế: "Kể về lần bạn phải làm việc dưới áp lực"

Situation: Dự án quan trọng bị delay 2 tuần do khách hàng thay đổi yêu cầu
Task: Tôi cần điều chỉnh kế hoạch và đảm bảo deadline mới
Action: Tôi tổ chức meeting khẩn, phân tích lại scope, redistribute công việc
Result: Hoàn thành đúng hạn, khách hàng hài lòng, team học được kinh nghiệm quý báu

Lưu ý quan trọng:
1. Chọn ví dụ phù hợp với vị trí ứng tuyển
2. Tập trung vào vai trò của bạn, không phải team
3. Kết thúc bằng bài học hoặc insight
4. Luyện tập trước để trả lời tự nhiên

Cảm ơn các bạn đã theo dõi!
  `
}

const relatedVideos = [
  {
    id: 2,
    title: "Cách trả lời câu hỏi về điểm mạnh và điểm yếu",
    duration: "12:45",
    views: "1.8k",
    thumbnail: "https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVydmlldyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5NjgwNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Xử lý câu hỏi khó trong phỏng vấn",
    duration: "15:20",
    views: "1.5k",
    thumbnail: "https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVydmlldyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5NjgwNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Ngôn ngữ cơ thể trong phỏng vấn",
    duration: "10:15",
    views: "2.1k",
    thumbnail: "https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVydmlldyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5NjgwNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
]

const comments = [
  {
    id: 1,
    author: "Nguyễn Văn A",
    content: "Video rất hay! Phương pháp STAR thật sự hiệu quả. Em đã áp dụng và pass được 2 vòng phỏng vấn rồi ạ. Cảm ơn thầy!",
    timestamp: "2 ngày trước",
    likes: 12,
    hasLiked: false
  },
  {
    id: 2,
    author: "Trần Thị B",
    content: "Có thể làm video về cách trả lời câu hỏi technical không ạ? Em đang chuẩn bị phỏng vấn dev.",
    timestamp: "1 ngày trước",
    likes: 8,
    hasLiked: true
  },
  {
    id: 3,
    author: "Lê Minh C", 
    content: "Ví dụ trong video rất thực tế. Em sẽ luyện tập theo template này. Thanks!",
    timestamp: "12 giờ trước",
    likes: 5,
    hasLiked: false
  }
]

export function InterviewVideoPage() {
  const { navigateTo } = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 mx-auto py-6">
        <Breadcrumb 
          items={[
            { label: "Hướng Dẫn Phỏng Vấn", page: "interview-guides" },
            { label: videoData.title }
          ]} 
        />

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Video Content */}
          <div className="lg:col-span-3 space-y-6">
            <Button 
              variant="ghost" 
              onClick={() => navigateTo('interview-guides')}
              className="p-0 h-auto text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại khóa học
            </Button>

            {/* Video Player */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-black rounded-lg relative overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVydmlldyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5NjgwNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                      <PlayCircle className="w-10 h-10 text-green-600" />
                    </div>
                  </div>

                  {/* Video Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center space-x-4 text-white">
                      <Button variant="ghost" size="sm" className="text-white hover:text-white">
                        <SkipBack className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:text-white">
                        <Pause className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:text-white">
                        <SkipForward className="w-4 h-4" />
                      </Button>
                      
                      <div className="flex-1 mx-4">
                        <Progress value={videoData.completionRate} className="h-1 bg-white/20" />
                      </div>

                      <span className="text-sm">12:45 / {videoData.duration}</span>
                      
                      <Button variant="ghost" size="sm" className="text-white hover:text-white">
                        <Volume2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:text-white">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:text-white">
                        <Maximize className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-2xl mb-2">{videoData.title}</h1>
                  <p className="text-muted-foreground mb-4">{videoData.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{videoData.views} lượt xem</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{videoData.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>4.8 (156 đánh giá)</span>
                    </div>
                    <Badge variant={
                      videoData.level === "Cơ bản" ? "secondary" :
                      videoData.level === "Trung bình" ? "default" : "destructive"
                    }>
                      {videoData.level}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    {videoData.likes}
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Chia sẻ
                  </Button>
                  <Button variant="outline">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Lưu
                  </Button>
                </div>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Tải tài liệu
                </Button>
              </div>

              {/* Instructor Info */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-medium">MA</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{videoData.instructor}</h4>
                      <p className="text-sm text-muted-foreground">
                        Senior HR Consultant với 8+ năm kinh nghiệm tuyển dụng
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Theo dõi
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="transcript" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="transcript">Transcript</TabsTrigger>
                <TabsTrigger value="notes">Ghi chú</TabsTrigger>
                <TabsTrigger value="resources">Tài liệu</TabsTrigger>
              </TabsList>

              <TabsContent value="transcript" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Nội dung bài học</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <div className="whitespace-pre-line text-sm leading-relaxed">
                        {videoData.transcript}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ghi chú của bạn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <textarea 
                        className="w-full h-32 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Viết ghi chú cho video này..."
                      />
                      <Button>Lưu ghi chú</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tài liệu tham khảo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <div>
                          <h4 className="font-medium">STAR Method Template</h4>
                          <p className="text-sm text-muted-foreground">Template để luyện tập phương pháp STAR</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Tải về
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="w-5 h-5 text-green-600" />
                        <div>
                          <h4 className="font-medium">100 Câu hỏi phỏng vấn hành vi</h4>
                          <p className="text-sm text-muted-foreground">Danh sách câu hỏi thường gặp</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Tải về
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Comments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Bình luận ({comments.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add Comment */}
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm">YU</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <textarea 
                      className="w-full h-20 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Viết bình luận..."
                    />
                    <Button size="sm">Gửi bình luận</Button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm text-blue-600">{comment.author.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-sm">{comment.author}</h4>
                            <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                          </div>
                          <p className="text-sm">{comment.content}</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                          <button 
                            className={`flex items-center space-x-1 hover:text-blue-500 ${
                              comment.hasLiked ? 'text-blue-500' : ''
                            }`}
                          >
                            <ThumbsUp className="w-3 h-3" />
                            <span>{comment.likes}</span>
                          </button>
                          <button className="hover:text-blue-500">Trả lời</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tiến độ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Đã hoàn thành</span>
                    <span>{videoData.completionRate}%</span>
                  </div>
                  <Progress value={videoData.completionRate} className="h-2" />
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Đã xem 12:45 / {videoData.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Videos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Video liên quan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedVideos.map((video) => (
                  <div key={video.id} className="flex space-x-3 cursor-pointer hover:bg-accent p-2 rounded-lg transition-colors">
                    <div className="w-20 h-14 relative rounded overflow-hidden">
                      <ImageWithFallback
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <PlayCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium leading-tight mb-1">{video.title}</h4>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{video.duration}</span>
                        <span>•</span>
                        <span>{video.views} views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Thao tác nhanh</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  Luyện tập với Mock Interview
                </Button>
                <Button className="w-full" variant="outline">
                  Xem câu hỏi liên quan
                </Button>
                <Button className="w-full" variant="outline">
                  Chia sẻ với bạn bè
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}