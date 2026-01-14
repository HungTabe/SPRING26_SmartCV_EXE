"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageWithFallback } from "@/components/ImageWithFallback"
import { Breadcrumb } from "@/components/Breadcrumb"
import { useRouter } from "next/navigation"
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
  `
}

export default function InterviewVideoPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-background">
            <div className="container px-4 mx-auto py-6">
                <Breadcrumb
                    items={[
                        // Updated Breadcrumb usage for correct type match if needed, but keeping simple for now
                        { label: "Hướng Dẫn Phỏng Vấn" },
                        { label: videoData.title }
                    ]}
                />

                <div className="grid lg:grid-cols-4 gap-8 mt-6">
                    {/* Main Video Content */}
                    <div className="lg:col-span-3 space-y-6">
                        <Button
                            variant="ghost"
                            onClick={() => router.push('/interview-guides')}
                            className="p-0 h-auto text-muted-foreground hover:text-foreground mb-4"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Quay lại khóa học
                        </Button>

                        {/* Video Player */}
                        <Card>
                            <CardContent className="p-0">
                                <div className="aspect-video bg-black rounded-lg relative overflow-hidden group">
                                    <ImageWithFallback
                                        src="https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVydmlldyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5NjgwNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                        alt="Video thumbnail"
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Video Controls Overlay */}
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors transform group-hover:scale-105 duration-200">
                                            <PlayCircle className="w-10 h-10 text-green-600 ml-1" />
                                        </div>
                                    </div>

                                    {/* Video Controls Bar */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Video Info */}
                        <div className="space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h1 className="text-2xl font-bold mb-2">{videoData.title}</h1>
                                    <p className="text-muted-foreground mb-4">{videoData.description}</p>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
                            <div className="flex items-center justify-between flex-wrap gap-4">
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
                                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                                            <span className="text-green-600 dark:text-green-400 font-medium">MA</span>
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

                            <TabsContent value="transcript" className="mt-4">
                                <Card>
                                    <CardContent className="pt-6">
                                        <p className="whitespace-pre-line leading-relaxed">{videoData.transcript}</p>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="notes" className="mt-4">
                                <Card>
                                    <CardContent className="pt-6">
                                        <textarea className="w-full min-h-[150px] p-4 border rounded-md" placeholder="Take notes here..." />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="resources" className="mt-4">
                                <Card>
                                    <CardContent className="pt-6 space-y-4">
                                        <div className="flex items-center justify-between p-3 border rounded hover:bg-accent transition-colors cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <BookOpen className="w-5 h-5 text-blue-500" />
                                                <div>
                                                    <div className="font-medium">Slide bài giảng</div>
                                                    <div className="text-xs text-muted-foreground">PDF • 2.5MB</div>
                                                </div>
                                            </div>
                                            <Download className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
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
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Thao tác nhanh</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button variant="outline" className="w-full justify-start">
                                    <Users className="w-4 h-4 mr-2" /> Mock Interview
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <BookOpen className="w-4 h-4 mr-2" /> Câu hỏi liên quan
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
