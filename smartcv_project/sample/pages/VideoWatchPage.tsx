import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { ImageWithFallback } from "../components/figma/ImageWithFallback"
import { Breadcrumb } from "../components/Breadcrumb"
import { useRouter } from "../components/Router"
import { 
  PlayCircle, Clock, Users, Star, Download, BookOpen, CheckCircle,
  ArrowLeft, Volume2, Settings, Maximize, SkipBack, SkipForward,
  Pause, MessageSquare, ThumbsUp, Share2, Bookmark, Eye,
  ChevronUp, ChevronDown, List, FileText, NotebookPen
} from "lucide-react"
import { useState } from "react"

const currentVideo = {
  id: 3,
  title: "Trình bày kinh nghiệm làm việc - Kỹ thuật STAR",
  description: "Học cách sử dụng phương pháp STAR để mô tả kinh nghiệm làm việc một cách ấn tượng và thuyết phục",
  duration: "18:20",
  instructor: "Nguyễn Minh Tuấn",
  level: "Trung bình",
  views: "1.5k",
  likes: 127,
  industry: "it",
  industryName: "Công Nghệ Thông Tin",
  completionRate: 0,
  chapters: [
    { id: 1, title: "Giới thiệu về phương pháp STAR", startTime: "0:00", duration: "3:20", completed: true },
    { id: 2, title: "S - Situation (Tình huống)", startTime: "3:20", duration: "4:15", completed: true },
    { id: 3, title: "T - Task (Nhiệm vụ)", startTime: "7:35", duration: "2:50", completed: false },
    { id: 4, title: "A - Action (Hành động)", startTime: "10:25", duration: "4:10", completed: false },
    { id: 5, title: "R - Result (Kết quả)", startTime: "14:35", duration: "3:45", completed: false }
  ],
  transcript: `
Xin chào các bạn, tôi là Nguyễn Minh Tuấn. Hôm nay chúng ta sẽ tìm hiểu về cách trình bày kinh nghiệm làm việc trong CV sử dụng phương pháp STAR.

## Phương pháp STAR là gì?

STAR là viết tắt của:
- **S**ituation (Tình huống): Mô tả bối cảnh, hoàn cảnh cụ thể
- **T**ask (Nhiệm vụ): Giải thích nhiệm vụ, trách nhiệm của bạn
- **A**ction (Hành động): Những việc cụ thể bạn đã làm
- **R**esult (Kết quả): Thành quả, tác động tích cực đạt được

## Ví dụ thực tế

**Tình huống**: Dự án phát triển ứng dụng mobile của công ty gặp khó khăn về performance, loading time chậm 8-10 giây.

**Nhiệm vụ**: Với vai trò Frontend Developer, tôi được giao nhiệm vụ tối ưu hóa performance và giảm thời gian loading xuống dưới 3 giây.

**Hành động**: 
- Phân tích code và xác định bottleneck chính
- Implement lazy loading cho images và components
- Tối ưu bundle size bằng code splitting
- Cache API responses sử dụng Service Worker
- Compress và optimize assets

**Kết quả**: 
- Giảm loading time từ 8s xuống 2.1s (73% improvement)
- Tăng user engagement lên 35%
- Giảm bounce rate xuống 15%
- Được công nhận "Developer of the Month"

## Lưu ý quan trọng

1. **Định lượng kết quả**: Luôn sử dụng số liệu cụ thể
2. **Tập trung vào bản thân**: Nói về vai trò của bạn, không phải team
3. **Chọn câu chuyện phù hợp**: Liên quan đến vị trí ứng tuyển
4. **Cân bằng độ dài**: Không quá ngắn cũng không quá dài

Cảm ơn các bạn đã theo dõi!
  `
}

const relatedVideos = [
  {
    id: 1,
    title: "Cơ bản về CV - Những điều cần biết",
    duration: "15:30",
    views: "2.1k",
    thumbnail: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Viết mục tiêu nghề nghiệp hiệu quả",
    duration: "12:45",
    views: "1.8k",
    thumbnail: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Skills section - Làm nổi bật năng lực",
    duration: "10:15",
    views: "1.3k",
    thumbnail: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
]

const comments = [
  {
    id: 1,
    author: "Trần Văn A",
    avatar: null,
    content: "Video rất hữu ích! Phương pháp STAR thật sự giúp tôi highlight được kinh nghiệm của mình. Cảm ơn thầy!",
    timestamp: "2 ngày trước",
    likes: 15,
    hasLiked: false,
    replies: [
      {
        id: 11,
        author: "Nguyễn Minh Tuấn",
        avatar: null,
        content: "Cảm ơn bạn! Chúc bạn thành công trong việc tìm kiếm cơ hội mới.",
        timestamp: "1 ngày trước",
        likes: 3,
        hasLiked: false
      }
    ]
  },
  {
    id: 2,
    author: "Lê Thị B",
    avatar: null,
    content: "Có thể làm video về cách viết CV cho người chuyển ngành không ạ? Em đang cần lắm.",
    timestamp: "1 ngày trước",
    likes: 8,
    hasLiked: true,
    replies: []
  }
]

export function VideoWatchPage() {
  const { navigateTo } = useRouter()
  const [currentTime, setCurrentTime] = useState("7:35")
  const [isPlaying, setIsPlaying] = useState(false)
  const [showChapters, setShowChapters] = useState(true)
  const [activeTab, setActiveTab] = useState("transcript")

  const handleTimeUpdate = (time: string) => {
    setCurrentTime(time)
    // Update completion rate based on current time
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 mx-auto py-6">
        <Breadcrumb 
          items={[
            { label: "Video Hướng Dẫn", page: "video-guides" },
            { label: currentVideo.industryName, page: "video-detail", params: { industry: currentVideo.industry } },
            { label: currentVideo.title }
          ]} 
        />

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Video Content */}
          <div className="lg:col-span-3 space-y-6">
            <Button 
              variant="ghost" 
              onClick={() => navigateTo('video-detail', { industry: currentVideo.industry })}
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
                    src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-10 h-10 text-blue-600" />
                      ) : (
                        <PlayCircle className="w-10 h-10 text-blue-600" />
                      )}
                    </button>
                  </div>

                  {/* Video Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="space-y-2">
                      <Progress value={42} className="h-1 bg-white/20" />
                      <div className="flex items-center space-x-4 text-white">
                        <Button variant="ghost" size="sm" className="text-white hover:text-white p-1">
                          <SkipBack className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-white hover:text-white p-1"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-white hover:text-white p-1">
                          <SkipForward className="w-4 h-4" />
                        </Button>
                        
                        <span className="text-sm">{currentTime} / {currentVideo.duration}</span>
                        
                        <div className="flex-1"></div>
                        
                        <Button variant="ghost" size="sm" className="text-white hover:text-white p-1">
                          <Volume2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-white hover:text-white p-1">
                          <Settings className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-white hover:text-white p-1">
                          <Maximize className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-2xl mb-2">{currentVideo.title}</h1>
                  <p className="text-muted-foreground mb-4">{currentVideo.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>{currentVideo.views} lượt xem</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{currentVideo.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>4.8 (89 đánh giá)</span>
                    </div>
                    <Badge variant={
                      currentVideo.level === "Cơ bản" ? "secondary" :
                      currentVideo.level === "Trung bình" ? "default" : "destructive"
                    }>
                      {currentVideo.level}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    {currentVideo.likes}
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
                  Tài liệu
                </Button>
              </div>

              {/* Instructor Info */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>NM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-medium">{currentVideo.instructor}</h4>
                      <p className="text-sm text-muted-foreground">
                        Senior Career Consultant • 5+ năm kinh nghiệm
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
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="transcript">
                  <FileText className="w-4 h-4 mr-2" />
                  Transcript
                </TabsTrigger>
                <TabsTrigger value="notes">
                  <NotebookPen className="w-4 h-4 mr-2" />
                  Ghi chú
                </TabsTrigger>
                <TabsTrigger value="comments">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Bình luận ({comments.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="transcript" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Nội dung bài học</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <div className="whitespace-pre-line text-sm leading-relaxed">
                        {currentVideo.transcript}
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
                        placeholder="Viết ghi chú tại thời điểm 7:35..."
                        defaultValue="Phương pháp STAR:
- Situation: Mô tả tình huống cụ thể
- Task: Nhiệm vụ được giao
- Action: Hành động thực hiện
- Result: Kết quả đạt được (có số liệu)"
                      />
                      <div className="flex justify-between">
                        <div className="text-sm text-muted-foreground">
                          Ghi chú tại: {currentTime}
                        </div>
                        <Button size="sm">Lưu ghi chú</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comments" className="space-y-6">
                {/* Add Comment */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarFallback>YU</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-3">
                        <textarea 
                          className="w-full h-20 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Chia sẻ suy nghĩ của bạn..."
                        />
                        <Button size="sm">Gửi bình luận</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <Card key={comment.id}>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex space-x-4">
                            <Avatar>
                              <AvatarFallback>
                                {comment.author.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium">{comment.author}</h4>
                                <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
                              </div>
                              <p className="text-sm mb-3">{comment.content}</p>
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
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

                          {/* Replies */}
                          {comment.replies && comment.replies.length > 0 && (
                            <div className="ml-12 space-y-3 border-l-2 border-gray-100 pl-4">
                              {comment.replies.map((reply) => (
                                <div key={reply.id} className="flex space-x-3">
                                  <Avatar className="w-8 h-8">
                                    <AvatarFallback className="text-xs">
                                      {reply.author.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                      <h5 className="text-sm font-medium">{reply.author}</h5>
                                      <span className="text-xs text-muted-foreground">{reply.timestamp}</span>
                                    </div>
                                    <p className="text-sm mb-2">{reply.content}</p>
                                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                                      <button className="flex items-center space-x-1 hover:text-blue-500">
                                        <ThumbsUp className="w-3 h-3" />
                                        <span>{reply.likes}</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
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
                    <span>Đã xem</span>
                    <span>42%</span>
                  </div>
                  <Progress value={42} className="h-2" />
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Đã xem {currentTime} / {currentVideo.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chapters */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <List className="w-5 h-5 mr-2" />
                    Mục lục
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowChapters(!showChapters)}
                  >
                    {showChapters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {showChapters && (
                <CardContent className="space-y-2">
                  {currentVideo.chapters.map((chapter, index) => (
                    <div 
                      key={chapter.id} 
                      className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
                        index === 2 ? 'bg-blue-50 border border-blue-200' : 'hover:bg-accent'
                      }`}
                      onClick={() => handleTimeUpdate(chapter.startTime)}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        chapter.completed ? 'bg-green-500 text-white' : 
                        index === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                      }`}>
                        {chapter.completed ? <CheckCircle className="w-3 h-3" /> : index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{chapter.title}</h4>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{chapter.startTime}</span>
                          <span>•</span>
                          <span>{chapter.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>

            {/* Related Videos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Video tiếp theo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedVideos.map((video) => (
                  <div 
                    key={video.id} 
                    className="flex space-x-3 cursor-pointer hover:bg-accent p-2 rounded-lg transition-colors"
                    onClick={() => navigateTo('video-watch', { videoId: video.id, industry: currentVideo.industry })}
                  >
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
                  <Download className="w-4 h-4 mr-2" />
                  Template STAR
                </Button>
                <Button className="w-full" variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Bài tập thực hành
                </Button>
                <Button className="w-full" variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Chia sẻ video
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}