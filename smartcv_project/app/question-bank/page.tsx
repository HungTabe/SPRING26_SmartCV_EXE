"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Search, Filter, BookOpen, Target, Users, Briefcase, Code, Palette, TrendingUp, Building } from "lucide-react"
import { useState } from "react"

const questionCategories = [
    { id: 'general', name: 'Câu hỏi chung', icon: Users, count: 150, color: 'bg-blue-500' },
    { id: 'behavioral', name: 'Hành vi', icon: Target, count: 120, color: 'bg-green-500' },
    { id: 'technical', name: 'Kỹ thuật', icon: Code, count: 200, color: 'bg-purple-500' },
    { id: 'situational', name: 'Tình huống', icon: Briefcase, count: 80, color: 'bg-orange-500' }
]

const industryQuestions = [
    { id: 'it', name: 'Công nghệ thông tin', icon: Code, count: 180 },
    { id: 'marketing', name: 'Marketing & Sales', icon: TrendingUp, count: 120 },
    { id: 'finance', name: 'Tài chính & Ngân hàng', icon: Building, count: 90 },
    { id: 'design', name: 'Thiết kế & Sáng tạo', icon: Palette, count: 75 }
]

const sampleQuestions = [
    {
        id: 1,
        question: "Hãy kể về bản thân bạn",
        category: "general",
        difficulty: "Cơ bản",
        industry: "all",
        tips: "Tập trung vào kinh nghiệm liên quan đến công việc, tránh thông tin cá nhân không cần thiết"
    },
    {
        id: 2,
        question: "Tại sao bạn muốn làm việc tại công ty chúng tôi?",
        category: "general",
        difficulty: "Cơ bản",
        industry: "all",
        tips: "Nghiên cứu kỹ về công ty, thể hiện sự hiểu biết về giá trị và mục tiêu của họ"
    },
    {
        id: 3,
        question: "Kể về một lần bạn phải làm việc dưới áp lực",
        category: "behavioral",
        difficulty: "Trung bình",
        industry: "all",
        tips: "Sử dụng phương pháp STAR (Situation, Task, Action, Result)"
    },
    {
        id: 4,
        question: "Giải thích sự khác biệt giữa var, let và const trong JavaScript",
        category: "technical",
        difficulty: "Trung bình",
        industry: "it",
        tips: "Tập trung vào scope, hoisting và khả năng reassignment"
    },
    {
        id: 5,
        question: "Làm thế nào để tăng conversion rate cho website?",
        category: "technical",
        difficulty: "Nâng cao",
        industry: "marketing",
        tips: "Đề cập đến A/B testing, UX/UI optimization, analytics"
    }
]

export default function QuestionBankPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedIndustry, setSelectedIndustry] = useState("all")
    const [selectedDifficulty, setSelectedDifficulty] = useState("all")

    const filteredQuestions = sampleQuestions.filter(q => {
        const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "all" || q.category === selectedCategory
        const matchesIndustry = selectedIndustry === "all" || q.industry === selectedIndustry || q.industry === "all"
        const matchesDifficulty = selectedDifficulty === "all" || q.difficulty === selectedDifficulty

        return matchesSearch && matchesCategory && matchesIndustry && matchesDifficulty
    })

    return (
        <div className="min-h-screen bg-background">
            <div className="container px-4 mx-auto py-6">
                <Breadcrumb
                    items={[
                        { label: "Ngân Hàng Câu Hỏi" }
                    ]}
                />

                {/* Header */}
                <div className="mb-8 mt-6">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold">Ngân Hàng Câu Hỏi Phỏng Vấn</h1>
                            <p className="text-lg md:text-xl text-muted-foreground mt-2">
                                500+ câu hỏi phỏng vấn được phân loại theo ngành nghề và độ khó
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                    {questionCategories.map((category) => (
                        <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
                            <CardContent className="p-4 md:p-6">
                                <div className="flex items-center space-x-3 md:space-x-4">
                                    <div className={`p-2 md:p-3 rounded-lg ${category.color} flex-shrink-0`}>
                                        <category.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-xl md:text-2xl font-bold">{category.count}</div>
                                        <p className="text-xs md:text-sm text-muted-foreground truncate">{category.name}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Search and Filters */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                            <div className="md:col-span-2 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                <Input
                                    placeholder="Tìm kiếm câu hỏi..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>

                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Loại câu hỏi" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tất cả loại</SelectItem>
                                    <SelectItem value="general">Câu hỏi chung</SelectItem>
                                    <SelectItem value="behavioral">Hành vi</SelectItem>
                                    <SelectItem value="technical">Kỹ thuật</SelectItem>
                                    <SelectItem value="situational">Tình huống</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Ngành nghề" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tất cả ngành</SelectItem>
                                    <SelectItem value="it">Công nghệ thông tin</SelectItem>
                                    <SelectItem value="marketing">Marketing & Sales</SelectItem>
                                    <SelectItem value="finance">Tài chính & Ngân hàng</SelectItem>
                                    <SelectItem value="design">Thiết kế & Sáng tạo</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Độ khó" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tất cả mức độ</SelectItem>
                                    <SelectItem value="Cơ bản">Cơ bản</SelectItem>
                                    <SelectItem value="Trung bình">Trung bình</SelectItem>
                                    <SelectItem value="Nâng cao">Nâng cao</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Content Tabs */}
                <Tabs defaultValue="questions" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="questions">Danh Sách Câu Hỏi</TabsTrigger>
                        <TabsTrigger value="practice">Luyện Tập</TabsTrigger>
                    </TabsList>

                    <TabsContent value="questions" className="space-y-4">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <p className="text-muted-foreground">
                                Hiển thị {filteredQuestions.length} câu hỏi
                            </p>
                            <Button variant="outline" className="w-full sm:w-auto">
                                <Filter className="w-4 h-4 mr-2" />
                                Lọc nâng cao
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {filteredQuestions.map((question, index) => (
                                <Card key={question.id} className="hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                                        <span className="text-sm text-muted-foreground">#{index + 1}</span>
                                                        <Badge variant={
                                                            question.difficulty === "Cơ bản" ? "secondary" :
                                                                question.difficulty === "Trung bình" ? "default" : "destructive"
                                                        }>
                                                            {question.difficulty}
                                                        </Badge>
                                                        <Badge variant="outline">
                                                            {questionCategories.find(c => c.id === question.category)?.name}
                                                        </Badge>
                                                    </div>
                                                    <h3 className="text-lg font-semibold mb-3">{question.question}</h3>
                                                </div>
                                            </div>

                                            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                                                <div className="flex items-start space-x-3">
                                                    <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <h4 className="text-sm font-semibold mb-1 text-blue-800 dark:text-blue-200">
                                                            Gợi ý trả lời:
                                                        </h4>
                                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                                            {question.tips}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
                                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                                    <span className="flex items-center">
                                                        <Briefcase className="w-4 h-4 mr-1" />
                                                        {question.industry === "all" ? "Tất cả ngành" :
                                                            industryQuestions.find(i => i.id === question.industry)?.name}
                                                    </span>
                                                </div>
                                                <div className="flex w-full sm:w-auto space-x-2">
                                                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                                                        Lưu câu hỏi
                                                    </Button>
                                                    <Button size="sm" className="flex-1 sm:flex-none">
                                                        Luyện tập
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="practice" className="space-y-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="text-lg">Flashcard Mode</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Ôn tập câu hỏi theo dạng thẻ ghi nhớ
                                    </p>
                                    <Button className="w-full">Bắt Đầu</Button>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="text-lg">Quiz Mode</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Kiểm tra kiến thức với bài quiz tương tác
                                    </p>
                                    <Button className="w-full" variant="outline">Thử Nghiệm</Button>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="text-lg">Timed Practice</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Luyện tập với thời gian giới hạn
                                    </p>
                                    <Button className="w-full" variant="outline">Thực Hành</Button>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Progress Stats */}
                        <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
                            <CardHeader>
                                <CardTitle>Thống Kê Luyện Tập</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-background/50 rounded-lg">
                                    <div className="text-3xl text-green-600 dark:text-green-400 font-bold mb-1">45</div>
                                    <p className="text-sm text-muted-foreground">Câu đã luyện</p>
                                </div>
                                <div className="text-center p-4 bg-background/50 rounded-lg">
                                    <div className="text-3xl text-blue-600 dark:text-blue-400 font-bold mb-1">78%</div>
                                    <p className="text-sm text-muted-foreground">Tỷ lệ chính xác</p>
                                </div>
                                <div className="text-center p-4 bg-background/50 rounded-lg">
                                    <div className="text-3xl text-purple-600 dark:text-purple-400 font-bold mb-1">12</div>
                                    <p className="text-sm text-muted-foreground">Câu yêu thích</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
