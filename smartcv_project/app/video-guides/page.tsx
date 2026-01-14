"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ImageWithFallback } from "@/components/ImageWithFallback"
import { Breadcrumb } from "@/components/Breadcrumb"
import { useRouter, useSearchParams } from "next/navigation"
import { PlayCircle, Clock, Users, Star, Download, CheckCircle } from "lucide-react"
import { Suspense } from "react"

const industryData = {
    it: {
        name: "Công Nghệ Thông Tin",
        description: "Hướng dẫn viết CV cho Developer, Tester, DevOps, Data Analyst và các vị trí IT khác",
        color: "bg-blue-500",
        image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2ODA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    marketing: {
        name: "Marketing & Sales",
        description: "CV Marketing Manager, Sales Executive, Digital Marketing và Content Creator",
        color: "bg-green-500",
        image: "https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVydmlldyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5NjgwNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    finance: {
        name: "Tài Chính & Ngân Hàng",
        description: "CV Kế toán, Tài chính, Ngân hàng và Bảo hiểm",
        color: "bg-purple-500",
        image: "https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVydmlldyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5NjgwNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    design: {
        name: "Thiết Kế & Sáng Tạo",
        description: "CV Graphic Designer, UI/UX, Photographer, Content Creator",
        color: "bg-pink-500",
        image: "https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVydmlldyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5NjgwNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
}

const videos = [
    {
        id: 1,
        title: "Cơ bản về CV - Những điều cần biết",
        description: "Tổng quan về cấu trúc CV, các phần quan trọng và nguyên tắc cơ bản",
        duration: "15:30",
        level: "Cơ bản",
        views: "2.1k",
        completed: true
    },
    {
        id: 2,
        title: "Viết mục tiêu nghề nghiệp hiệu quả",
        description: "Cách viết objective/summary thu hút nhà tuyển dụng ngay từ dòng đầu tiên",
        duration: "12:45",
        level: "Cơ bản",
        views: "1.8k",
        completed: true
    },
    {
        id: 3,
        title: "Trình bày kinh nghiệm làm việc",
        description: "Kỹ thuật STAR và cách highlight thành tích nổi bật",
        duration: "18:20",
        level: "Trung bình",
        views: "1.5k",
        completed: false
    },
    {
        id: 4,
        title: "Skills section - Làm nổi bật năng lực",
        description: "Cách liệt kê và đánh giá kỹ năng chuyên môn và kỹ năng mềm",
        duration: "10:15",
        level: "Cơ bản",
        views: "1.3k",
        completed: false
    },
    {
        id: 5,
        title: "CV cho Fresher - Không có kinh nghiệm?",
        description: "Chiến lược viết CV hiệu quả khi chưa có kinh nghiệm làm việc",
        duration: "22:10",
        level: "Cơ bản",
        views: "2.5k",
        completed: false
    },
    {
        id: 6,
        title: "CV Senior - Thể hiện leadership",
        description: "Cách viết CV cho vị trí quản lý và leadership role",
        duration: "16:40",
        level: "Nâng cao",
        views: "980",
        completed: false
    }
]

function VideoGuideContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const industry = searchParams.get('industry') || 'it'
    // @ts-ignore
    const currentIndustry = industryData[industry as keyof typeof industryData] || industryData.it

    return (
        <div className="container px-4 mx-auto py-6">
            <Breadcrumb
                items={[
                    { label: "Video Hướng Dẫn", href: "/home" },
                    { label: currentIndustry.name }
                ]}
            />

            {/* Header Section */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full ${currentIndustry.color}`}></div>
                            <Badge variant="secondary">Series Video</Badge>
                        </div>
                        <h1 className="text-4xl font-bold">{currentIndustry.name}</h1>
                        <p className="text-xl text-muted-foreground">{currentIndustry.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 lg:gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                            <PlayCircle className="w-5 h-5" />
                            <span>12 videos</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5" />
                            <span>8 giờ học</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5" />
                            <span>2.5k học viên</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span>4.8 (234 đánh giá)</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Tiến độ học tập</span>
                            <span>2/12 videos (17%)</span>
                        </div>
                        <Progress value={17} className="h-2" />
                    </div>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="aspect-video bg-gray-100 rounded-lg mb-4 relative overflow-hidden group cursor-pointer">
                                <ImageWithFallback
                                    src={currentIndustry.image}
                                    alt="Course preview"
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                        <PlayCircle className="w-8 h-8 text-blue-600 ml-1" />
                                    </div>
                                </div>
                            </div>
                            <Button
                                className="w-full mb-3"
                                onClick={() => router.push(`/video-guides/player?industry=${industry}&videoId=1`)}
                            >
                                Bắt Đầu Học
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Download className="w-4 h-4 mr-2" />
                                Tải Tài Liệu
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Bạn sẽ học được</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                <span className="text-sm">Cấu trúc CV chuẩn theo ngành</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                <span className="text-sm">Kỹ thuật highlight thành tích</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                <span className="text-sm">Từ khóa quan trọng trong CV</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                <span className="text-sm">Tránh các lỗi thường gặp</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Videos List */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Danh Sách Video</h2>

                <div className="space-y-4">
                    {videos.map((video, index) => (
                        <Card key={video.id} className={`transition-all duration-200 ${video.completed ? 'border-green-200 bg-green-50/50 dark:bg-green-900/10' : 'hover:shadow-md'}`}>
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${video.completed ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
                                            {video.completed ? (
                                                <CheckCircle className="w-6 h-6" />
                                            ) : (
                                                <PlayCircle className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-2">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                            <div>
                                                <h3 className="text-lg font-medium mb-1">{video.title}</h3>
                                                <p className="text-muted-foreground text-sm">{video.description}</p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <Badge variant={video.level === "Cơ bản" ? "secondary" : video.level === "Trung bình" ? "default" : "destructive"}>
                                                    {video.level}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                            <div className="flex items-center space-x-4 text-sm text-muted-foreground w-full sm:w-auto">
                                                <div className="flex items-center space-x-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{video.duration}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Users className="w-4 h-4" />
                                                    <span>{video.views}</span>
                                                </div>
                                            </div>

                                            <Button
                                                variant={video.completed ? "secondary" : "default"}
                                                size="sm"
                                                onClick={() => router.push(`/video-guides/watch?videoId=${video.id}&industry=${industry}`)}
                                                className="w-full sm:w-auto"
                                            >
                                                {video.completed ? "Xem lại" : "Bắt đầu"}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function VideoGuidePage() {
    return (
        <div className="min-h-screen bg-background">
            <Suspense fallback={<div>Loading...</div>}>
                <VideoGuideContent />
            </Suspense>
        </div>
    )
}
