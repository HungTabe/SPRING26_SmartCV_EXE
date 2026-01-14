import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
import { ImageWithFallback } from "../components/figma/ImageWithFallback"
import { useRouter } from "../components/Router"
import { 
  PlayCircle, Clock, Users, Star, Download, CheckCircle,
  ArrowLeft, Volume2, Settings, Maximize, SkipBack, SkipForward,
  Pause, Play, List, ChevronRight, ChevronLeft, RotateCcw
} from "lucide-react"
import { useState, useEffect } from "react"

const defaultVideos = [
  {
    id: 1,
    title: "Cơ bản về CV - Những điều cần biết",
    description: "Tổng quan về cấu trúc CV, các phần quan trọng và nguyên tắc cơ bản",
    duration: "15:30",
    level: "Cơ bản",
    completed: false,
    videoUrl: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Viết mục tiêu nghề nghiệp hiệu quả",
    description: "Cách viết objective/summary thu hút nhà tuyển dụng ngay từ dòng đầu tiên",
    duration: "12:45",
    level: "Cơ bản",
    completed: false,
    videoUrl: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Trình bày kinh nghiệm làm việc",
    description: "Kỹ thuật STAR và cách highlight thành tích nổi bật",
    duration: "18:20",
    level: "Trung bình",
    completed: false,
    videoUrl: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Skills section - Làm nổi bật năng lực",
    description: "Cách liệt kê và đánh giá kỹ năng chuyên môn và kỹ năng mềm",
    duration: "10:15",
    level: "Cơ bản",
    completed: false,
    videoUrl: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "CV cho Fresher - Không có kinh nghiệm?",
    description: "Chiến lược viết CV hiệu quả khi chưa có kinh nghiệm làm việc",
    duration: "22:10",
    level: "Cơ bản",
    completed: false,
    videoUrl: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    title: "CV Senior - Thể hiện leadership",
    description: "Cách viết CV cho vị trí quản lý và leadership role",
    duration: "16:40",
    level: "Nâng cao",
    completed: false,
    videoUrl: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
]

const courseData = {
  it: {
    name: "Công Nghệ Thông Tin",
    totalVideos: 6,
    totalDuration: "2h 15m",
    videos: defaultVideos
  },
  marketing: {
    name: "Marketing & Sales",
    totalVideos: 6,
    totalDuration: "2h 30m",
    videos: defaultVideos.map(video => ({
      ...video,
      title: video.title.replace("CV", "CV Marketing"),
      description: video.description + " cho ngành Marketing & Sales"
    }))
  },
  finance: {
    name: "Tài Chính & Ngân Hàng",
    totalVideos: 6,
    totalDuration: "2h 45m",
    videos: defaultVideos.map(video => ({
      ...video,
      title: video.title.replace("CV", "CV Tài Chính"),
      description: video.description + " cho ngành Tài Chính & Ngân Hàng"
    }))
  },
  design: {
    name: "Thiết Kế & Sáng Tạo",
    totalVideos: 6,
    totalDuration: "2h 20m",
    videos: defaultVideos.map(video => ({
      ...video,
      title: video.title.replace("CV", "CV Thiết Kế"),
      description: video.description + " cho ngành Thiết Kế & Sáng Tạo"
    }))
  },
  all: {
    name: "Tất Cả Ngành Nghề",
    totalVideos: 6,
    totalDuration: "2h 15m",
    videos: defaultVideos
  }
}

export function VideoPlayerPage() {
  const { navigateTo, pageParams } = useRouter()
  const industry = pageParams?.industry || 'it'
  const videoId = pageParams?.videoId ? parseInt(pageParams.videoId) : 1
  
  // Safe access with fallback
  const course = courseData[industry as keyof typeof courseData] || courseData.it
  const currentVideo = course?.videos?.find(v => v.id === videoId) || course?.videos?.[0] || defaultVideos[0]
  const currentIndex = course?.videos?.findIndex(v => v.id === videoId) || 0
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState("0:00")
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(100)
  const [showPlaylist, setShowPlaylist] = useState(true)
  const [autoPlay, setAutoPlay] = useState(true)

  // Simulate video progress
  useEffect(() => {
    if (isPlaying && currentVideo) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1
          if (newProgress >= 100) {
            setIsPlaying(false)
            // Auto play next video if enabled
            if (autoPlay && currentIndex < (course?.videos?.length || 0) - 1) {
              setTimeout(() => {
                handleNextVideo()
              }, 2000)
            }
            return 100
          }
          return newProgress
        })
        
        // Update current time based on progress
        const totalSeconds = parseDuration(currentVideo.duration)
        const currentSeconds = Math.floor((progress / 100) * totalSeconds)
        setCurrentTime(formatTime(currentSeconds))
      }, 500)
      
      return () => clearInterval(interval)
    }
  }, [isPlaying, progress, autoPlay, currentIndex, course?.videos?.length, currentVideo])

  const parseDuration = (duration: string) => {
    const [minutes, seconds] = duration.split(':').map(Number)
    return minutes * 60 + seconds
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handlePrevVideo = () => {
    if (currentIndex > 0 && course?.videos) {
      const prevVideo = course.videos[currentIndex - 1]
      navigateTo('video-player', { industry, videoId: prevVideo.id })
      setProgress(0)
      setCurrentTime("0:00")
    }
  }

  const handleNextVideo = () => {
    if (currentIndex < (course?.videos?.length || 0) - 1 && course?.videos) {
      const nextVideo = course.videos[currentIndex + 1]
      navigateTo('video-player', { industry, videoId: nextVideo.id })
      setProgress(0)
      setCurrentTime("0:00")
    }
  }

  const handleVideoSelect = (video: any) => {
    navigateTo('video-player', { industry, videoId: video.id })
    setProgress(0)
    setCurrentTime("0:00")
  }

  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist)
  }

  // If no valid course or video data, show error state
  if (!course || !currentVideo) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl mb-4">Video không tìm thấy</h2>
          <Button 
            onClick={() => navigateTo('home')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Quay về trang chủ
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="flex h-screen">
        {/* Main Video Area */}
        <div className={`flex-1 flex flex-col ${showPlaylist ? 'pr-96' : ''} transition-all duration-300`}>
          {/* Video Header */}
          <div className="bg-black/90 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigateTo('video-detail', { industry })}
                className="text-white hover:text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại khóa học
              </Button>
              <div className="text-sm text-gray-300">
                Video {currentIndex + 1}/{course.videos?.length || 0}
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={togglePlaylist}
              className="text-white hover:text-white hover:bg-white/20"
            >
              <List className="w-4 h-4 mr-2" />
              {showPlaylist ? 'Ẩn' : 'Hiện'} playlist
            </Button>
          </div>

          {/* Video Player */}
          <div className="flex-1 relative bg-black">
            <div className="w-full h-full relative">
              <ImageWithFallback
                src={currentVideo.videoUrl}
                alt={currentVideo.title}
                className="w-full h-full object-cover"
              />
              
              {/* Play/Pause Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-24 h-24 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-200"
                >
                  {isPlaying ? (
                    <Pause className="w-12 h-12 text-white" />
                  ) : (
                    <Play className="w-12 h-12 text-white ml-1" />
                  )}
                </button>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                {/* Progress Bar */}
                <div className="mb-4">
                  <Progress 
                    value={progress} 
                    className="h-2 bg-white/20 cursor-pointer"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect()
                      const clickX = e.clientX - rect.left
                      const newProgress = (clickX / rect.width) * 100
                      setProgress(newProgress)
                      const totalSeconds = parseDuration(currentVideo.duration)
                      const newTime = Math.floor((newProgress / 100) * totalSeconds)
                      setCurrentTime(formatTime(newTime))
                    }}
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:text-white p-2"
                      onClick={handlePrevVideo}
                      disabled={currentIndex === 0}
                    >
                      <SkipBack className="w-5 h-5" />
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:text-white p-2"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:text-white p-2"
                      onClick={handleNextVideo}
                      disabled={currentIndex === (course.videos?.length || 0) - 1}
                    >
                      <SkipForward className="w-5 h-5" />
                    </Button>

                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:text-white p-2"
                      onClick={() => {
                        setProgress(0)
                        setCurrentTime("0:00")
                        setIsPlaying(false)
                      }}
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>

                    <div className="text-sm">
                      {currentTime} / {currentVideo.duration}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Volume2 className="w-4 h-4" />
                      <div className="w-20 h-1 bg-white/20 rounded cursor-pointer">
                        <div 
                          className="h-full bg-white rounded"
                          style={{ width: `${volume}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-white hover:text-white p-2">
                      <Settings className="w-4 h-4" />
                    </Button>
                    
                    <Button variant="ghost" size="sm" className="text-white hover:text-white p-2">
                      <Maximize className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="bg-background border-t p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-xl mb-2">{currentVideo.title}</h1>
                <p className="text-muted-foreground mb-4">{currentVideo.description}</p>
                
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{currentVideo.duration}</span>
                  </div>
                  <Badge variant={
                    currentVideo.level === "Cơ bản" ? "secondary" :
                    currentVideo.level === "Trung bình" ? "default" : "destructive"
                  }>
                    {currentVideo.level}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Tài liệu
                </Button>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    checked={autoPlay}
                    onChange={(e) => setAutoPlay(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">Tự động phát tiếp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Sidebar */}
        {showPlaylist && (
          <div className="fixed right-0 top-0 h-screen w-96 bg-background border-l flex flex-col">
            <div className="p-4 border-b">
              <h3 className="font-medium mb-2">{course.name}</h3>
              <div className="text-sm text-muted-foreground">
                {course.totalVideos} videos • {course.totalDuration}
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {course.videos?.map((video, index) => (
                <div 
                  key={video.id}
                  onClick={() => handleVideoSelect(video)}
                  className={`p-4 border-b cursor-pointer hover:bg-accent transition-colors ${
                    video.id === currentVideo.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      video.completed ? 'bg-green-500 text-white' : 
                      video.id === currentVideo.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}>
                      {video.completed ? <CheckCircle className="w-4 h-4" /> : index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{video.title}</h4>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{video.duration}</span>
                        <Badge 
                          variant="outline" 
                          className="text-xs px-1"
                        >
                          {video.level}
                        </Badge>
                      </div>
                      
                      {video.id === currentVideo.id && (
                        <div className="mt-2">
                          <Progress value={progress} className="h-1" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )) || []}
            </div>
            
            {/* Next Video Preview */}
            {currentIndex < (course.videos?.length || 0) - 1 && course.videos && (
              <div className="p-4 border-t bg-gray-50">
                <div className="text-sm text-muted-foreground mb-2">Tiếp theo:</div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-8 bg-gray-200 rounded overflow-hidden">
                    <ImageWithFallback
                      src={course.videos[currentIndex + 1]?.videoUrl || ""}
                      alt="Next video"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{course.videos[currentIndex + 1]?.title}</h4>
                    <div className="text-xs text-muted-foreground">
                      {course.videos[currentIndex + 1]?.duration}
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    onClick={handleNextVideo}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}